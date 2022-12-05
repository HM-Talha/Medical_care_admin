import { TabContext, TabList, TabPanel } from "@mui/lab";
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
  Tabs,
} from "@mui/material";
import DataTable from "app/components/DataTable";
import { CustomDrawer } from "app/components/Drawer";
import React, { useState, useEffect } from "react";
import Topbar from "../Dashboard/components/topbar";
import { useStyles } from "./styles";
import { createTheme } from "@mui/material/styles";
import Addbtn from "../UserDetails/assets/Buttonplus.png";
import Back from "./assets/Back.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "../UserDetails/assets/IconSearch.png";
import backIcon from "../UserDetails/assets/Vector.png"
import dateIcon from "../UserDetails/assets/calendar.png"
import DateRangePicker from "app/components/DateRangePicker";
import moment from "moment";

import { useLocation, useNavigate } from "react-router-dom";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

const instructorColumn = [
  {
    id: "#",
    label: "#",
    align: "left",
  }, {
    id: "treatmentTypeName",
    label: "Treatment Type Name",
    align: "left",
  }, {
    id: 'checkBox',
    label: 'checkBox',
    align: 'right'
  }
]

const instructorRow = [
  {
    '#': 1,
    treatmentTypeName: "Shifta"
  }, {
    '#': 2,
    treatmentTypeName: "Shifta"
  }, {
    '#': 3,
    treatmentTypeName: "Shifta"
  }, {
    '#': 4,
    treatmentTypeName: "Shifta"
  }
]

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
    width: "17%"
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

const UserDetails = () => {
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={tabValue !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {tabValue === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const styles = useStyles();
  const [value, setValue] = React.useState("1");
  const [openModal, setOpenModal] = useState(false);
  const [allDropDownValue, setAllDropDownValue] = useState("1");
  const [department, setDepartment] = useState("1");
  const [allOpen, setAllOpen] = useState(false);
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [selectListTable, setSelectListTable] = useState(true)
  const [search, setSearch] = useState(null);
  const [dateValue, setDateValue] = useState(null);
  const [datePicker, setDatePicker] = useState(false);
  const [openDelete, setDelete] = useState(false);
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };

  
  const [groupOpen, setGroupOpen] = useState(false);
  const [sexOpen, setSex] = useState(false);
  const [cityOpen, setCity] = useState(false);
  const [areaOpen, setArea] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const params = useLocation();
  const [disable, setDisable] = useState(true);

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
  const handleTabChange = (event, tabValue) => {
    setTabValue(tabValue);
  };

  const handleDelete = () => {
    setDelete(true);
  };

  const handleDeleteClose = () => {
    setDelete(false);
  };

  const handleEditButton = () => {
    setDisable(false);
  };

  const handleCancelBtn = () => {
    if (params.search.split("=")[1] === "add" || params.search.split("=")[1] === "edit") {
      navigate("/organizations");
    }
    setDisable(true);
  };

  useEffect(() => {
    if (params.search.split("=")[1] === "add" || params.search.split("=")[1] === "edit") {
      setDisable(false);
    }
  }, []);

  const ListTable = () => {
    setSelectListTable(true)
    return (
      <div style={{ width: "100%" }}>
        <DataTable
          loading={false}
          //orderDirection={orderDirection}
          //orderField={orderField}
          setQuery={() => { }}
          rows={userDetailList}
          columns={columnTable}
          Actions="Delete"
          page="userDetails"
          //   showSelect={true}
          deleteAction={handleDelete}
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
          setQuery={() => { }}
          rows={treatmentDetailList}
          columns={treatmentColumn}
          //   Actions="Delete"
          page="UserssaA"
          //   showSelect={true}
          editAction={() => { }}
          deleteAction={() => { }}
        />
      </div>
    );
  };
  return (
    <div className={styles.mainContainer}>
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
              <Typography className={styles.textHeader}>Users /</Typography>
              {params.search.split("=")[1] === "add" ? (
                <Typography className={styles.textHeaderT}>
                  Add User
                </Typography>
              ) : (
                <Typography className={styles.textHeaderT}>
                  User Details {params.search.split("=")[1] !== "add" && params.search.split("=")[1] !== "edit" && disable ? 'View' : 'Edit'} Mode
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
              <label className={styles.label}>First Name</label>
              <TextField
                disabled={disable}
                margin="dense"
                fullWidth
                variant="outlined"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter First Name"
                className={styles.textEnabled}
                defaultValue={params.search.split("=")[1] !== "add" ? "Eyal" : ""}
              />
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Last Name</label>
              <TextField
                disabled={disable}
                variant="outlined"
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter Last Name"
                className={styles.textEnabled}
                defaultValue={params.search.split("=")[1] !== "add" ? "Hilel" : ""}
              />
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Email</label>
              <TextField
                disabled={disable}
                variant="outlined"
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter Email"
                className={styles.textEnabled}
                defaultValue={params.search.split("=")[1] !== "add" ? "Eyal@gmail.com" : ""}
              />
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Group</label>
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
                onClick={() => setGroupOpen(!groupOpen)}
                open={groupOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={10}>Group 1</MenuItem>
                <MenuItem value={20}>Group 2</MenuItem>
                <MenuItem value={30}>Group 3</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Mobile Number</label>
              <TextField
                disabled={disable}
                variant="outlined"
                fullWidth
                margin="dense"
                required
                autoComplete={"off"}
                autoFocus
                placeholder="Enter Mobile Number"
                className={styles.textEnabled}
                defaultValue={params.search.split("=")[1] !== "add" ? "+972-535-556-815" : ""}
              />
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
              <label className={styles.label}>Sex</label>
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
                onClick={() => setSex(!sexOpen)}
                open={sexOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Choose Sex</MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>BirthDate</label>
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
                defaultValue={params.search.split("=")[1] !== "add" ? "20/02/1980" : ""}
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
                onClick={() => setCity(!cityOpen)}
                open={cityOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Choose City</MenuItem>
                <MenuItem value={10}></MenuItem>
                <MenuItem value={20}></MenuItem>
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
                defaultValue={params.search.split("=")[1] !== "add" ? "Tasiya Avirit" : ""}
              />
            </Grid>
            <Grid item xs={2}>
              <label className={styles.label}>Area</label>
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
                onClick={() => setArea(!areaOpen)}
                open={areaOpen}
                IconComponent={KeyboardArrowDownIcon}
              >
                <MenuItem value={0}>Choose Area</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            md={12}
            sx={{ padding: "10px 0px 0px 5px" }}
          >
            <Checkbox color="info" />
            <label className={styles.checkLabel}>
              Can be assigned as Advisor
            </label>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            md={12}
            sx={{ padding: "10px 0px 0px 15px" }}
          >
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label={<span>Patients Department Permissions</span>} />
                <Tab label={<span>Assigned Treatment Types</span>} />
              </Tabs>
              <TabPanel value={tabValue} index={0}>
                <ListTable></ListTable>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <TreatmentList></TreatmentList>
              </TabPanel>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button onClick={handleModal}>
              <img height="45px" src={Addbtn}></img>
            </Button>
          </Grid>
          <Grid
            item
            container
            columnGap={3}
            style={{ display: "flex", justifyContent: "flex-end" }}
            sx={{ padding: "0px 0px 20px 0px" }}
            md={12}
          >
            {params.search.split("=")[1] !== "add" && params.search.split("=")[1] !== "edit" && disable ? (
              <Grid>
                <Button
                  className={styles.saveBtn}
                  variant="contained"
                  onClick={handleEditButton}
                >
                  Edit
                </Button>
              </Grid>
            ) : (
              <Grid
                container
                columnGap={3}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Grid>
                  <Button
                    className={styles.cancelBtn}
                    variant="outlined"
                    onClick={handleCancelBtn}
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
            )}
          </Grid>
          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Card className={styles.addModal}>
              <div className={styles.modalContainer}>
                {selectListTable ?
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
                    </div></> :
                  <>
                    <Grid>
                      <Typography align="center" className={styles.headerModal} >
                        Add Instructor Qualifications
                      </Typography>
                    </Grid>
                    <Grid
                      container
                    //    rowSpacing={1}
                    //    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    //    sx={{ padding: "20px 0px" }}
                    >
                      <div style={{ justifyContent: 'center', display: 'flex', flex: 1, marginTop: '30px', marginBottom: '20px' }}>
                        <TextField
                          className={styles.search}
                          placeholder={`Search`}
                          size="small"
                          value={search}
                          onChange={() => { }}
                          InputProps={{
                            endAdornment: (
                              <img
                                src={SearchIcon}
                                alt="search icon"
                                style={{ width: 14, height: 14 }}
                              />
                            ),
                          }}
                        />
                      </div>

                      <div style={{ width: "100%", marginBottom: '40px' }}>
                        <DataTable
                          loading={false}
                          //orderDirection={orderDirection}
                          //orderField={orderField}
                          setQuery={() => { }}
                          rows={instructorRow}
                          columns={instructorColumn}
                          //   Actions="Delete"

                          page="userDetails"
                          // showSelect={true}
                          editAction={() => { }}
                          deleteAction={() => { }}
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
      </Grid>
    </div>
  );
};

export default UserDetails;
