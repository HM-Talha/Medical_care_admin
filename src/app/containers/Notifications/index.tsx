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
import InputField from "app/components/InputField";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


const OrganizationsManagement = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const [resetPasswordOpen, setResetPasswordOpen] = useState(false);
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const [messagetypeOpen, setMessagetypeOpen] = useState(false);


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
      id: "dateTimeSent",
      label: "Date Time Sent",
      sortValue: "selector.dateTimeSent",
    },
    {
      id: "organizationName",
      label: "Organization Name ",
      sortValue: "selector.organizationName",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "departmentName",
      label: "Department name",
      sortValue: "selector.departmentName",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "senderName",
      label: "Sender Name",
      sortValue: "selector.senderName",
      // align:'right',
    },
    {
      id: "partientsName",
      label: "Partients Name",
      sortValue: "selector.partientsName",
      // align:'right',
    },
    {
      id: "content",
      label: "Content",
      sortValue: "selector.content",
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
  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
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

  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
        <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={10}>
        <Topbar />
        <div className={styles.root}>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid container spacing={2} md={12} sx={{ paddingBottom: "10px" }}>
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
                  <MenuItem  onClick={() => setOrganizationOpen(!organizationOpen)} value={10}>Organization 1</MenuItem>
                  <MenuItem  onClick={() => setOrganizationOpen(!organizationOpen)} value={20}>Organization 2</MenuItem>
                  <MenuItem  onClick={() => setOrganizationOpen(!organizationOpen)} value={30}>Organization 3</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Message Type</label>
                <Select
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onClick={() => setMessagetypeOpen(!messagetypeOpen)}
                  open={messagetypeOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem   onClick={() => setMessagetypeOpen(!messagetypeOpen)}  value={10}>Free Text</MenuItem>
                  <MenuItem    onClick={() => setMessagetypeOpen(!messagetypeOpen)} value={20}>Department 2</MenuItem>
                  <MenuItem    onClick={() => setMessagetypeOpen(!messagetypeOpen)} value={30}>Department 3</MenuItem>
                </Select>
              </Grid>
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
              onRowDoubleClick={handleModal}
              page="pushNotificationPage"
              isPointerCursor={true}
            />
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
                      Push Notification
                    </Typography>
                  </Grid>
                  <div className={styles.bodyContainer}>
                    <Grid container sx={{ border: "1px #C6C9CA solid" }}>
                      <Grid
                        item
                        xs={3}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <label className={styles.labelHead}>Day</label>
                        <label className={styles.labelItem}>15.06.2022</label>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <label className={styles.labelHead}>Message Type</label>
                        <label className={styles.labelItem}>Free Text</label>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <label className={styles.labelHead}>Sender</label>
                        <label className={styles.labelItem}>Eliaho</label>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        sx={{ display: "flex", flexDirection: "column" }}
                      >
                        <label className={styles.labelHead}>Patient</label>
                        <label className={styles.labelItem}>Alex</label>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ padding: "10px 0px" }}>
                      <Grid item xs={12}>
                        <label className={styles.labelContent}>Content</label>
                        <TextField
                          fullWidth
                          variant="outlined"
                          required
                          multiline
                          autoComplete={"off"}
                          autoFocus
                          rows={3}
                          className={styles.textEnabled}
                        ></TextField>
                      </Grid>
                    </Grid>
                  </div>

                  <div>
                    <Grid container spacing={3}>
                      <Grid
                        className={styles.btnContainer}
                        container
                        item
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
                    </Grid>
                  </div>
                </div>
              </Card>
            </Modal>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default OrganizationsManagement;
