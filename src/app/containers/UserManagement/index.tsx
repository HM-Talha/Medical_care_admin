import React, { useEffect, useState } from "react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUserSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { useStyles } from "./styles";
import DataTable from "app/components/DataTable";
import DeleteModal from "app/components/DeleteModal";
import EditUserModal from "./components/EditUserModal";
import { useSelector } from "react-redux";
import { selectList, selectLoading, selectQuery } from "./redux/selector";
import InfiniteScroll from "react-infinite-scroller";
import TableLoader from "app/components/TableLoader";
import { selectSearch } from "../Dashboard/selector";
import Loader from "app/components/Loader";
import Topbar from "../Dashboard/components/topbar";

const UserManagement = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
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
  useInjectReducer({ key: sliceKey, reducer });
  useInjectSaga({ key: sliceKey, saga: useUserSaga });
  const handleClose = () => {
    setOpenRemoveModal(null);
  };

  const columns = [
    {
      id: "mobileNumber",
      label: "Mobile number",
      sortValue: "selector.mobileNumber",
      // minWidth: '200px',
      format: (value) => value.mobileNumber ?? "NA",
    },
    {
      id: "firstName",
      label: "First name",
      sortValue: "selector.firstName",
      format: (value) => value.firstName || "-",
    },
    {
      id: "lastName",
      label: "Last name",
      sortValue: "selector.lastName",
      format: (value) => value.lastName || "-",
    },
    {
      id: "email",
      label: "Email",
      sortValue: "selector.email",
      // align:'right',
    },
    {
      id: "sex",
      label: "Sex",
      sortValue: "selector.ip",
    },
    {
      id: "status",
      label: "Status",
      sortValue: "selector.mac",
      format: (value) => (
        <>
          <Box>
            <span>{value.status}</span>
          </Box>
        </>
      ),
    },
    {
      id: "address",
      label: "Address",
      sortValue: "selector.mac",
    },
    {
      id: "city",
      label: "City",
      sortValue: "selector.mac",
    },
    {
      id: "country",
      label: "Country",
      sortValue: "selector.mac",
    },
    {
      id: "registration",
      label: "Registration Date",
      sortValue: "selector.createdAt",
    },
    {
      id: "caregivers",
      label: "# of Caregivers",
      sortValue: "selector.caregivers",
    },
    {
      id: "caregiversNames",
      label: "Caregivers Names",
      sortValue: "selector.caregiversNames",
    },
    {
      id: "sensors",
      label: "# of Sensors",
      sortValue: "selector.sensors",
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

  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  return (
    <div className={styles.mainContainer}>
      <Topbar />
      <div className={styles.root}>
        <div className={styles.dateDivRoot}>
          <Box className={styles.filterBox}>
            <TextField
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              select
              size="small"
              value={"10"}
              label="City"
              placeholder="City"
              className={styles.filterSelect}
              //style={styles.filterSelect}
              //onChange={handleChange}
            >
              <MenuItem value={10}>City</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </TextField>

            <TextField
              //labelId="demo-simple-select-label"
              id="demo-simple-select"
              size="small"
              select
              value={"10"}
              label="Status"
              placeholder="Status"
              className={styles.filterSelect}
              //onChange={handleChange}
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Active</MenuItem>
              <MenuItem value={30}>Disabled</MenuItem>
              <MenuItem value={30}>Freez</MenuItem>
            </TextField>
          </Box>
          <Box>
            <span className={styles.clearFilter}> Clear Filters</span>
          </Box>
          <DeleteModal
            title={`Are you sure you want to ${
              openRemoveModal?.isActive !== true ? "Block" : "Unblock"
            } this user`}
            buttonText={
              openRemoveModal && openRemoveModal?.isActive !== true
                ? "Yes,block"
                : "Yes Unblock"
            }
            body={
              "User will remain in the system and all his product will be kept"
            }
            open={!!openRemoveModal}
            onSuccess={onConfirmeDelete}
            handleClose={handleClose}
          />
        </div>
        <EditUserModal open={editModalOpen} handleClose={handleEditClose} />
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
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
