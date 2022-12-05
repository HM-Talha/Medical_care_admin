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
} from "@mui/material";
import React, { useState } from "react";
import Addbtn from "./assets/Buttonplus.png";
import { useStyles } from "./style";
import Topbar from "app/containers/Dashboard/components/topbar";
import { style } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { CustomDrawer } from "app/components/Drawer";
import Back from "../OrganizationDetails/assets/Back.png";
import Calender from "app/components/Calender";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListView from "./Components/ListView";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {};

const TimeSlots = (props: Props) => {
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const styles = useStyles();
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState(true);
  const [instructorOpen, setInstructorOpen] = useState(false);

  const handleChange = (e) => {
    setBtnDisabled(!e.target.value);
  };

  const handleTabChange = (event, value) => {
    setValue(value);
  };
  const handleEditButton = () => {
    setDisable(false);
  };
  const handleCancelBtn = () => {
    setDisable(true);
  };
  const handleAddbtn = () => {
    navigate("time-slots-actions")
  };
  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2} > */}
        <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={12}>
        <Topbar/>
        <div className={styles.bodyContainer}>
          <Grid
            className={styles.mainHeader}
          >
            <Grid
              item
              container
              spacing={0}
              md={12}
              sx={{
                padding: "5px 0px 10px 0px",
                justifyContent: "space-between",
              }}
            >
              <Grid item xs={2}>
                <label className={styles.label}>Organization name</label>
                <TextField
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  required
                  id="username"
                  placeholder="Enter Organization name"
                  name="username"
                  autoComplete={"off"}
                  className={styles.SelectEnabled}
                  autoFocus
                />
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Department name</label>
                <TextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  id="username"
                  placeholder="Enter contact name"
                  name="username"
                  autoComplete={"off"}
                  className={styles.SelectEnabled}
                  autoFocus
                />
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Bank Name</label>
                <TextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  id="username"
                  placeholder="Enter phone number"
                  name="username"
                  autoComplete={"off"}
                  className={styles.SelectEnabled}
                  autoFocus
                />
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Instructor Full Name</label>
                <TextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  id="username"
                  placeholder="Enter tax number"
                  name="username"
                  autoComplete={"off"}
                  className={styles.SelectEnabled}
                  autoFocus
                />
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>
                  Actual Instructor Full Name
                </label>
                <Select
                  margin="dense"
                  fullWidth
                  variant="outlined"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.SelectEnabledDrop}
                  onClick={() => setInstructorOpen(!instructorOpen)}
                  open={instructorOpen}
                  IconComponent={KeyboardArrowDownIcon}
                  MenuProps={{
                    disableScrollLock: true,
                  }}
                >
                  <MenuItem
                    onClick={() => setInstructorOpen(!instructorOpen)}
                    value={10}
                  >
                    Instructor name 1
                  </MenuItem>
                  <MenuItem
                    onClick={() => setInstructorOpen(!instructorOpen)}
                    value={20}
                  >
                    Instructor name 2
                  </MenuItem>
                  <MenuItem
                    onClick={() => setInstructorOpen(!instructorOpen)}
                    value={30}
                  >
                    Instructor name 3
                  </MenuItem>
                </Select>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container spacing={2} md={12} sx={{ paddingLeft: "15px" }}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label={<span>Monthly View</span>} />
                <Tab label={<span>Weekly View</span>} />
                <Tab label={<span>List View</span>} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Calender View="dayGridMonth" initialView="dayGridMonth" />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Calender View="timeGridWeek" initialView="timeGridWeek" />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <ListView />
              </TabPanel>
            </Box>
          </Grid>

          <Grid
            container
            style={{ display: "flex", padding: "15px 10px 20px 0px" }}
            md={12}
          >
            <Grid
              container
              columnGap={3}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: "10px",
              }}
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
              style={{
                display: "flex",
                justifyContent: "flex-end",
                paddingBottom: "20px",
              }}
              md={4}
            >
              <Button onClick={handleAddbtn}>
                <img height="45px" src={Addbtn}></img>
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default TimeSlots;
