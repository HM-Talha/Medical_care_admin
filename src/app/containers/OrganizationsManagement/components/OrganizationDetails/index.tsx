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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Addbtn from "../../assets/Buttonplus.png";
import { useStyles } from "./style";
import Topbar from "app/containers/Dashboard/components/topbar";
import { style } from "@mui/system";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { CustomDrawer } from "app/components/Drawer";
import Back from "../OrganizationDetails/assets/Back.png";
import TreatmentBanksList from "./TreatmentBanks";
import ContactsList from "./Contacts";
import DepartmentList from "./Department";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

type Props = {};

const OrganizationDetails = (props: Props) => {
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
  const params = useLocation();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState(true);

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
    if (
      params.search.split("=")[1] === "add" ||
      params.search.split("=")[1] === "edit"
    ) {
      navigate("/organizations");
    }
    setDisable(true);
  };
  const handleAddbtn = () => {
    navigate("/organizations/organization-details/add-group-treatment");
  };
  useEffect(() => {
    if (
      params.search.split("=")[1] === "add" ||
      params.search.split("=")[1] === "edit"
    ) {
      setDisable(false);
    }
  }, []);

  return (
    <div className={styles.mainContainer}>
      {/* <Grid item xs={2}> */}
      <CustomDrawer />
      {/* </Grid> */}
      <Grid item xs={12}>
        <Topbar />
        <div className={styles.root}>
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
              {params.search.split("=")[1] === "add" ? (
                <Typography className={styles.textHeaderT}>
                  Add Organization
                </Typography>
              ) : (
                <Typography className={styles.textHeaderT}>
                  Organizations Details{" "}
                  {params.search.split("=")[1] !== "add" &&
                  params.search.split("=")[1] !== "edit" &&
                  disable
                    ? "View"
                    : "Edit"}{" "}
                  Mode
                </Typography>
              )}
            </div>
          </Grid>
          <Grid sx={{ padding: "20px 0px 0px 0px" }}>
            <Grid
              item
              container
              spacing={2}
              md={10}
              sx={{ paddingBottom: "10px" }}
            >
              <Grid item xs={3}>
                <label className={styles.label}>Organization name</label>
                <TextField
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  disabled={disable}
                  required
                  id="username"
                  placeholder="Enter Organization name"
                  name="username"
                  autoComplete={"off"}
                  autoFocus
                  className={!disable ? styles.textEnabled : ""}
                  defaultValue={
                    params.search.split("=")[1] !== "add" ? "Tasiya Avirit" : ""
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Tax ID</label>
                <TextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={disable}
                  id="username"
                  placeholder="Enter tax number"
                  name="username"
                  autoComplete={"off"}
                  autoFocus
                  className={!disable ? styles.textEnabled : ""}
                  defaultValue={
                    params.search.split("=")[1] !== "add" ? "864356896457" : ""
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Contact Email</label>
                <TextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={disable}
                  id="username"
                  placeholder="Enter contact email"
                  name="username"
                  autoComplete={"off"}
                  autoFocus
                  className={!disable ? styles.textEnabled : ""}
                  defaultValue={
                    params.search.split("=")[1] !== "add"
                      ? "Eyal.Hilel@gmail.com"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={3}>
                <label className={styles.label}>Contact Phone Number</label>
                <TextField
                  variant="outlined"
                  margin="dense"
                  required
                  fullWidth
                  disabled={disable}
                  id="username"
                  placeholder="Enter phone number"
                  name="username"
                  autoComplete={"off"}
                  autoFocus
                  className={!disable ? styles.textEnabled : ""}
                  defaultValue={
                    params.search.split("=")[1] !== "add"
                      ? "29 David Elazar, Hod Hasharon"
                      : ""
                  }
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item container spacing={2} md={12} sx={{ padding: "5px 0px" }}>
            <Grid item md={11}>
              <label className={styles.label}>Comment</label>
              <TextField
                margin="dense"
                variant="outlined"
                fullWidth
                required
                disabled={disable}
                id="username"
                placeholder="Comment"
                name="username"
                autoComplete={"off"}
                autoFocus
                className={!disable ? styles.textEnabled : ""}
                defaultValue={
                  params.search.split("=")[1] !== "add" ? "Comment text" : ""
                }
              />
            </Grid>
            <Grid
              md={1}
              item
              style={{
                display: "flex",
                alignItems: "flex-end",
                marginBottom: "5px",
                paddingRight: "15px",
              }}
            >
              <Button className={styles.commentSaveBtn} variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            md={12}
            sx={{ padding: "15px 15px" }}
          >
            <TextField
              id="outlined-multiline-static"
              multiline
              disabled={disable}
              rows={4}
              placeholder="This organization is..."
              fullWidth
              className={!disable ? styles.textEnabled : ""}
              defaultValue={
                params.search.split("=")[1] !== "add"
                  ? "This organization is..."
                  : ""
              }
            />
          </Grid>
          <Grid
            item
            container
            spacing={2}
            md={12}
            sx={{ padding: "0px 0px 0px 15px" }}
          >
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleTabChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label={<span>Treatment Banks</span>} />
                <Tab label={<span>Contacts</span>} />
                <Tab label={<span>Departments</span>} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <TreatmentBanksList />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <ContactsList />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <DepartmentList />
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
            <Button onClick={handleAddbtn}>
              <img height="45px" src={Addbtn}></img>
            </Button>
          </Grid>
          <Grid
            item
            container
            columnGap={3}
            style={{ display: "flex", justifyContent: "flex-end" }}
            sx={{ padding: "0px 14px 20px 0px" }}
            md={12}
          >
            {params.search.split("=")[1] !== "add" &&
            params.search.split("=")[1] !== "edit" &&
            disable ? (
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
        </div>
      </Grid>
    </div>
  );
};

export default OrganizationDetails;
