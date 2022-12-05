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

const TreatmentBanksList = () => {
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
      id: "dateAssigned",
      label: "Date Assigned",
      sortValue: "selector.dateAssigned",
    },
    {
      id: "departmentName",
      label: "Department Name",
      sortValue: "selector.departmentName",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "individualTtype",
      label: "Individual Treatment Type",
      sortValue: "selector.individualTtype",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "groupTtype",
      label: "Group Treatment Type",
      sortValue: "selector.groupTtype",
      // align:'right',
    },
    {
      id: "mustIndividualTtype",
      label: "Must Individual Treatment Types",
      sortValue: "selector.mustIndividualTtype",
      // align:'right',
    },
    {
      id: "mustGroupTtype",
      label: "Must Group Treatment Types",
      sortValue: "selector.mustGroupTtype",
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

  return (
    <DataTable
      loading={loading}
      orderDirection={orderDirection}
      orderField={orderField}
      setQuery={setPageQuery}
      rows={items}
      columns={columns}
      page="treatmentBanks"
    />
  );
};

export default TreatmentBanksList;
