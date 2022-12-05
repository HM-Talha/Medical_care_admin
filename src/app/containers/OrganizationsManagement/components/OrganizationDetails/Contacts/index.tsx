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
import Loader from "app/components/Loader";

const ContactsList = () => {
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
  //const searchField = useSelector(selectSearch);
  const styles = useStyles();
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: useUserSaga });
  const handleClose = () => {
    setOpenRemoveModal(null);
  };

  const columns = [
    {
      id: "contactName",
      label: "Contact Name",
      sortValue: "selector.contactName",
    },
    {
      id: "title",
      label: "Title",
      sortValue: "selector.title",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "email",
      label: "Email",
      sortValue: "selector.email",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "mobileNumber",
      label: "Contact Mobile Number",
      sortValue: "selector.mobileNumber",
      width: "16%",
      // align:'right',
    },
  ];

  // useEffect(() => {
  //   dispatch(actions.setQuery({ name: "q", value: searchField }));
  // }, [searchField]);

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

  const handleDelete = () => {
    setDelete(true);
  };
  const handleDeleteClose = () => {
    setDelete(false);
  };
  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  const handleEdit = () => {
    console.log("hello");
    setOpenModal(true);
  };
  const handleImportModalClose = () => {
    setOpenModal(false);
  };
  return (
    <>
      <DataTable
        loading={loading}
        orderDirection={orderDirection}
        Actions="Edit"
        editAction={handleEdit}
        orderField={orderField}
        setQuery={setPageQuery}
        rows={items}
        columns={columns}
        page="contactList"
      />
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
                Edit Contact
              </Typography>
            </Grid>
            <Grid className={styles.inp_box}>
              <label className={styles.lable} style={{}}>
                <span className={styles.inp_modal_name}>Contact Name</span>
                <input
                  type="text"
                  placeholder="Eyal Helil"
                  className={styles.inp_modal}
                />
              </label>
              <label className={styles.lable}>
                <span className={styles.inp_modal_name}>Title</span>
                <input
                  type="text"
                  placeholder="Title 1"
                  className={styles.inp_modal}
                />
              </label>
            </Grid>
            <Grid className={styles.inp_box}>
              <label className={styles.lable} style={{}}>
                <span className={styles.inp_modal_name}>Email</span>
                <input
                  type="text"
                  placeholder="Eyal.Helil@gmail.com"
                  className={styles.inp_modal}
                />
              </label>
              <label className={styles.lable}>
                <span className={styles.inp_modal_name}>
                  Contact Mobile Number
                </span>
                <input
                  type="text"
                  placeholder="+972-535-556-815"
                  className={styles.inp_modal}
                />
              </label>
            </Grid>
            <div>
              <Grid
                container
                spacing={3}
                style={{ position: "relative", top: "15px" }}
              >
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
                  <Button className={styles.saveBtn} variant="contained">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Modal>
    </>
  );
};

export default ContactsList;
