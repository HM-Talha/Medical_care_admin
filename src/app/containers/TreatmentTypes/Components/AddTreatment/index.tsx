import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  Select,
  Modal,
  Card,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUserSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
import Addbtn from "../../assets/Buttonplus.png";
import Topbar from "app/containers/Dashboard/components/topbar";
import { style } from "@mui/system";
import { useStyles } from "./styles";
import DataTable from "app/components/DataTable";
import { useSelector } from "react-redux";
import { selectSearch } from "../../../Dashboard/selector";
import { selectList, selectLoading, selectQuery } from "./redux/selector";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomDrawer } from "app/components/Drawer";
import Back from "../AddTreatment/assets/Back.png";
import uploadBtn from "../AddTreatment/assets/Upload.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {};

const AddTreatment = (props: Props) => {
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const styles = useStyles();
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [value, setValue] = useState(0);
  const [paticipatesOpen, setParticipatesOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [onRow, setOnRow] = useState(true);
  const [allOpen, setAllOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [disable, setDisable] = useState(true);

  const params = useLocation();

  const listitems = useSelector(selectList);
  const { links, items } = listitems;
  const {
    q,
    orderField,
    orderDirection,
    distributorId,
    user_type,
    createMax,
    createMin,
    updateMax,
    updateMin,
  } = useSelector(selectQuery);
  const searchField = useSelector(selectSearch);
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: useUserSaga });
  const setPageQuery = (name: string, value: any) => {
    dispatch(actions.setQuery({ name, value }));
  };

  const columns = [
    {
      id: "number",
      label: "#",
      align: "left",
      sortValue: "selector.number",
    },
    {
      id: "startTime",
      label: "Start Time",
      sortValue: "selector.startTime",
      align: "left",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "endTime",
      label: "End Time",
      sortValue: "selector.endTime",
      align: "left",
      // format: (value) => value.lastName || "-",
    },
  ];
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(actions.setQuery({ name: "q", value: searchField }));
  }, [searchField]);

  const handleChange = (e) => {
    setBtnDisabled(!e.target.value);
  };
  const handleModal = () => {
    setOnRow(false);
    setOpenModal(true);
  };

  const handleTabChange = (event, value) => {
    setValue(value);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleDelete = () => {
    setDelete(true);
  };

  const handleDeleteClose = () => {
    setDelete(false);
  };

  const rowDoubleAction = () => {
    setOnRow(true);
    setOpenModal(true);
  };
  const handleEditButton = () => {
    setDisable(false);
  };
  const handleCancelBtn = () => {
    if (
      params.search.split("=")[1] === "add" ||
      params.search.split("=")[1] === "edit"
    ) {
      navigate("/treatment-types");
    }
    setDisable(true);
  };

  useEffect(() => {
    if (
      params.search.split("=")[1] === "add" ||
      params.search.split("=")[1] === "edit"
    ) {
      setDisable(false);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
      <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={12}>
        <Topbar />
        <div className={styles.bodyContainer}>
          <Grid>
            <div className={styles.mainHeader}>
              <img
                src={Back}
                className={styles.imgClass}
                onClick={() => navigate(-1)}
              />
              <Typography className={styles.textHeader}>
                Treatment Types /
              </Typography>
              {params.search.split("=")[1] === "add" ? (
                <Typography className={styles.textHeaderT}>
                  Add Treatment Type
                </Typography>
              ) : (
                <Typography className={styles.textHeaderT}>
                  Treatment Type Details{" "}
                  {params.search.split("=")[1] !== "add" &&
                  params.search.split("=")[1] !== "edit" &&
                  disable
                    ? "View"
                    : "Edit"}{" "}
                  Mode
                </Typography>
              )}
            </div>
          </Grid>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid container spacing={2} md={12}>
              <Grid item xs={2}>
                <label className={styles.label}>Treatment type name</label>
                <TextField
                  variant="outlined"
                  disabled={disable}
                  margin="dense"
                  required
                  fullWidth
                  id="treatmentName"
                  placeholder="Choose name"
                  className={styles.textEnabled}
                  name="treatmentName"
                  autoComplete={"off"}
                  autoFocus
                  defaultValue={
                    params.search.split("=")[1] !== "add" ? "Name 1" : ""
                  }
                />
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Number of Sessions</label>
                <TextField
                  variant="outlined"
                  disabled={disable}
                  margin="dense"
                  required
                  fullWidth
                  id="numberOfSessions"
                  placeholder="Enter number of sessions"
                  className={styles.textEnabled}
                  name="numberOfSessions"
                  autoComplete={"off"}
                  autoFocus
                  defaultValue={
                    params.search.split("=")[1] !== "add" ? "1" : ""
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>
                  Maximum number of participates
                </label>
                <Select
                  disabled={disable}
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  required
                  autoComplete={"off"}
                  autoFocus
                  className={styles.SelectEnabled}
                  onClick={() => setParticipatesOpen(!paticipatesOpen)}
                  open={paticipatesOpen}
                  IconComponent={KeyboardArrowDownIcon}
                  defaultValue={
                    params.search.split("=")[1] !== "add" ? "10" : ""
                  }
                >
                  <MenuItem value={10}>Individual</MenuItem>
                  <MenuItem value={20}>Individual</MenuItem>
                  <MenuItem value={30}>Individual</MenuItem>
                </Select>
              </Grid>

              <Grid  className={styles.chipBox}>
                <label className={styles.numLabel}>1</label>
              </Grid>

              <Grid item xs={2}>
                <label className={styles.label}>Status</label>
                <Select
                  variant="outlined"
                  disabled={disable}
                  fullWidth
                  margin="dense"
                  required
                  autoComplete={"off"}
                  autoFocus
                  className={styles.SelectEnabled}
                  onClick={() => setStatusOpen(!statusOpen)}
                  open={statusOpen}
                  IconComponent={KeyboardArrowDownIcon}
                  defaultValue={
                    params.search.split("=")[1] !== "add" ? "10" : ""
                  }
                >
                  <MenuItem value={10}>ALL</MenuItem>
                  <MenuItem value={30}>ALL</MenuItem>
                  <MenuItem value={40}>ALL</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={1}
            md={12}
            sx={{
              padding: "5px 0px 10px 10px",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label={<span>After Treatment Content</span>} />
                <Tab label={<span>Before Treatment Content</span>} />
              </Tabs>
              <TabPanel  value={value} index={0}>
                <Grid container spacing={2} md={12} sx={{ paddingTop: "5px" }}>
                  <Grid item xs={8}>
                    <label className={styles.label}>Description</label>
                    <TextField
                      variant="outlined"
                      margin="dense"
                      disabled={disable}
                      required
                      fullWidth
                      id="description"
                      className={styles.textMultilines}
                      name="description"
                      autoComplete={"off"}
                      autoFocus
                      multiline
                      rows={3}
                      defaultValue={
                        params.search.split("=")[1] !== "add" ? "" : ""
                      }
                    />
                  </Grid>

                  <Grid className={styles.dotBox} item xs={2}>
                    <Button disabled={disable} className={styles.uploadBox}>
                      <img width="30px" src={uploadBtn}></img>
                      <label className={styles.uploadLabel}>
                        Upload Video File
                      </label>
                    </Button>
                  </Grid>

                  <Grid className={styles.dotBox} item xs={2}>
                    <Button disabled={disable} className={styles.uploadBox}>
                      <img width="30px" src={uploadBtn}></img>
                      <label className={styles.uploadLabel}>
                        Upload Audio File
                      </label>
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
              <TabPanel value={value} index={1}>
              <Grid container spacing={2} md={12} sx={{ paddingTop: "5px" }}>
                  <Grid item xs={8}>
                    <label className={styles.label}>Description</label>
                    <TextField
                      variant="outlined"
                      margin="dense"
                      disabled={disable}
                      required
                      fullWidth
                      id="description"
                      className={styles.textMultilines}
                      name="description"
                      autoComplete={"off"}
                      autoFocus
                      multiline
                      rows={3}
                      defaultValue={
                        params.search.split("=")[1] !== "add" ? "" : ""
                      }
                    />
                  </Grid>

                  <Grid className={styles.dotBox} item xs={2}>
                    <Button disabled={disable} className={styles.uploadBox}>
                      <img width="30px" src={uploadBtn}></img>
                      <label className={styles.uploadLabel}>
                        Upload Video File
                      </label>
                    </Button>
                  </Grid>

                  <Grid className={styles.dotBox} item xs={2}>
                    <Button disabled={disable} className={styles.uploadBox}>
                      <img width="30px" src={uploadBtn}></img>
                      <label className={styles.uploadLabel}>
                        Upload Audio File
                      </label>
                    </Button>
                  </Grid>
                </Grid>
              </TabPanel>
            </Box>
          </Grid>
          <Grid>
            <DataTable
              loading={loading}
              orderDirection={orderDirection}
              orderField={orderField}
              setQuery={setPageQuery}
              rows={items}
              columns={columns}
              Actions="Delete,Edit,Toggle"
              page="addTreatmentTypes"
              deleteAction={handleDelete}
              onRowDoubleClick={rowDoubleAction}
              isPointerCursor={true}
            />
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleModal}>
              <img height="45px" src={Addbtn}></img>
            </Button>
          </Grid>
          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card className={styles.addModal}>
              <div className={styles.modalContainer}>
                {!onRow ? (
                  <>
                    <Grid>
                      <Typography align="center" className={styles.headerModal}>
                        Assign Timeslot
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{ padding: "20px 0px" }}
                    >
                      <Grid item xs={6}>
                        <label className={styles.label}>Start Time</label>
                        <Select
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          required
                          autoComplete={"off"}
                          autoFocus
                          value={10}
                          className={styles.textEnabled}
                          onClick={() => setAllOpen(!allOpen)}
                          open={allOpen}
                          IconComponent={KeyboardArrowDownIcon}
                          MenuProps={{
                            disableScrollLock: true,
                          }}
                        >
                          <MenuItem
                            onClick={() => setAllOpen(!allOpen)}
                            value={10}
                          >
                            10:00
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={6}>
                        <label className={styles.label}>End Time</label>
                        <Select
                          margin="dense"
                          fullWidth
                          variant="outlined"
                          required
                          autoComplete={"off"}
                          autoFocus
                          value={10}
                          className={styles.textEnabled}
                          onClick={() => setDepartmentOpen(!departmentOpen)}
                          open={departmentOpen}
                          IconComponent={KeyboardArrowDownIcon}
                          MenuProps={{
                            disableScrollLock: true,
                          }}
                        >
                          <MenuItem value={"All"}>All</MenuItem>
                          <MenuItem
                            onClick={() => setDepartmentOpen(!departmentOpen)}
                            value={10}
                          >
                            10:45
                          </MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                    <div>
                      <Grid container spacing={3}>
                        <Grid
                          className={styles.btnContainer}
                          container
                          item
                          xs={6}
                          direction="column"
                        >
                          <Button
                            className={styles.cancelBtn}
                            variant="outlined"
                            onClick={handleModalClose}
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid container item xs={6} direction="column">
                          <Button
                            className={styles.saveBtn}
                            variant="contained"
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </>
                ) : (
                  <>
                    <Grid>
                      <Typography align="center" className={styles.headerModal}>
                        Edit Timeslot
                      </Typography>
                    </Grid>
                    <Grid container>
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                        sx={{ padding: "20px 0px" }}
                      >
                        <Grid item xs={6}>
                          <label className={styles.label}>Start Time</label>
                          <Select
                            margin="dense"
                            fullWidth
                            variant="outlined"
                            required
                            autoComplete={"off"}
                            autoFocus
                            value={10}
                            className={styles.textEnabled}
                            onClick={() => setAllOpen(!allOpen)}
                            open={allOpen}
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              disableScrollLock: true,
                            }}
                          >
                            <MenuItem
                              onClick={() => setAllOpen(!allOpen)}
                              value={10}
                            >
                              10:00
                            </MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={6}>
                          <label className={styles.label}>End Time</label>
                          <Select
                            margin="dense"
                            fullWidth
                            variant="outlined"
                            required
                            autoComplete={"off"}
                            autoFocus
                            value={10}
                            className={styles.textEnabled}
                            onClick={() => setDepartmentOpen(!departmentOpen)}
                            open={departmentOpen}
                            IconComponent={KeyboardArrowDownIcon}
                            MenuProps={{
                              disableScrollLock: true,
                            }}
                          >
                            <MenuItem value={"All"}>All</MenuItem>
                            <MenuItem
                              onClick={() => setDepartmentOpen(!departmentOpen)}
                              value={10}
                            >
                              10:45
                            </MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                    </Grid>
                    <div>
                      <Grid container spacing={3}>
                        <Grid
                          className={styles.btnContainer}
                          container
                          item
                          xs={6}
                          direction="column"
                        >
                          <Button
                            className={styles.cancelBtn}
                            variant="outlined"
                            onClick={handleModalClose}
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid container item xs={6} direction="column">
                          <Button
                            className={styles.saveBtn}
                            variant="contained"
                          >
                            Save
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </>
                )}
              </div>
            </Card>
          </Modal>
          <Modal
            open={openDelete}
            onClose={handleDeleteClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card className={styles.deleteModal}>
              <div className={styles.modalContainer}>
                <Grid>
                  <Typography align="center" className={styles.headerModal}>
                    Delete Organization
                  </Typography>
                </Grid>
                <Grid sx={{ padding: "30px 0px" }}>
                  <Typography align="center" className={styles.deleteTypo}>
                    Do you really want to delete organization 1?
                  </Typography>
                </Grid>

                <div>
                  <Grid container spacing={3}>
                    <Grid
                      className={styles.btnContainer}
                      container
                      item
                      xs={6}
                      direction="column"
                    >
                      <Button
                        className={styles.cancelBtn}
                        variant="outlined"
                        onClick={handleDeleteClose}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid container item xs={6} direction="column">
                      <Button className={styles.saveBtn} variant="contained">
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Card>
          </Modal>
          <Grid
            container
            style={{ display: "flex", justifyContent: "flex-end" }}
            sx={{ padding: "0px 0px 20px 0px" }}
            md={12}
          >
            {params.search.split("=")[1] !== "add" &&
            params.search.split("=")[1] !== "edit" &&
            disable ? (
              <Grid>
                <Button
                  className={styles.saveBtn}
                  variant="contained"
                  onClick={handleEditButton}
                >
                  Edit
                </Button>
              </Grid>
            ) : (
              <Grid
                container
                columnGap={3}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Grid>
                  <Button
                    className={styles.cancelBtn}
                    variant="outlined"
                    onClick={handleCancelBtn}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid>
                  <Button className={styles.saveBtn} variant="contained">
                    Save
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default AddTreatment;
