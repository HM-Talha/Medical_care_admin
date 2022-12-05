import React, { useEffect, useState } from "react";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { reducer, sliceKey, actions } from "./redux/slice";
import { useUsersListSaga } from "./redux/saga";
import { useDispatch } from "react-redux";
import {
  Button,
  Grid,
  MenuItem,
  Select,
  Card,
  Modal,
  Typography,
  Paper,
} from "@mui/material";
import { useStyles } from "./styles";
import DataTable from "app/components/DataTable";
import { useSelector } from "react-redux";
import { selectList, selectLoading, selectQuery } from "./redux/selector";
import { selectSearch } from "../Dashboard/selector";
import Loader from "app/components/Loader";
import Topbar from "../Dashboard/components/topbar";
import Addbtn from "../OrganizationsManagement/assets/Buttonplus.png";
import { CustomDrawer } from "app/components/Drawer";
import { useLocation, useNavigate } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TreatmentTypes = () => {
  const [openRemoveModal, setOpenRemoveModal] = useState<any | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const listitems = useSelector(selectList);
  const { links, items } = listitems;
  const [openDate, setOpen] = useState<boolean>(false);
  const [dateValue, setDateValue] = useState(null);
  const [statusOpen, setStatusOpen] = useState(false);
  const [treatmentOpen, setTreatmentOpen] = useState(false);
  const [groupOpen, setGroupOpen] = useState(false);
 

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
  useInjectSaga({ key: sliceKey, saga: useUsersListSaga });

  const handleClose = () => {
    setOpenRemoveModal(null);
  };

  const columns = [
    {
      id: "treatmentTypeName",
      label: "Treatment Type Name",
      align: "left",
      sortValue: "selector.treatmentTypeName",
    },
    {
      id: "groupOrIndividual",
      label: "Group/Individual",
      sortValue: "selector.groupOrIndividual",
      align: "left",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "description",
      label: "Description",
      sortValue: "selector.description",
      align: "left",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "lengthSession",
      label: "Length Each Session (Minutes)",
      sortValue: "selector.lengthSession",
      align: "left",
      // align:'right',
    },
    {
      id: "numberOfSessions",
      label: "Number of Sessions",
      sortValue: "selector.numberOfSessions",
      align: "left",
    },
    {
      id: "maxParticipates",
      label: "Maximum number of Participates",
      sortValue: "selector.maxParticipates",
      align: "left",
      // format: (value) => vaCity || "-",
    },
  ];

  useEffect(() => {
    dispatch(actions.setQuery({ name: "q", value: searchField }));
  }, [searchField]);

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
    navigate("/add-user");
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleEdit = () => {
    navigate("/treatment-types/add-treatment?mode=edit");
  };
  const handleDelete = () => {
    setDelete(true);
  };
  const handleDeleteClose = () => {
    setDelete(false);
  };
  const hasMoreItems = !!links.next;
  const loading = useSelector(selectLoading);

  const [orgName, setOrgName] = React.useState("All");
  const [datePicker, setDatePicker] = React.useState(false);
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const [openPicker, setOpenPicker] = useState(false);

  console.log("openPicker", openPicker);

  const orgNameHandleChange = (event) => {
    setOrgName(event.target.value);
  };

  const [deptName, setDeptName] = React.useState("All");

  const deptNameHandleChange = (event) => {
    setDeptName(event.target.value);
  };

  const [group, setGroup] = React.useState("Group 1");

  const groupHandleChange = (event) => {
    setGroup(event.target.value);
  };

  const onRowDoubleClick = (event) => {
    navigate("/treatment-types/add-treatment");
  };

  const handleAdd = () => {
    // setOpenModal(true);
    //navigate("/users-list/users-details?mode=add");
    navigate("/treatment-types/add-treatment?mode=add");
  };

  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
      <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={12}>
        <Topbar />
        <div className={styles.root}>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid container spacing={2} md={12} sx={{ paddingBottom: "10px" }}>
              <Grid item xs={2}>
                <label className={styles.label}>Status</label>
                <Select
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onChange={orgNameHandleChange}
                  onClick={() => setStatusOpen(!statusOpen)}
                  open={statusOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem
                    onClick={() => setStatusOpen(!statusOpen)}
                    value={10}
                  >
                    Status 1
                  </MenuItem>
                  <MenuItem
                    onClick={() => setStatusOpen(!statusOpen)}
                    value={20}
                  >
                    Status 2
                  </MenuItem>
                  <MenuItem
                    onClick={() => setStatusOpen(!statusOpen)}
                    value={30}
                  >
                    Status 3
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Treatment Type Name</label>
                <Select
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onClick={() => setTreatmentOpen(!treatmentOpen)}
                  onChange={deptNameHandleChange}
                  open={treatmentOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem
                    onClick={() => setTreatmentOpen(!treatmentOpen)}
                    value={10}
                  >
                    Treatment Type Name 1
                  </MenuItem>
                  <MenuItem
                    onClick={() => setTreatmentOpen(!treatmentOpen)}
                    value={20}
                  >
                    Treatment Type Name 2
                  </MenuItem>
                  <MenuItem
                    onClick={() => setTreatmentOpen(!treatmentOpen)}
                    value={30}
                  >
                    Treatment Type Name 3
                  </MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Group</label>
                <Select
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onClick={() => setGroupOpen(!groupOpen)}
                  onChange={groupHandleChange}
                  open={groupOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem onClick={() => setGroupOpen(!groupOpen)} value={10}>
                    Group 1
                  </MenuItem>
                  <MenuItem onClick={() => setGroupOpen(!groupOpen)} value={20}>
                    Group 2
                  </MenuItem>
                  <MenuItem onClick={() => setGroupOpen(!groupOpen)} value={30}>
                    Group 3
                  </MenuItem>
                  <MenuItem onClick={() => setGroupOpen(!groupOpen)} value={30}>
                    Group 4
                  </MenuItem>
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
              Actions="Delete,Edit,Toggle"
              page="treatmentTypes"
              editAction={handleEdit}
              deleteAction={handleDelete}
              onRowDoubleClick={onRowDoubleClick}
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
                      Delete Treatment Type
                    </Typography>
                  </Grid>
                  <Grid sx={{ padding: "30px 0px" }}>
                    <Typography align="center" className={styles.deleteTypo}>
                      Do you really want to delete treatment type?
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

          {/* <div className={styles.btnDiv}> */}

          <div className={styles.btnDiv}>
            <Button onClick={handleAdd}>
              <img height="45px" src={Addbtn}></img>
            </Button>
            {/* <Modal
              open={openModal}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Card className={styles.addModal}>
                <div className={styles.modalContainer}>
                  <Grid>
                    <Typography align="center" className={styles.headerModal}>
                      Add User
                    </Typography>
                  </Grid>
                  <div style={{flex:1,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
<div>
                        <div >First Name</div>
                      <TextField
                        
                        margin="dense"
                        required
                        
                        size="small"
                        id="username"
                        placeholder="Enter Last name"
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus
                        />
</div>
<div>
                       <div >Last Name</div>
                       <TextField
                        variant="outlined"
                        margin="dense"
                        size="small"
                        required
                        // fullWidth
                        id="username"
                        placeholder="Enter Last name"
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus

                      />
                      </div>
                      <div>
                       <div >Email</div>
                       <TextField
                        variant="outlined"
                        margin="dense"
                        size="small"
                        required
                        // fullWidth
                        id="username"
                        placeholder="Enter Email"
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus

                      />
                      <div>
                    
              </div>
              
                      </div>
                      <div>
                       <div >Sex</div>
                       <TextField
                //labelId="demo-simple-select-label"
                id="demo-simple-select"
                margin="dense"
                size="small"
                select
                value={deptName}
                // label="Department Name"
                placeholder="Department Name"
                className={styles.filterSelect}
                // className={styles.textFieldStyle}
                onChange={deptNameHandleChange}
                variant="outlined"
              >
                <MenuItem value={"All"}>Male</MenuItem>
                <MenuItem value={"First"}>Female</MenuItem>
                <MenuItem value={"Second"}>Others</MenuItem>
               
              </TextField>
             
                      <div>
                    
              </div>
              
                      </div>
                      </div>

                      <div style={{flex:1,display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"10px"}}>
                        <div onClick={()=>{setDatePicker(true)}}>
                            <div>Birth Date</div>
                            <TextField
                        
                        margin="dense"
                        required
                        value={dateValue?moment(dateValue).format('DD/MM/YYYY'):''}
                        size="small"
                        id="username"
                        placeholder="Enter Last name"
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus
                        />
                          
                           {datePicker?<DateRangePicker range={false} onChange={((range)=>{ setDateValue(range);setDatePicker(false)
                           
                           })} date={[selectionRange]}/>  :null}
             
             
                        
                        
                       
                        </div>
<div>
                        <div >City</div>
                        <TextField
                
                id="demo-simple-select"
                size="small"
                select
                value={deptName}
                
                placeholder="Department Name"
                className={styles.filterSelect}
                onChange={deptNameHandleChange}
                variant="outlined"
              >
                <MenuItem value={"All"}>New York</MenuItem>
                <MenuItem value={"First"}>Chicago</MenuItem>
                <MenuItem value={"Second"}>Washington</MenuItem>
               
              </TextField>
</div>
<div>
                       <div >Group Name</div>
                       <TextField
                
                id="demo-simple-select"
                size="small"
                select
                value={deptName}
                
                placeholder="Department Name"
                className={styles.filterSelect}
                onChange={deptNameHandleChange}
                variant="outlined"
              >
                <MenuItem value={"All"}>Name 1</MenuItem>
                <MenuItem value={"First"}>Name 2</MenuItem>
                <MenuItem value={"Second"}>Name 3</MenuItem>
               
              </TextField> 
                      </div>
                     
                     <div>
                        <div >Last Login</div>
                      <TextField
                        
                        margin="dense"
                        required
                        
                        size="small"
                        id="username"
                        placeholder="Enter Last Login"
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus
                        />
</div>
                      </div>


                 
                  <div>
                    <Grid container spacing={3} marginTop="10px">
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
            </Modal> */}
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default TreatmentTypes;
