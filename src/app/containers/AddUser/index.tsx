import {  TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Select,
  Grid,
  MenuItem,
  Modal,
  Tab,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import DataTable from "app/components/DataTable";
import { CustomDrawer } from "app/components/Drawer";
import React, { useState } from "react";
import Topbar from "../Dashboard/components/topbar";
import { useStyles } from "./styles";
import { createTheme } from "@mui/material/styles";
import Addbtn from "../AddUser/assets/Buttonplus.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "../AddUser/assets/IconSearch.png";
import backIcon from "../AddUser/assets/Vector.png"
import dateIcon from "../AddUser/assets/calendar.png"
import DateRangePicker from "app/components/DateRangePicker";
import moment from "moment";
  

const userDetailList = [
  {
    organizationName: "Organization 1",
    departmentName: "Department 1",
    emailNotification: true,
  },
  {
    organizationName: "Organization 2",
    departmentName: "Department 2",
    emailNotification: true,
  },
  {
    organizationName: "Organization 3",
    departmentName: "Department 3",
    emailNotification: true,
  },
  {
    organizationName: "Organization 4",
    departmentName: "Department 4",
    emailNotification: true,
  },
  {
    organizationName: "Organization 5",
    departmentName: "Department 5",
    emailNotification: true,
  },
  {
    organizationName: "Organization 6",
    departmentName: "Department 6",
    emailNotification: true,
  },
];

const treatmentColumn = [
  {
    id: "treatmentTypeName",
    label: "Treatment Type Name",
    align: "left",
  },
];

const treatmentDetailList = [
  { treatmentTypeName: "Shifta" },
  { treatmentTypeName: "Masa" },
  { treatmentTypeName: "Hosen" },
  { treatmentTypeName: "Hosen" },
  { treatmentTypeName: "Hosen" },
  { treatmentTypeName: "Hosen" },
  { treatmentTypeName: "Hosen" },
  { treatmentTypeName: "adasdas" },
  { treatmentTypeName: "Hosen" },
];

const columnTable = [
//   {
//     id: "action",
//     label: "Action",
//     align: "left",
//     minWidth: 5,
//     position: { paddingRight: 0 },
//   },
  {
    id: "organizationName",
    label: "Organization Name",
    align: "left",
    // width:10,
    
    // width:0,
    // minWidth:0,
    // maxWidth:5,
    // position: { paddingLeft: 0},
  },
  {
    id: "departmentName",
    label: "Department Name",
    align: "left",
  },
  {
    id: "emailNotification",
    label: "Email Notification",
    align: "left",
  },
];

const columns = [
  [
    {
      id: "firstName",
      label: "First Name",
      sortValue: "selector.firstName",
      type: "input",
      placeholder: "Enter a first name",
    },
    {
      id: "lastName",
      label: "Last Name",
      sortValue: "selector.lastName",
      type: "input",
      placeholder: "Enter a last name",
      // format: (value) => value.firstName || "-",
    },
    {
      id: "email",
      label: "Email",
      sortValue: "selector.email",
      type: "input",
      placeholder: "Enter a Email",
      // format: (value) => value.lastName || "-",
    },
    {
      id: "group",
      label: "Group",
      sortValue: "selector.group",
      // align:'right',
      type: "select",

      dropDownValues: [
        {
          id: "All",
          value: "Group A",
        },
        {
          id: "first",
          value: "Group B",
        },
        {
          id: "second",
          value: "Group C",
        },
        {
          id: "third",
          value: "Group D",
        },
      ],
    },
    {
      id: "mobileNumber",
      label: "Mobile Number",
      sortValue: "selector.mobileNumber",
      type: "input",
      placeholder: "Enter a mobile number",
    },
  ],
  [
    {
      id: "sex",
      label: "Sex",
      sortValue: "selector.sex",
      // format: (value) => vaCity || "-",
      type: "select",
      dropDownValues: [
        {
          id: "All",
          value: "Male",
        },
        {
          id: "first",
          value: "Female",
        },
        {
          id: "second",
          value: "Others",
        },
      ],
    },
    {
      id: "birthDate",
      label: "Birth Date",
      sortValue: "selector.birthDate",
      type: "date",
      // format: (value) => value.lastName || "-",
      placeholder: "DD/MM/YYYY",
    },
    {
      id: "city",
      label: "City",
      sortValue: "selector.city",
      // align:'right',
      type: "select",
      dropDownValues: [
        {
          id: "All",
          value: "New York",
        },
        {
          id: "first",
          value: "Chicago",
        },
        {
          id: "second",
          value: "Washington",
        },
      ],
    },
    {
      id: "street",
      label: "Street",
      sortValue: "selector.street",
      // align:'right',
      type: "input",
      placeholder: "Enter a street address",
    },
    {
      id: "area",
      label: "Area",
      sortValue: "selector.area",
      // align:'right',
      type: "select",
      dropDownValues: [
        {
          id: "All",
          value: "New York",
        },
        {
          id: "first",
          value: "Chicago",
        },
        {
          id: "second",
          value: "Washington",
        },
      ],
    },
  ],
];

const AddUser = () => {
  const styles = useStyles();
  const [value, setValue] = React.useState("1");
  const [openModal, setOpenModal] = useState(false);
  const [allDropDownValue, setAllDropDownValue] = useState("1");
  const [department, setDepartment] = useState("1");
  const [allOpen, setAllOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [selectListTable,setSelectListTable]=useState(true)
  const [search,setSearch] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  const [datePicker,setDatePicker]=useState(false)
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  console.log('date picker',datePicker);
  

  const theme = createTheme({
    palette: {
      primary: {
        main: "#C66078",
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
  });

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleDropDownValues = (event) => {
    console.log("event", event);
  };

  const handleModal = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const deptNameHandleChange = (event) => {
    setDepartment(event.target.value);
  };

  const groupHandleChange = (event) => {
    setAllDropDownValue(event.target.value);
  };

  const ListTable = () => {
    setSelectListTable(true)
    return (
      <div style={{ width: "100%" }}>
        <DataTable
          loading={false}
          //orderDirection={orderDirection}
          //orderField={orderField}
          setQuery={() => {}}
          rows={userDetailList}
          columns={columnTable}
          Actions="Delete"
          page="userDetails"
          //   showSelect={true}
          editAction={() => {}}
          deleteAction={() => {}}
        />
      </div>
    );
  };
  const TreatmentList = () => {
    setSelectListTable(false)
    return (
      <div style={{ width: "100%" }}>
        <DataTable
          loading={false}
          //orderDirection={orderDirection}
          //orderField={orderField}
          setQuery={() => {}}
          rows={treatmentDetailList}
          columns={treatmentColumn}
          //   Actions="Delete"
          page="UserssaA"
          //   showSelect={true}
          editAction={() => {}}
          deleteAction={() => {}}
        />
      </div>
    );
  };
  return (
    <Grid container className={styles.mainContainer}>
      <Grid item xs={2}>
        <CustomDrawer />
      </Grid>
      <Grid item xs={10}>
        <Topbar />
       
        <div className={styles.root}>
          {/* <div className={styles.dateDivRoot}> */}
          {/* <Box className={styles.filterBox}>
           
              </Box> */}
               <div style={{flexDirection:'row',display:'flex',marginTop:20,marginBottom:20}}>
            <img src={backIcon} style={{height:16,width:16,marginRight:19,alignSelf:'center'}} />
            <div style={{fontSize:16,fontWeight:"700"}}>User /<span style={{color:'#387E8D'}}> Add User</span></div>
        </div>
          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {columns[0].map((item, index) => {
                console.log('item',item);
                
              return (
                <>
                  {item.type === "input" && (
                    <div>
                      <div className={styles.labelText}>{item?.label}</div>
                      <TextField
                        margin="dense"
                        required
                        size="small"
                        id="username"
                        placeholder={item?.placeholder}
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus
                      />
                    </div>
                  )}
                  {item?.type === "select" && (
                    <div>
                      <div className={styles.labelText}>{item?.label}</div>
                      <TextField
                        id="demo-simple-select"
                        size="small"
                        select
                        // value={deptName}

                        placeholder="Department Name"
                        className={styles.filterSelect}
                        onChange={handleDropDownValues}
                        variant="outlined"
                      >
                        {item?.dropDownValues?.map((item, index) => {
                          return (
                            <MenuItem value={item?.id}>{item?.value}</MenuItem>
                          );
                        })}
                      </TextField>
                    </div>
                  )}
                 
                </>
              );
            })}
          </div>
          <div
            style={{
              flexWrap: "wrap",
              display: "flex",
              // justifyContent: "space-between",
            }}
          >
            {columns[1].map((item, index) => {
              return (
                <>
                  {item.type === "input" && (
                    <div>
                      <div className={styles.labelText}>{item?.label}</div>
                      <TextField
                        margin="dense"
                        required
                        size="small"
                        id="username"
                        placeholder={item?.placeholder}
                        name="username"
                        autoComplete={"off"}
                        className={styles.textFieldStyle}
                        autoFocus
                      />
                    </div>
                  )}
                  {item?.type === "select" && (
                    <div>
                      <div className={styles.labelText}>{item?.label}</div>
                      <TextField
                        id="demo-simple-select"
                        size="small"
                        select
                        // value={deptName}

                        placeholder="Department Name"
                        className={styles.filterSelect}
                        onChange={handleDropDownValues}
                        variant="outlined"
                      >
                        {item?.dropDownValues?.map((item, index) => {
                          return (
                            <MenuItem value={item?.id}>{item?.value}</MenuItem>
                          );
                        })}
                      </TextField>
                    </div>
                  )}
                   {item?.type==='date' &&( 
                   <div style={{flexDirection:'column'}}>
                      <div onClick={()=>{setDatePicker(true)}} className={styles.labelText}>{item?.label}</div>
                      <TextField
                        id="demo-simple-select"
                        size="small"
                        // select
                        value={dateValue?moment(dateValue).format('DD/MM/YYYY'):''}
                        InputProps={{
                            endAdornment: (
                              <img
                                src={dateIcon}
                                alt="search icon"
                                className={styles.searchIcon}
                              />
                            ),
                          }}
                         onFocusCapture={()=>{setDatePicker(true)}}
                        placeholder="DD/MM/YYYY"
                        className={styles.filterSelect}
                        onChange={()=>{}}
                        variant="outlined"
                      />
                      {/* {console.log(datePicker) } */}

                        {datePicker?<div style={{position:'absolute',zIndex:3}}><DateRangePicker range={false} onChange={((range)=>{ setDateValue(range);setDatePicker(false)
                           
                        })} date={[selectionRange]}/>  </div>:null} 
                      
                    </div>) }
                </>
              );
            })}
          </div>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 10,
            }}
          >
            <Checkbox style={{ paddingLeft: "0px" }} />
            <div style={{ alignSelf: "center" }}>
              Can be assigned as advisor
            </div>
          </div>

          <TabContext value={value}>
            {/* <Box sx={{ borderBottom: 1, borderColor: 'divider' }}> */}
            <div style={{ width: "100%", marginTop: 15 }}>
              <ThemeProvider theme={theme}>
                <TabList
                  textColor={"primary"}
                  indicatorColor="primary"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Patients Department Permissions" value="1" />
                  <Tab label="Assigned Treatment Types" value="2" />
                </TabList>
              </ThemeProvider>
            </div>
            {/* </Box> */}
            <div style={{ width: "100%" }}>
              <TabPanel value="1">
                <ListTable />
              </TabPanel>

              <TabPanel value="2">
                <TreatmentList />
              </TabPanel>
            </div>
          </TabContext>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignSelf: "flex-end",
              marginRight: 5,
            }}
          >
            <Button
              onClick={() => {
                handleModal();
              }}
              style={{ alignSelf: "flex-end", marginRight: 5 }}
            >
              <img height="45px" src={Addbtn}></img>
            </Button>

            <Button
              style={{ alignSelf: "flex-end", marginRight: 5 }}
              className={styles.saveBtn}
              variant="contained"
            >
              Edit
            </Button>
          </div>
          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card className={styles.addModal}>
              <div className={styles.modalContainer}>
                {selectListTable?
                <>
                <Grid>
                  <Typography align="center" className={styles.headerModal}>
                    Add Department Permission
                  </Typography>
                </Grid>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ padding: "20px 0px" }}
                >
                  <Grid item xs={6}>
                    <label className={styles.label}>ALL</label>
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
                      onChange={groupHandleChange}
                      open={allOpen}
                      IconComponent={KeyboardArrowDownIcon}
                      MenuProps={{
                        disableScrollLock: true,
                      }}
                    >
                      <MenuItem onClick={() => setAllOpen(!allOpen)} value={10}>
                        Group 1
                      </MenuItem>
                      <MenuItem onClick={() => setAllOpen(!allOpen)} value={20}>
                        Group 2
                      </MenuItem>
                      <MenuItem onClick={() => setAllOpen(!allOpen)} value={30}>
                        Group 3
                      </MenuItem>
                      <MenuItem onClick={() => setAllOpen(!allOpen)} value={30}>
                        Group 4
                      </MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={6}>
                    <label className={styles.label}>Department</label>
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
                      onChange={deptNameHandleChange}
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
                        First
                      </MenuItem>
                      <MenuItem
                        onClick={() => setDepartmentOpen(!departmentOpen)}
                        value={20}
                      >
                        Second
                      </MenuItem>
                      <MenuItem
                        onClick={() => setDepartmentOpen(!departmentOpen)}
                        value={30}
                      >
                        Third
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
                      <Button className={styles.saveBtn} variant="contained">
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                    </div></>:
                     <>
                     <Grid>
                       <Typography align="center" className={styles.headerModal}>
                         Add Instructor Qualifications
                       </Typography>
                     </Grid>
                     <Grid
                       container
                    //    rowSpacing={1}
                    //    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    //    sx={{ padding: "20px 0px" }}
                     >
                        <div style={{justifyContent:'center',display:'flex',flex:1,marginTop:30,marginBottom:20}}>
                     <TextField
                className={styles.search}
                placeholder={`Search`}
                size="small"
                value={search}
                onChange={()=>{}}
                InputProps={{
                  endAdornment: (
                    <img
                      src={SearchIcon}
                      alt="search icon"
                      className={styles.searchIcon}
                    />
                  ),
                }}
              />
              </div>
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
                         </div></>
                    }
              </div>
            </Card>
          </Modal>
        </div>
        {/* </div> */}
      </Grid>
    </Grid>
  );
};

export default AddUser;
