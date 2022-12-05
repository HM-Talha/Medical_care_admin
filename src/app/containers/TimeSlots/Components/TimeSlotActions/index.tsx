import {
  TextField,
  MenuItem,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Box,
  Tabs,
  Tab,
  Select,
  Checkbox,
  Modal,
  Card,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUserSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
import Addbtn from "../../assets/Buttonplus.png";
import { useStyles } from "./styles";
import Topbar from "app/containers/Dashboard/components/topbar";
import { style } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomDrawer } from "app/components/Drawer";
import Back from "./assets/Back.png";
import uploadBtn from "../GroupTreatment/assets/Upload.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { selectList, selectLoading, selectQuery } from "./redux/selector";
import DataTable from "app/components/DataTable";

type Props = {};

const TimeSlotActions = (props) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const params = useLocation();
  const [disable, setDisable] = useState(false);
  const [organization, setOrganization] = useState(false);
  const [department, setDepartment] = useState(false);
  const [bank, setBank] = useState(false);
  const [instructorName, setInstructorName] = useState(false);
  const [actualInstructor, setActualInstructor] = useState(false);
  const [treatmentType, setTreatmentType] = useState(false);
  const [sessionNum, setSessionNum] = useState(false);
  const [city, setCity] = useState(false);
  const [openDelete, setDelete] = useState(false);

  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
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
  //const searchField = useSelector(selectSearch);
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: useUserSaga });
  const dispatch = useDispatch();

  const columns = [
    {
      id: "number",
      label: "#",
      sortValue: "selector.number",
    },
    {
      id: "startTime",
      label: "Start Time",
      sortValue: "selector.startTime",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "endTime",
      label: "End Time",
      sortValue: "selector.must",

      // format: (value) => value.lastName || "-",
    },
    {
      id: "patientNames",
      label: "Assigned Patient Name (s)",
      sortValue: "selector.patientNames",
      // format: (value) => value.lastName || "-",
    },
  ];

  // useEffect(() => {
  //   dispatch(actions.setQuery({ name: "q", value: searchField }));
  // }, [searchField]);

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

  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  // useEffect(() => {
  //   if (
  //     params.search.split("=")[1] === "add" ||
  //     params.search.split("=")[1] === "edit"
  //   ) {
  //     setDisable(false);
  //     console.log("DISABLE", disable);
  //   }
  // }, [params.search]);
  const handleEdit = () => {
    setDisable(false);
  };
  const handleRowDoubleClick = () => {
    setDisable(true);
  };
  const handleDelete = () => {
    setDelete(true);
  };
  const handleDeleteClose = () => {
    setDelete(false);
  };
  return (
    <Grid className={styles.mainContainer}>
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
                Time Slots /
              </Typography>
              {params.search.split("=")[1] === "add" ? (
                <Typography className={styles.textHeaderT}>
                  Add Time Slots
                </Typography>
              ) : (
                <Typography className={styles.textHeaderT}>
                  {disable ? "View" : "Add"} Time Slots
                </Typography>
              )}
            </div>
          </Grid>
          <Grid
            container
            spacing={0}
            md={12}
            sx={{
              padding: "5px 0px 10px 0px",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={2}>
              <label className={styles.label}>Organization</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setOrganization(!organization);
                  }
                }}
                open={organization}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Organization 1</MenuItem>
                <MenuItem value={10}>Organization 2</MenuItem>
                <MenuItem value={20}>Organization 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Department</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setDepartment(!department);
                  }
                }}
                open={department}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Department 1</MenuItem>
                <MenuItem value={10}>Department 2</MenuItem>
                <MenuItem value={20}>Department 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Bank</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setBank(!bank);
                  }
                }}
                open={bank}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Bank 1</MenuItem>
                <MenuItem value={10}>Bank 2</MenuItem>
                <MenuItem value={20}>Bank 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Instructor Name</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={10}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setInstructorName(!instructorName);
                  }
                }}
                open={instructorName}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={10}>Instructor 1</MenuItem>
                <MenuItem value={20}>Instructor 2</MenuItem>
                <MenuItem value={30}>Instructor 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Actual Instructor Name</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setActualInstructor(!actualInstructor);
                  }
                }}
                open={actualInstructor}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Actual Instructor 1</MenuItem>
                <MenuItem value={10}>Actual Instructor 2</MenuItem>
                <MenuItem value={20}>Actual Instructor 3</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={0}
            md={12}
            sx={{
              padding: "5px 0px 10px 0px",
              justifyContent: "space-between",
            }}
          >
            <Grid item xs={2}>
              <label className={styles.label}>Date</label>
              <TextField
                disabled={disable}
                variant="outlined"
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter BirthDate"
                className={styles.textEnabled}
                id="date"
                label=""
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue={disable}
              />
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Treatment Type</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setTreatmentType(!treatmentType);
                  }
                }}
                open={treatmentType}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Dikur (20 left)</MenuItem>
                <MenuItem value={10}>Dikur (20 left)</MenuItem>
                <MenuItem value={20}>Dikur (20 left)</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={2}>
              <label className={styles.label}>Session Number</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setSessionNum(!sessionNum);
                  }
                }}
                open={sessionNum}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>1 (20 left)</MenuItem>
                <MenuItem value={10}>1 (20 left)</MenuItem>
                <MenuItem value={20}>1 (20 left)</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Street</label>
              <TextField
                disabled={disable}
                variant="outlined"
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter Street"
                className={styles.textEnabled}
                defaultValue={disable ? "HaTsorfim, 2" : ""}
              />
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>City</label>
              <Select
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                value={0}
                className={styles.textEnabledSelect}
                onClick={() => {
                  if (!disable == true) {
                    setCity(!city);
                  }
                }}
                open={city}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Tel Aviv</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid>
            <DataTable
              loading={loading}
              orderDirection={orderDirection}
              orderField={orderField}
              setQuery={setPageQuery}
              rows={items}
              columns={columns}
              page="timeSlotsList"
              Actions={"Edit,Delete"}
              editAction={handleEdit}
              onRowDoubleClick={handleRowDoubleClick}
              isPointerCursor={true}
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
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button>
              <img height="45px" src={Addbtn}></img>
            </Button>
          </Grid>

          <Grid
            container
            style={{ display: "flex" }}
            sx={{ padding: "0px 0px 20px 0px" }}
            md={12}
          >
            <Grid
              container
              columnGap={3}
              style={{ display: "flex", justifyContent: "flex-start" }}
              md={8}
            >
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>Treatments Left</label>
                <label className={styles.numLabel}>20</label>
              </Grid>
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>Treatments Scheduled</label>
                <label className={styles.numLabel}>3</label>
              </Grid>
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>Treatments Remaining</label>
                <label className={styles.numLabel}>17</label>
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={3}
              style={{ display: "flex", justifyContent: "flex-end" }}
              md={4}
            >
              <Grid>
                <Button
                  className={styles.cancelBtn}
                  onClick={() => navigate(-1)}
                  variant="outlined"
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
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default TimeSlotActions;
