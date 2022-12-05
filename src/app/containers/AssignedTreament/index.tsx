import { CustomDrawer } from "app/components/Drawer";
import { Styles } from "app/components/Drawer/styles";
import SearchIcon from "app/components/SearchIcon";
import React, { useState } from "react";
import { useStyles } from "./styles";
import AVTR from "./assets/Ellipse 51.png";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArticleIcon from "@mui/icons-material/Article";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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
  InputAdornment,
} from "@mui/material";
const AssignedTreatment = () => {
  const [excelBankOpen, setExcelBankOpen] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [session, setSession] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const [actualInstructor, setActualInstructor] = useState(false);
  const [disable, setDisable] = useState(false);
  const [status, setStatus] = useState(false);
  const [opensend, setSend] = useState(false);
  const [modalName, setModalName] = useState("");

  const styles = useStyles();
  const handleSendClose = () => {
    setSend(false);
  };
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={styles.parent}>
      <CustomDrawer />
      <div className={styles.right}>
        {/* header Start */}
        <section className={styles.header}>
          <div className={styles.inpBox}>
            <input type="text" className={styles.inp} placeholder="Search" />
            <span className={styles.searchIcon}>
              <SearchIcon />
            </span>
          </div>
          <div>
            <img src={AVTR} />
            <span className={styles.organization}>Organization</span>
          </div>
        </section>

        <Grid
          item
          xs={4}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 0",
          }}
        >
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Organization Name</label>
            <Select
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="username"
              placeholder="Enter Activity Name"
              name="username"
              autoComplete={"off"}
              autoFocus
              value={10}
              onClick={() => setExcelBankOpen(!excelBankOpen)}
              open={excelBankOpen}
              IconComponent={KeyboardArrowDownIcon}
              style={{
                background: "#fff",
              }}
            >
              <MenuItem
                onClick={() => setExcelBankOpen(!excelBankOpen)}
                value={10}
              >
                Group
              </MenuItem>
              <MenuItem
                onClick={() => setExcelBankOpen(!excelBankOpen)}
                value={20}
              >
                Group
              </MenuItem>
              <MenuItem
                onClick={() => setExcelBankOpen(!excelBankOpen)}
                value={30}
              >
                Group
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Department Name</label>
            <Select
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="username"
              placeholder="Enter Activity Name"
              name="username"
              autoComplete={"off"}
              autoFocus
              value={10}
              onClick={() => setTreatment(!treatment)}
              open={treatment}
              IconComponent={KeyboardArrowDownIcon}
              style={{
                background: "#fff",
              }}
            >
              <MenuItem onClick={() => setTreatment(!treatment)} value={10}>
                Treatment Type
              </MenuItem>
              <MenuItem onClick={() => setTreatment(!treatment)} value={20}>
                Mabba Must
              </MenuItem>
              <MenuItem onClick={() => setTreatment(!treatment)} value={30}>
                Mabba Must
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}> Treatment Type Name</label>
            <Select
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="username"
              placeholder="Enter Activity Name"
              name="username"
              autoComplete={"off"}
              autoFocus
              value={10}
              onClick={() => setSession(!session)}
              open={session}
              IconComponent={KeyboardArrowDownIcon}
              style={{
                background: "#fff",
              }}
            >
              <MenuItem onClick={() => setSession(!session)} value={10}>
                Session Number
              </MenuItem>
              <MenuItem onClick={() => setSession(!session)} value={20}>
                1
              </MenuItem>
              <MenuItem onClick={() => setSession(!session)} value={30}>
                1
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Instructor Full Name</label>
            <Select
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="username"
              placeholder="Enter Activity Name"
              name="username"
              autoComplete={"off"}
              autoFocus
              value={10}
              onClick={() => setInstructor(!instructor)}
              open={instructor}
              IconComponent={KeyboardArrowDownIcon}
              style={{
                background: "#fff",
              }}
            >
              <MenuItem onClick={() => setInstructor(!instructor)} value={10}>
                Eli Eliyahu
              </MenuItem>
              <MenuItem onClick={() => setInstructor(!instructor)} value={20}>
                Eli Eliyahu
              </MenuItem>
              <MenuItem onClick={() => setInstructor(!instructor)} value={30}>
                Eli Eliyahu
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Actual Instructor Full Name</label>
            <Select
              variant="outlined"
              margin="dense"
              required
              fullWidth
              id="username"
              placeholder="Enter Activity Name"
              name="username"
              autoComplete={"off"}
              autoFocus
              value={10}
              onClick={() => setActualInstructor(!actualInstructor)}
              open={actualInstructor}
              IconComponent={KeyboardArrowDownIcon}
              style={{
                background: "#fff",
              }}
            >
              <MenuItem
                onClick={() => setActualInstructor(!actualInstructor)}
                value={10}
              >
                Eli Eliyahu
              </MenuItem>
              <MenuItem
                onClick={() => setActualInstructor(!actualInstructor)}
                value={20}
              >
                Eli Eliyahu
              </MenuItem>
              <MenuItem
                onClick={() => setActualInstructor(!actualInstructor)}
                value={30}
              >
                Eli Eliyahu
              </MenuItem>
            </Select>
          </div>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Grid
            item
            xs={2}
            style={{
              display: "flex",
            }}
          >
            <div className={styles.modal_dropDown}>
              <label className={styles.label}>From Treatment Date</label>
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
                //   defaultValue={disable}
              />
            </div>
            <div className={styles.modal_dropDown}>
              <label className={styles.label}>To Treatment Date</label>
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
                //   defaultValue={disable}
              />
            </div>
            <div className={styles.modal_dropDown}>
              <label className={styles.label}>Status</label>
              <Select
                variant="outlined"
                margin="dense"
                required
                fullWidth
                id="username"
                placeholder="Enter Activity Name"
                name="username"
                autoComplete={"off"}
                autoFocus
                value={10}
                onClick={() => setStatus(!status)}
                open={status}
                IconComponent={KeyboardArrowDownIcon}
                style={{
                  background: "#fff",
                  marginTop: "10px",
                }}
              >
                <MenuItem onClick={() => setStatus(!status)} value={10}>
                  Eli Eliyahu
                </MenuItem>
                <MenuItem onClick={() => setStatus(!status)} value={20}>
                  Eli Eliyahu
                </MenuItem>
                <MenuItem onClick={() => setStatus(!status)} value={30}>
                  Eli Eliyahu
                </MenuItem>
              </Select>
            </div>
          </Grid>
          <Grid
            style={{
              width: "25%",
            }}
          >
            <div className={styles.total_item_parent}>
              <span className={styles.blue_text}>Total Item In List</span>
              <span>1152</span>
            </div>
          </Grid>
        </Grid>
        <section className={styles.tableParent}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trHead}>
                <td className={styles.tdHeader}>Action</td>
                <td className={styles.tdHeader}> Data Assigned</td>
                <td className={styles.tdHeader}>Assigned by</td>
                <td className={styles.tdHeader}> Treatment Type</td>
                <td className={styles.tdHeader}>Session Number</td>
                <td className={styles.tdHeader}>TreatMent Data & Time</td>
                <td className={styles.tdHeader}>Instructor</td>
              </tr>
            </thead>
            <tbody>
              {arr.map(() => {
                return (
                  <tr className={styles.tr}>
                    <td className={styles.actionTD}>
                      <ArticleIcon
                        style={{
                          color: "#597D85",
                          fontSize: "1.5rem",
                          margin: "0 10px",
                        }}
                        onClick={() => {
                          setModalName("Assign Slots");
                          setSend(true);
                        }}
                      />
                      <SendIcon
                        style={{ color: "#FA7344", fontSize: "1.5rem" }}
                      />
                      <DeleteIcon
                        style={{
                          color: "#C66078",
                          fontSize: "1.5rem",
                          margin: "0 10px",
                        }}
                      />
                      <EditIcon
                        onClick={() => {
                          setModalName("Edit Slots");
                          setSend(true);
                        }}
                      />
                    </td>
                    <td className={styles.dateTd}>15.06.22</td>
                    <td className={styles.dateTd}>Eli Eliyahu</td>
                    <td className={styles.dateTd}>Treatment Type 1</td>
                    <td className={styles.dateTd}>1</td>
                    <td className={styles.dateTd}>NA</td>
                    <td className={styles.dateTd}>Eli Eliyahu</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      </div>
      <Modal
        open={opensend}
        onClose={handleSendClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={styles.messageModal}>
          <div className={styles.modalContainer}>
            <div>
              <h1 className={styles.treatment_heading}>{modalName} </h1>
            </div>
            <div>
              <table className={styles.modal_table}>
                <thead>
                  <tr>
                    <td className={styles.modal_table_header}>
                      <h3>Organization Name </h3>
                    </td>
                    <td className={styles.modal_table_header}>
                      <h3>Department Name </h3>
                    </td>
                    <td className={styles.modal_table_header}>
                      <h3>Patient Name </h3>
                    </td>
                    <td className={styles.modal_table_header}>
                      <h3>Hours Bank </h3>
                    </td>
                    <td className={styles.modal_table_header}>
                      <h3>Group </h3>
                    </td>
                    <td className={styles.modal_table_header}>
                      <h3>Individual </h3>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={styles.modal_table_category}>
                      Organization 1
                    </td>
                    <td className={styles.modal_table_category}>
                      Department 1
                    </td>
                    <td className={styles.modal_table_category}>Yossi levi</td>
                    <td className={styles.modal_table_category}>
                      10 : 00 11:00
                    </td>
                    <td className={styles.modal_table_category}>
                      Selected 2/3
                    </td>
                    <td className={styles.modal_table_category}>
                      Selected 1/3
                    </td>
                  </tr>
                </tbody>
              </table>
              <Grid
                item
                xs={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "20px 0",
                }}
              >
                <div className={styles.modal_dropDown1}>
                  <label className={styles.label}>Optional Hours</label>
                  <Select
                    variant="outlined"
                    margin="dense"
                    required
                    fullWidth
                    id="username"
                    placeholder="Enter Activity Name"
                    name="username"
                    autoComplete={"off"}
                    autoFocus
                    value={10}
                    onClick={() => setExcelBankOpen(!excelBankOpen)}
                    open={excelBankOpen}
                    IconComponent={KeyboardArrowDownIcon}
                    style={{ background: "#fff" }}
                  >
                    <MenuItem
                      onClick={() => setExcelBankOpen(!excelBankOpen)}
                      value={10}
                    >
                      Group
                    </MenuItem>
                    <MenuItem
                      onClick={() => setExcelBankOpen(!excelBankOpen)}
                      value={20}
                    >
                      Group
                    </MenuItem>
                    <MenuItem
                      onClick={() => setExcelBankOpen(!excelBankOpen)}
                      value={30}
                    >
                      Group
                    </MenuItem>
                  </Select>
                </div>

                <div className={styles.modal_dropDown1}>
                  <label className={styles.label}>Optional Hours</label>
                  <Select
                    variant="outlined"
                    margin="dense"
                    required
                    fullWidth
                    id="username"
                    placeholder="Enter Activity Name"
                    name="username"
                    autoComplete={"off"}
                    autoFocus
                    value={10}
                    onClick={() => setInstructor(!instructor)}
                    open={instructor}
                    IconComponent={KeyboardArrowDownIcon}
                    style={{ background: "#fff" }}
                  >
                    <MenuItem
                      onClick={() => setInstructor(!instructor)}
                      value={10}
                    >
                      Eli Eliyahu
                    </MenuItem>
                    <MenuItem
                      onClick={() => setInstructor(!instructor)}
                      value={20}
                    >
                      Eli Eliyahu
                    </MenuItem>
                    <MenuItem
                      onClick={() => setInstructor(!instructor)}
                      value={30}
                    >
                      Eli Eliyahu
                    </MenuItem>
                  </Select>
                </div>
              </Grid>
            </div>
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
                    onClick={handleSendClose}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid container item xs={6} direction="column">
                  <Button className={styles.saveBtn} variant="contained">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default AssignedTreatment;
