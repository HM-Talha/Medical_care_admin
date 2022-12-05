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

const OrganizationsManagement = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);

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
      id: "taxId",
      label: "Tax ID ",
      sortValue: "selector.taxId",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "contactName",
      label: "Contact Name",
      sortValue: "selector.contactName",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "contactPhnum",
      label: "Contact Phone Number",
      sortValue: "selector.contactPhnum",
      width: "18%"
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
   // setOpenModal(true);
   navigate('/organizations/organization-details?mode=add');
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleEdit = () => {
    navigate('/organizations/organization-details?mode=edit');
  };

  const handleDoubleClick = () => {
    navigate("/organizations/organization-details");
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
          <div className={styles.tableDiv}>
            <DataTable
              loading={loading}
              orderDirection={orderDirection}
              orderField={orderField}
              setQuery={setPageQuery}
              rows={items}
              columns={columns}
              Actions="Delete,Edit,Toggle"
              page="organizationManagement"
              editAction={handleEdit}
              deleteAction={handleDelete}
              onRowDoubleClick={handleDoubleClick}
              isPointerCursor={true}
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
                      Add Organization
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    sx={{ padding: "20px 0px" }}
                  >
                    <Grid item xs={6}>
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
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label className={styles.label}>Task Number</label>
                      <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        placeholder="Enter task number"
                        name="username"
                        autoComplete={"off"}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label className={styles.label}>Contact Name</label>
                      <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        placeholder="Enter contact name"
                        name="username"
                        autoComplete={"off"}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <label className={styles.label}>
                        Contact Phone Number
                      </label>
                      <TextField
                        variant="outlined"
                        margin="dense"
                        required
                        fullWidth
                        id="username"
                        placeholder="Enter phone number"
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

          {/* <EditUserModal open={editModalOpen} handleClose={handleEditClose} />
        <Loader loading={loading} />
        <div className={styles.dataTableDiv}>
          <InfiniteScroll
            loader={<TableLoader />}
            hasMore={hasMoreItems}
            loadMore={getNextPage}
            useWindow={false}
          >
            <DataTable
              loading={loading}
              orderDirection={orderDirection}
              orderField={orderField}
              setQuery={setPageQuery}
              rows={items}
              columns={columns}
              Actions="Edit"
              page="userManagement"
            />
          </InfiniteScroll>
        </div> */}
        </div>
      </Grid>
    </div>
  );
};

export default OrganizationsManagement;
