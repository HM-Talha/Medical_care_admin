import React, { useEffect, useState } from "react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUserSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Modal,
  Typography,
  Paper,
  InputAdornment,
} from "@mui/material";
import { useStyles } from "./styles";
import DataTable from "app/components/DataTable";
import DeleteModal from "app/components/DeleteModal";
import { useSelector } from "react-redux";
import { selectList, selectLoading, selectQuery } from "./redux/selector";
import InfiniteScroll from "react-infinite-scroller";
import TableLoader from "app/components/TableLoader";
import { selectSearch } from "../Dashboard/selector";
import Loader from "app/components/Loader";
import Topbar from "../Dashboard/components/topbar";
import Addbtn from "./assets/Buttonplus.png";
import MessageBtn from "./assets/Message.png";
import ImportBtn from "./assets/Import.png";
import downloadBtn from "./assets/Download.png";
import { CustomDrawer } from "app/components/Drawer";
import { useNavigate } from "react-router-dom";
import uploadBtn from "./assets/Upload.png";
import selectArrow from "./assets/SelectArrow.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PatientsList = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [opensend, setSend] = useState(false);
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [adviserOpen, setAdviserOpen] = useState(false);
  const [excelOrgOpen, setExcelorgOpen] = useState(false);
  const [excelDepOpen, setExceldepOpen] = useState(false);
  const [excelBankOpen, setExcelBankOpen] = useState(false);
  const [tableData, setTableData] = useState(false);

  const listitems = useSelector(selectList);
  const { links, items } = listitems;
  const [creationDateState, setCreationDateState] = useState<
    Array<{ startDate: Date | null; endDate: Date | null; key: string }>
  >([{ startDate: null, endDate: null, key: "selection" }]);
  const [editedDateState, setEditedDateState] = useState<
    Array<{ startDate: Date | null; endDate: Date | null; key: string }>
  >([{ startDate: null, endDate: null, key: "selection" }]);
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
  const styles = useStyles();
  const navigate = useNavigate();
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: useUserSaga });
  const handleClose = () => {
    setOpenRemoveModal(null);
  };

  const columns = [
    {
      id: "organizationName",
      label: "Organization Name",
      sortValue: "selector.organizationName",
    },
    {
      id: "departmentName",
      label: "Department Name",
      sortValue: "selector.departmentName",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "bankName",
      label: "Bank Name",
      sortValue: "selector.contactName",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "assignedAdvisor",
      label: "Assigned Advisor",
      sortValue: "selector.assignedAdvisor",
      // align:'right',
    },
    {
      id: "patientFirstName",
      label: "Patient First Name",
      sortValue: "selector.patientFirstName",
      // align:'right',
    },
    {
      id: "patientLastName",
      label: "Patient Last Name",
      sortValue: "selector.patientLastName",
      // align:'right',
    },
  ];

  useEffect(() => {
    dispatch(actions.setQuery({ name: "q", value: searchField }));
  }, [searchField]);

  const handleEditClose = () => {
    dispatch(actions.resetNewUserForm());
    setEditModalOpen(false);
  };

  const onConfirmeDelete = () => {
    if (openRemoveModal) {
      dispatch(actions.handleBlock(openRemoveModal?.id));
      setOpenRemoveModal(null);
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actions.getList());
  }, [
    q,
    orderDirection,
    orderField,
    distributorId,
    user_type,
    createMax,
    createMin,
    updateMax,
    updateMin,
    dispatch,
  ]);

  const setPageQuery = (name: string, value: any) => {
    dispatch(actions.setQuery({ name, value }));
  };

  const getNextPage = () => {
    console.log(links, "links");
    setTimeout(() => {
      console.log("reqChangeActions.getNextPageItems(links.next)==");
      dispatch(actions.getNextPage(links.next));
      return false;
    }, 1000);
  };
  const handleImportModal = () => {
    setOpenModal(true);
  };
  const handleImportModalClose = () => {
    setOpenModal(false);
  };
  const handleEdit = (e) => {
    // console.log("tableData", e);
    setTableData(true);
    navigate("/patients-list/patient-details-edit?mode=edit", { state: e });
    console.log("e", e);
  };
  const handleEditOnDbl = (e) => {
    navigate("/patients-list/patients-detail?mode=view", { state: e });
    // console.log("tableData", e);

    setTableData(true);
    console.log("e", e);
  };

  const handleDelete = () => {
    setDelete(true);
  };
  const handleDeleteClose = () => {
    setDelete(false);
  };
  const handleSend = () => {
    setSend(true);
  };
  const handleSendClose = () => {
    setSend(false);
  };
  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
      <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={12}>
        <Topbar />
        <div className={styles.bodyContainer}>
          <Grid
            container
            spacing={0}
            md={12}
            sx={{
              padding: "30px 0px 10px 0px",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={2}>
              <label className={styles.label}>Organization name</label>
              <Select
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={10}
                className={styles.textEnabled}
                onClick={() => setOrganizationOpen(!organizationOpen)}
                open={organizationOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={10}> Organization 1 </MenuItem>
                <MenuItem value={20}> Organization 1 </MenuItem>
                <MenuItem value={30}> Organization 1 </MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Department name</label>
              <Select
                variant="outlined"
                // select
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                value={10}
                className={styles.textEnabled}
                onClick={() => setDepartmentOpen(!departmentOpen)}
                open={departmentOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={10}>Department 1</MenuItem>
                <MenuItem value={20}>Department 1</MenuItem>
                <MenuItem value={30}>Department 1</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Advisor name</label>
              <Select
                variant="outlined"
                fullWidth
                // select
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                value={10}
                className={styles.textEnabled}
                onClick={() => setAdviserOpen(!adviserOpen)}
                open={adviserOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={10}>Assigned Advisor</MenuItem>
                <MenuItem value={20}>Assigned Advisor</MenuItem>
                <MenuItem value={30}>Assigned Advisor</MenuItem>
              </Select>
            </Grid>

            <Grid xs={6} className={styles.dotBox} item columnGap={2}>
              <Grid className={styles.messageImportBox} item>
                <Button className={styles.gridBtn} onClick={handleSend}>
                  <img width="14px" src={MessageBtn}></img>
                  <label className={styles.messageImportLabel}>
                    Send Message
                  </label>
                </Button>
              </Grid>
              <Grid className={styles.downloadBox} item>
                <Button className={styles.gridBtn}>
                  <img width="14px" src={downloadBtn}></img>
                  <label className={styles.downloadLabel}>Download</label>
                </Button>
              </Grid>

              <Grid className={styles.messageImportBox} item>
                <Button className={styles.gridBtn} onClick={handleImportModal}>
                  <img width="14px" src={ImportBtn}></img>
                  <label className={styles.messageImportLabel}>Import</label>
                </Button>
              </Grid>
              <Modal
                open={openModal}
                onClose={handleImportModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card className={styles.importModal}>
                  <div className={styles.modalContainer}>
                    <Grid>
                      <Typography align="center" className={styles.headerModal}>
                        Import From Excel
                      </Typography>
                    </Grid>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      sx={{ padding: "20px 0px" }}
                    >
                      <Grid item xs={4}>
                        <span className={styles.label}>Organization name</span>
                        <Select
                          margin="dense"
                          variant="outlined"
                          fullWidth
                          required
                          id="username"
                          placeholder="Enter Organization name"
                          name="username"
                          autoComplete={"off"}
                          autoFocus
                          value={10}
                          onClick={() => setExcelorgOpen(!excelOrgOpen)}
                          open={excelOrgOpen}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          <MenuItem
                            onClick={() => setExcelorgOpen(!excelOrgOpen)}
                            value={10}
                          >
                            Organization 1
                          </MenuItem>
                          <MenuItem
                            onClick={() => setExcelorgOpen(!excelOrgOpen)}
                            value={20}
                          >
                            Organization 1
                          </MenuItem>
                          <MenuItem
                            onClick={() => setExcelorgOpen(!excelOrgOpen)}
                            value={30}
                          >
                            Organization 1
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={4}>
                        <label className={styles.label}>Department name</label>
                        <Select
                          variant="outlined"
                          margin="dense"
                          required
                          fullWidth
                          id="username"
                          placeholder="Enter Activity Name"
                          name="username"
                          autoComplete={"off"}
                          autoFocus
                          value={10}
                          onClick={() => setExceldepOpen(!excelDepOpen)}
                          open={excelDepOpen}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          <MenuItem
                            onClick={() => setExceldepOpen(!excelDepOpen)}
                            value={10}
                          >
                            Department 1
                          </MenuItem>
                          <MenuItem
                            onClick={() => setExceldepOpen(!excelDepOpen)}
                            value={20}
                          >
                            Department 1
                          </MenuItem>
                          <MenuItem
                            onClick={() => setExceldepOpen(!excelDepOpen)}
                            value={30}
                          >
                            Department 1
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid item xs={4}>
                        <label className={styles.label}>Bank name</label>
                        <Select
                          variant="outlined"
                          margin="dense"
                          required
                          fullWidth
                          id="username"
                          placeholder="Enter Activity Name"
                          name="username"
                          autoComplete={"off"}
                          autoFocus
                          value={10}
                          onClick={() => setExcelBankOpen(!excelBankOpen)}
                          open={excelBankOpen}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          <MenuItem
                            onClick={() => setExcelBankOpen(!excelBankOpen)}
                            value={10}
                          >
                            Bank 1
                          </MenuItem>
                          <MenuItem
                            onClick={() => setExcelBankOpen(!excelBankOpen)}
                            value={20}
                          >
                            Bank 1
                          </MenuItem>
                          <MenuItem
                            onClick={() => setExcelBankOpen(!excelBankOpen)}
                            value={30}
                          >
                            Bank 1
                          </MenuItem>
                        </Select>
                      </Grid>
                      <Grid className={styles.dotBox} item xs={4}>
                        <Grid className={styles.uploadBox}>
                          <img width="30px" src={uploadBtn}></img>
                          <label className={styles.uploadLabel}>
                            Upload Document
                          </label>
                        </Grid>
                      </Grid>
                      <Grid className={styles.dotBox} item xs={8}>
                        <TextField
                          variant="outlined"
                          margin="dense"
                          required
                          fullWidth
                          id="username"
                          placeholder="Excel File Name"
                          name="username"
                          autoComplete={"off"}
                          autoFocus
                        />
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
                            onClick={handleImportModalClose}
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
                  </div>
                </Card>
              </Modal>
              <Modal
                open={opensend}
                onClose={handleSendClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Card className={styles.messageModal}>
                  <div className={styles.modalContainer}>
                    <Grid>
                      <Typography align="center" className={styles.headerModal}>
                        Send Message
                      </Typography>
                    </Grid>
                    <Grid
                      xs={5}
                      sx={{ paddingTop: "30px", paddingBottom: "10px" }}
                    >
                      <Grid className={styles.chipBox}>
                        <label className={styles.chipLabel}>
                          Total Patients List
                        </label>
                        <label className={styles.numLabel}>90</label>
                      </Grid>
                    </Grid>

                    <Grid sx={{ paddingBottom: "40px" }}>
                      <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        placeholder="Enter the message"
                        name="username"
                        autoComplete={"off"}
                        autoFocus
                        rows={4}
                        multiline
                      />
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
                            onClick={handleSendClose}
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid container item xs={6} direction="column">
                          <Button
                            className={styles.saveBtn}
                            variant="contained"
                          >
                            Send
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </Card>
              </Modal>
            </Grid>
          </Grid>

          <div className={styles.tableDiv}>
            <DataTable
              loading={loading}
              orderDirection={orderDirection}
              orderField={orderField}
              setQuery={setPageQuery}
              rows={items}
              columns={columns}
              Actions="Delete,Edit"
              page="patientsList"
              editAction={handleEdit}
              onRowDoubleClick={handleEditOnDbl}
              deleteAction={handleDelete}
            />
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
          </div>

          <Grid container style={{ display: "flex" }} md={12}>
            <Grid
              container
              columnGap={3}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: "15px",
              }}
              md={6}
            >
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>Total Patients List</label>
                <label className={styles.numLabel}>20</label>
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={3}
              style={{ display: "flex", justifyContent: "flex-end" }}
              md={6}
            >
              <Grid
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "7px",
                }}
              >
                <Button>
                  <img height="45px" src={Addbtn}></img>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default PatientsList;
