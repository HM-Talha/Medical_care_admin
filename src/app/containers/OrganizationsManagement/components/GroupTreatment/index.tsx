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
import Addbtn from "../../assets/Buttonplus.png";
import { useStyles } from "./styles";
import Topbar from "app/containers/Dashboard/components/topbar";
import { style } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { CustomDrawer } from "app/components/Drawer";
import Back from "../GroupTreatment/assets/Back.png";
import uploadBtn from "../GroupTreatment/assets/Upload.png";
import GroupTreatmentType from "./GroupTreatmentType";
import IndividualTreatmentType from "./IndividualTreatmentType";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {};

const GroupTreatment = (props: Props) => {
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
  const [departmentOpen, setDepartmentOpen] = useState(false);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [bankOpen, setBankOpen] = useState(false);
  const [qnameOpen, setQnameOpen] = useState(false);
  const [chipTextForTreatment, setChipTextForTreatment] = useState("Group Treatments for each patients");


  const handleChange = (e) => {
    setBtnDisabled(!e.target.value);
  };

  const handleTabChange = (event, value) => {
    setValue(value);
  };

  return (
    <div  className={styles.mainContainer}>
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
              <Typography className={styles.textHeader}>
                Organizations /
              </Typography>
              <Typography className={styles.textHeaderT}>
                Add Treatment Bank
              </Typography>
            </div>
          </Grid>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid container spacing={0} md={12} sx={{ padding: "0px 0px 10px 0px", justifyContent: "space-between" }}>
              <Grid item xs={2}>
                <label className={styles.label}>Department Name</label>
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
                  open={departmentOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={10}>Department 1</MenuItem>
                  <MenuItem value={20}>Department 2</MenuItem>
                  <MenuItem value={30}>Department 3</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Questionnaire Name</label>
                <Select
                  variant="outlined"

                  fullWidth
                  margin="dense"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onClick={() => setQuestionOpen(!questionOpen)}
                  open={questionOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={10}>Life Quality Questionnaire</MenuItem>
                  <MenuItem value={20}>Life Quality Questionnaire</MenuItem>
                  <MenuItem value={30}>Life Quality Questionnaire</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Bank Status</label>
                <Select
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onClick={() => setBankOpen(!bankOpen)}
                  open={bankOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={10}>New</MenuItem>
                  <MenuItem value={20}>In Scheduling</MenuItem>
                  <MenuItem value={30}>Running</MenuItem>
                  <MenuItem value={40}>Close</MenuItem>
                  <MenuItem value={50}>Bank Status 4</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={2}>
                <label className={styles.label}>Questionnaire Name</label>
                <Select
                  variant="outlined"
                  fullWidth
                  margin="dense"
                  required
                  autoComplete={"off"}
                  autoFocus
                  value={10}
                  className={styles.textEnabled}
                  onClick={() => setQnameOpen(!qnameOpen)}
                  open={qnameOpen}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  <MenuItem value={10}>Life Quality Questionnaire</MenuItem>
                  <MenuItem value={20}>Questionnaire 1</MenuItem>
                  <MenuItem value={30}>Questionnaire 2</MenuItem>
                  <MenuItem value={40}>Questionnaire 3</MenuItem>
                  <MenuItem value={50}>Questionnaire 4</MenuItem>
                </Select>
              </Grid>
              <Grid className={styles.dotBox} item xs={2}>
                <Grid className={styles.uploadBox}>
                  <img width="30px" src={uploadBtn}></img>
                  <label className={styles.uploadLabel}>Upload Document</label>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container spacing={1} md={12} sx={{ padding: "5px 0px 10px 15px" , justifyContent: "space-between"  }}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab onClick={() => setChipTextForTreatment("Group Treatments for each patients")} label={<span>Group Treatment Type</span>} />
                <Tab onClick={() => setChipTextForTreatment("Individual Treatments for each patients")} label={<span>Individual Treatment Type</span>} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <GroupTreatmentType />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <IndividualTreatmentType />
              </TabPanel>
            </Box>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "12px",
            }}
          >
            <Button>
              <img height="45px" src={Addbtn}></img>
            </Button>
          </Grid>
          <Grid
            container
            style={{ display: "flex" }}
            sx={{ padding: "0px 28px 20px 0px" }}
            md={12}
          >
            <Grid
              container
              columnGap={3}
              style={{ display: "flex", justifyContent: "flex-start" }}
              md={8}
            >
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>Total Patients</label>
                <label className={styles.numLabel}>20</label>
              </Grid>
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>Total Selected</label>
                <label className={styles.numLabel}>3</label>
              </Grid>
              <Grid className={styles.chipBox}>
                <label className={styles.chipLabel}>{chipTextForTreatment}</label>
                <label className={styles.numLabel}>2</label>
              </Grid>
            </Grid>
            <Grid
              container
              columnGap={3}
              style={{ display: "flex", justifyContent: "flex-end" }}
              md={4}
            >
              <Grid>
                <Button className={styles.cancelBtn} onClick={() => navigate(-1)} variant="outlined">
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button className={styles.saveBtn} variant="contained">
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default GroupTreatment;
