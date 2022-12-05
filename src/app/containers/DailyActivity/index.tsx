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
import Addbtn from "../OrganizationsManagement/assets/Buttonplus.png";
import { CustomDrawer } from "app/components/Drawer";
import { useNavigate } from "react-router-dom";
// import uploadBtn from "../GroupTreatment/assets/Upload.png";
import uploadBtn from "./assets/Upload.png";
// import EditDailyActivity from "../UserManagement/components/EditUserModal";
import EditDailyActivity from "./components/EditDailyActivity";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const DailyActivity = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const [businessOpen, setBusinessOpen] = useState(false);
  const [timeOpen, setTimeOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
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
      id: "activityName",
      label: "Activity Name",
      sortValue: "selector.activityName",
    },
    {
      id: "description",
      label: "Description",
      sortValue: "selector.description",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "videoFile",
      label: "Video File",
      sortValue: "selector.videoFile",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "audioFile",
      label: "Audio File",
      sortValue: "selector.audioFile",
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
  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleEdit = () => {
    setEditModalOpen(true);
  };
  const handleDelete = () => {
    setDelete(true);
  };
  const handleDeleteClose = () => {
    setDelete(false);
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
        <div className={styles.root}>
        <Grid container md={2}>
              <label className={styles.label}>Organization name</label>
              <Select
                margin="none"
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
          <div className={styles.tableDiv}>
            <DataTable
              loading={loading}
              orderDirection={orderDirection}
              orderField={orderField}
              setQuery={setPageQuery}
              rows={items}
              columns={columns}
              Actions="Edit,FileView"
              page="organizationManagement"
              editAction={handleEdit}
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
          <div className={styles.btnDiv}>
            <Button onClick={handleModal}>
              <img height="45px" src={Addbtn}></img>
            </Button>
            <Modal
              open={openModal}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className={styles.addModal}>
                <div className={styles.modalContainer}>
                  <Grid>
                    <Typography align="center" className={styles.headerModal}>
                      Add Daily Activity
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
                      <TextField
                        margin="dense"
                        variant="outlined"
                        fullWidth
                        required
                        id="username"
                        placeholder="Enter Organization name"
                        name="username"
                        autoComplete={"off"}
                        autoFocus
                        className={styles.textEnabled}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <label className={styles.label}>Activity Name</label>
                      <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        placeholder="Enter Activity Name"
                        name="username"
                        autoComplete={"off"}
                        autoFocus
                        className={styles.textEnabled}
                      />
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid className={styles.dotBox} item xs={4}>
                      <Grid className={styles.uploadBox}>
                        <img width="30px" src={uploadBtn}></img>
                        <label className={styles.uploadLabel}>
                          Upload Video File
                        </label>
                      </Grid>
                    </Grid>
                    <Grid className={styles.dotBox} item xs={4}>
                      <Grid className={styles.uploadBox}>
                        <img width="30px" src={uploadBtn}></img>
                        <label className={styles.uploadLabel}>
                          Upload Audio File
                        </label>
                      </Grid>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                      <label className={styles.label}>Business Day #</label>
                      <Select
                        margin="dense"
                        fullWidth
                        variant="outlined"
                        required
                        autoComplete={"off"}
                        autoFocus
                        value={10}
                        className={styles.textEnabled}
                        onClick={() => setBusinessOpen(!businessOpen)}
                        open={businessOpen}
                        IconComponent={KeyboardArrowDownIcon}
                      >
                        <MenuItem
                          onClick={() => setBusinessOpen(!businessOpen)}
                          value={10}
                        >
                          Choose Day
                        </MenuItem>
                        <MenuItem
                          onClick={() => setBusinessOpen(!businessOpen)}
                          value={20}
                        >
                          Choose Day - 2
                        </MenuItem>
                        <MenuItem
                          onClick={() => setBusinessOpen(!businessOpen)}
                          value={30}
                        >
                          Choose Day - 3
                        </MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={4}>
                      <label className={styles.label}>Time</label>
                      <Select
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        required
                        autoComplete={"off"}
                        autoFocus
                        value={10}
                        className={styles.textEnabled}
                        onClick={() => setTimeOpen(!timeOpen)}
                        open={timeOpen}
                        IconComponent={KeyboardArrowDownIcon}
                      >
                        <MenuItem
                          onClick={() => setTimeOpen(!timeOpen)}
                          value={10}
                        >
                          Choose
                        </MenuItem>
                        <MenuItem
                          onClick={() => setTimeOpen(!timeOpen)}
                          value={20}
                        >
                          Choose - 2
                        </MenuItem>
                        <MenuItem
                          onClick={() => setTimeOpen(!timeOpen)}
                          value={30}
                        >
                          Choose - 3
                        </MenuItem>
                      </Select>
                    </Grid>
                    <Grid item xs={4}>
                      <label className={styles.label}>Status</label>
                      <Select
                        variant="outlined"
                        fullWidth
                        margin="dense"
                        required
                        autoComplete={"off"}
                        autoFocus
                        value={10}
                        className={styles.textEnabled}
                        onClick={() => setStatusOpen(!statusOpen)}
                        open={statusOpen}
                        IconComponent={KeyboardArrowDownIcon}
                      >
                        <MenuItem
                          onClick={() => setStatusOpen(!statusOpen)}
                          value={10}
                        >
                          Choose
                        </MenuItem>
                        <MenuItem
                          onClick={() => setStatusOpen(!statusOpen)}
                          value={20}
                        >
                          Choose - 2
                        </MenuItem>
                        <MenuItem
                          onClick={() => setStatusOpen(!statusOpen)}
                          value={30}
                        >
                          Choose - 3
                        </MenuItem>
                      </Select>
                    </Grid>

                    <Grid item md={12}>
                      <label className={styles.label}>Description</label>
                      <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Enter Description"
                        fullWidth
                        className={styles.textEnabled}
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
                          onClick={handleModalClose}
                        >
                          Cancel
                        </Button>
                      </Grid>
                      <Grid container item xs={6} direction="column">
                        <Button className={styles.saveBtn} variant="contained">
                          Save
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </Card>
            </Modal>
          </div>
          <EditDailyActivity
            open={editModalOpen}
            handleClose={handleEditClose}
          />
          <Loader loading={loading} />
        </div>
      </Grid>
    </div>
  );
};

export default DailyActivity;
