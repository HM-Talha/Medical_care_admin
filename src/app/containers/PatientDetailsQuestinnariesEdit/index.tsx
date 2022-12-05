import { CustomDrawer } from "../../components/Drawer";
import { useStyles } from "./styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useState } from "react";
import SearchIcon from "../../components/SearchIcon";
import AVTR from "./assets/Ellipse 51.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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
import Topbar from "../Dashboard/components/topbar";
import Addbtn from "./assets/Buttonplus.png";
import { useNavigate } from "react-router-dom";
const PatientsDetailsQuestionarriesEdit = () => {
  const styles = useStyles();
  const [opensend, setSend] = useState(false);
  const [excelBankOpen, setExcelBankOpen] = useState(false);
  const [treatment, setTreatment] = useState(false);
  const [session, setSession] = useState(false);
  const [instructor, setInstructor] = useState(false);
  const [modalName, setModalName] = useState("");
  const [organization, setOrganization] = useState(false);
  const [department, setdepartment] = useState(false);
  const [hours, sethours] = useState(false);
  const [assigned, setassigned] = useState(false);
  const [patientStatus, setpatientStatus] = useState(false);
  const [city, setcity] = useState(false);
  const [disable, setDisable] = useState(false);
  const [sex, setSex] = useState(false);
  const [status, setStatus] = useState(false);
  const [history, setHistory] = useState(false);

  const navigate = useNavigate();
  const handleSendClose = () => {
    setSend(false);
  };
  const value = 0.66;
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={styles.parent}>
      <CustomDrawer />
      {/* header Start */}
      <Topbar />
      {/* header End */}
      <div className={styles.right}>
        {/* dropDown Start */}
        <section className={styles.inputSectionParent}>
          <ArrowBackIcon
            style={{
              color: "#679DA8",
            }}
            onClick={() => navigate("/patients-details-questionarries")}
          />
          <p className={styles.patients}>Patient / </p>
          <p className={styles.addColor}>Patients Details Edit Mode</p>
        </section>
        <section className={styles.dropDownBox}>
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
              onClick={() => setOrganization(!organization)}
              open={organization}
              IconComponent={KeyboardArrowDownIcon}
              className={styles.dropDown2}
            >
              <MenuItem
                onClick={() => setOrganization(!organization)}
                value={10}
              >
                None
              </MenuItem>
              <MenuItem
                onClick={() => setOrganization(!organization)}
                value={20}
              >
                None
              </MenuItem>
              <MenuItem
                onClick={() => setOrganization(!organization)}
                value={30}
              >
                None
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
              onClick={() => setdepartment(!department)}
              open={department}
              IconComponent={KeyboardArrowDownIcon}
              className={styles.dropDown2}
            >
              <MenuItem onClick={() => setdepartment(!department)} value={10}>
                Department 1
              </MenuItem>
              <MenuItem onClick={() => setdepartment(!department)} value={20}>
                Department 1
              </MenuItem>
              <MenuItem onClick={() => setdepartment(!department)} value={30}>
                Department 1
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Hours Bank</label>
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
              onClick={() => sethours(!hours)}
              open={hours}
              IconComponent={KeyboardArrowDownIcon}
              className={styles.dropDown2}
            >
              <MenuItem onClick={() => sethours(!hours)} value={10}>
                Hours Bank # 1
              </MenuItem>
              <MenuItem onClick={() => sethours(!hours)} value={20}>
                Hours Bank # 1
              </MenuItem>
              <MenuItem onClick={() => sethours(!hours)} value={30}>
                Hours Bank # 1
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Assigned Advisor</label>
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
              onClick={() => setassigned(!assigned)}
              open={assigned}
              IconComponent={KeyboardArrowDownIcon}
              className={styles.dropDown2}
            >
              <MenuItem
                onClick={() => setassigned(!assigned)}
                value={10}
                // className={st}
                style={{
                  color: "#6C7A7A !important",
                }}
              >
                Assigned Advisor
              </MenuItem>
              <MenuItem onClick={() => setassigned(!assigned)} value={20}>
                Assigned Advisor
              </MenuItem>
              <MenuItem onClick={() => setassigned(!assigned)} value={30}>
                Assigned Advisor
              </MenuItem>
            </Select>
          </div>
          <div className={styles.modal_dropDown}>
            <label className={styles.label}>Patient Status</label>
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
              onClick={() => setpatientStatus(!patientStatus)}
              open={patientStatus}
              IconComponent={KeyboardArrowDownIcon}
              className={styles.dropDown2}
            >
              <MenuItem
                onClick={() => setpatientStatus(!patientStatus)}
                value={10}
              >
                Patient Status
              </MenuItem>
              <MenuItem
                onClick={() => setpatientStatus(!patientStatus)}
                value={20}
              >
                Patient Status
              </MenuItem>
              <MenuItem
                onClick={() => setpatientStatus(!patientStatus)}
                value={30}
              >
                Patient Status
              </MenuItem>
            </Select>
          </div>
        </section>

        {/* dropDown end */}
        {/* input section start */}
        <section className={styles.inpMainBox}>
          <div className={styles.inputsParent}>
            <section className={styles.inputBox}>
              <label className={styles.input1}>
                <span className={styles.drop_down_name}>First Name </span>
                <input
                  type="text"
                  className={styles.inpMiddle}
                  placeholder="Enter First Name"
                />
              </label>
              <label className={styles.input1}>
                <span className={styles.drop_down_name}>Last Name</span>
                <input
                  type="text"
                  className={styles.inpMiddle}
                  placeholder="Enter Last Name"
                />
              </label>
              <label className={styles.input1}>
                <span className={styles.drop_down_name}>Email</span>
                <input
                  type="text"
                  className={styles.inpMiddle}
                  placeholder="Enter Email"
                />
              </label>
            </section>
            <section className={styles.inputBox}>
              <label className={styles.input1}>
                <span className={styles.drop_down_name}>Cellular</span>
                <input
                  type="text"
                  className={styles.inpMiddle}
                  placeholder="Enter Cellular"
                />
              </label>
              <label
                className={styles.input1}
                style={{
                  position: "relative",
                  right: "10px",
                }}
              >
                <span className={styles.drop_down_name}>Street</span>
                <input
                  type="text"
                  className={styles.inpMiddle}
                  placeholder="Enter Street"
                />
              </label>
              <div
                className={styles.modal_dropDown}
                style={{
                  position: "relative",
                  right: "10px",
                }}
              >
                <label className={styles.label}>City</label>
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
                  onClick={() => setcity(!city)}
                  open={city}
                  IconComponent={KeyboardArrowDownIcon}
                  className={styles.dropDown2}
                  style={{
                    height: "56px",
                  }}
                >
                  <MenuItem onClick={() => setcity(!city)} value={10}>
                    Tei Eviv
                  </MenuItem>
                  <MenuItem onClick={() => setcity(!city)} value={20}>
                    Tei Eviv
                  </MenuItem>
                  <MenuItem onClick={() => setcity(!city)} value={30}>
                    Tei Eviv
                  </MenuItem>
                </Select>
              </div>
            </section>
            <section
              className={styles.inputBox}
              style={{
                alignItems: "center",
                position: "relative",
                left: "8px",
              }}
            >
              <div className={styles.modal_dropDown}>
                <label className={styles.label}>Sex</label>
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
                  onClick={() => setSex(!sex)}
                  open={sex}
                  IconComponent={KeyboardArrowDownIcon}
                  className={styles.dropDown3}
                >
                  <MenuItem onClick={() => setSex(!sex)} value={10}>
                    Male
                  </MenuItem>
                  <MenuItem onClick={() => setSex(!sex)} value={20}>
                    Female
                  </MenuItem>
                </Select>
              </div>
              <div className={styles.modal_dropDown}>
                <label
                  className={styles.label}
                  style={{
                    position: "relative",
                    top: "6px",
                  }}
                >
                  Birth Date
                </label>
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
                  style={{
                    width: "170px",
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
                  className={styles.dropDown3}
                  style={{ width: "150px" }}
                >
                  <MenuItem onClick={() => setStatus(!status)} value={10}>
                    Married
                  </MenuItem>
                  <MenuItem onClick={() => setStatus(!status)} value={20}>
                    Un-Married
                  </MenuItem>
                </Select>
              </div>
              <div className={styles.modal_dropDown}>
                <label className={styles.label}>Any Bad Histor</label>
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
                  onClick={() => setHistory(!history)}
                  open={history}
                  IconComponent={KeyboardArrowDownIcon}
                  className={styles.dropDown3}
                  style={{ width: "205" }}
                >
                  <MenuItem onClick={() => setStatus(!status)} value={10}>
                    Yes
                  </MenuItem>
                  <MenuItem onClick={() => setStatus(!status)} value={20}>
                    No
                  </MenuItem>
                </Select>
              </div>
            </section>
            <section
              className={styles.textAreaBox}
              style={{ position: "relative", left: "6px" }}
            >
              <label className={styles.text1}>
                Comment
                <div className={styles.text2}>
                  <textarea
                    className={styles.textArea}
                    placeholder="Comment Text"
                  ></textarea>
                  <button className={styles.btnSave}>SAVE</button>
                </div>
              </label>
            </section>
            <section className={styles.bottomBox}>
              <p className={styles.para}>12.02.2022.55.56(Uri shipra)</p>
              <textarea className={styles.paraTextArea}>
                This organization Is ...
              </textarea>
            </section>
          </div>
          <div
            className={styles.quesMainBox}
            style={{
              position: "relative",
              top: "-10px",
            }}
          >
            <section className={styles.quesBox}>
              <p> Questioners Grade Results </p>
            </section>
            <section>
              <div className={styles.paragraph}>
                <p className={styles.scale_name}>Physical Scale</p>
                <p className={styles.scale_name}>Mental Scale</p>
              </div>
              <div className={styles.progressContainer}>
                <div
                  style={{
                    position: "relative",
                  }}
                  className={styles.CircularProgress}
                >
                  <div style={{ width: 160, height: 160 }}>
                    <CircularProgressbar
                      value={86}
                      styles={buildStyles({
                        rotation: 0.99,
                        textSize: "16px",
                        pathTransitionDuration: 0.5,
                        pathColor: "#FA7344",
                        trailColor: "transparent",
                        backgroundColor: "##F5F9F9",
                      })}
                    />
                  </div>
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      position: "absolute",
                      left: 19,
                      top: 20,
                    }}
                  >
                    <CircularProgressbar
                      value={86}
                      styles={buildStyles({
                        rotation: 0.99,
                        textSize: "16px",
                        pathTransitionDuration: 0.5,
                        pathColor: "#E5B74F",
                        trailColor: "transparent",
                        backgroundColor: "##F5F9F9",
                      })}
                    />
                  </div>
                </div>

                <div
                  style={{
                    position: "relative",
                    marginLeft: "60px",
                  }}
                >
                  <div style={{ width: 160, height: 160 }}>
                    <CircularProgressbar
                      value={90}
                      styles={buildStyles({
                        rotation: 0.99,
                        textSize: "16px",
                        pathTransitionDuration: 0.1,
                        pathColor: "#FA7344",
                        trailColor: "transparent",
                        backgroundColor: "##F5F9F9",
                      })}
                    />
                  </div>
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      position: "absolute",
                      left: 19,
                      top: 20,
                    }}
                  >
                    <CircularProgressbar
                      value={90}
                      styles={buildStyles({
                        rotation: 0.99,
                        textSize: "16px",
                        pathTransitionDuration: 0.5,
                        pathColor: "#E5B74F",
                        trailColor: "transparent",
                        backgroundColor: "##F5F9F9",
                      })}
                    />
                  </div>
                </div>
              </div>
            </section>
            <div className={styles.checkbox__container}>
              <div className={styles.checkBox}>
                <div className={styles.boxconatiner1}>
                  <div className={styles.box1}></div> <p>before:87/100</p>{" "}
                </div>
                <div className={styles.boxconatiner1}>
                  <div className={styles.box2}></div> <p>before:91/100</p>{" "}
                </div>
              </div>
              <div
                className={styles.checkBox}
                style={{
                  position: "relative",
                  top: "-15px",
                }}
              >
                <div className={styles.boxconatiner1}>
                  <div className={styles.box3}></div> <p>After:91/100</p>{" "}
                </div>
                <div className={styles.boxconatiner1}>
                  <div className={styles.box4}></div> <p>After:97/100</p>{" "}
                </div>
              </div>
              <div>
                <h3 className={styles.comapassion}>
                  Compassion Satisfaction Scale: Low{" "}
                </h3>
                <h5 className={styles.progress1}>Progress</h5>
              </div>
              <div className={styles.progressContainerBar}>
                {/* <div  className={styles.progressContainerBarChild}> */}

                <p className={styles.para_treatment}>
                  Assigned Slots/Assigned Treatments
                </p>
                <div className={styles.bar}>
                  <div className={styles.barChild1}></div>
                </div>
                <p className={styles.para_treatment}>
                  Completed Treatments/ Assigned Treatments
                </p>
                <div className={styles.bar}>
                  <div className={styles.barChild2}></div>
                </div>
                <p className={styles.para_treatment}>
                  Daily Activity watched / Daily Activity Sent
                </p>
                <div className={styles.bar}>
                  <div className={styles.barChild3}></div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>
        {/* input section end */}
        <section>
          <section className={styles.footer}>
            <p
              className={styles.footerPara1}
              onClick={() => navigate("/patients-list/patients-detail")}
            >
              Assigned Treatment
            </p>

            <p
              className={styles.footerPara2}
              onClick={() => navigate("/patients-details-questionarries")}
            >
              Questionnaries Result
            </p>
          </section>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trHead}>
                <td className={styles.tdHeader}> Date Sent</td>
                <td className={styles.tdHeader}>Date Answered</td>
                <td className={styles.tdHeader}>Patient Name</td>
                <td className={styles.tdHeader}>Questionnaire Number</td>
                <td className={styles.tdHeader}>Number Of Question</td>
              </tr>
            </thead>
            <tbody>
              {arr.map(() => {
                return (
                  <tr className={styles.tr}>
                    <td className={styles.dateTd}>15.06.22</td>
                    <td className={styles.dateTd}>15.06.22</td>
                    <td className={styles.dateTd}>Alex</td>
                    <td className={styles.dateTd}>Questionair Name</td>
                    <td className={styles.dateTd}>10</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Grid
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "15px",
            }}
          >
            <Button
              onClick={() => {
                setModalName("Assign Treatment");
                setSend(true);
              }}
            >
              <img height="50px" src={Addbtn}></img>
            </Button>
          </Grid>
          <div className={styles.bottomBoxParent}>
            <section className={styles.child1}>
              <p className={styles.para1}>INTAKE</p>
              <p className={styles.para2}>
                Any bad history you and your family
              </p>
              <textarea className={styles.bottomTextArea}></textarea>
            </section>
            <section className={styles.child2}>
              {" "}
              <p className={styles.para2}>
                Any bad history you and your family
              </p>
              <textarea className={styles.bottomTextArea}></textarea>
            </section>
          </div>
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
                      Organization Name
                    </td>
                    <td className={styles.modal_table_header}>
                      Department Name
                    </td>
                    <td className={styles.modal_table_header}>Patient Name</td>
                    <td className={styles.modal_table_header}>Hours Bank</td>
                    <td className={styles.modal_table_header}>Group</td>
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
                  justifyContent: "space-between",
                  margin: "20px 0",
                }}
              >
                <div className={styles.modal_dropDown}>
                  <label className={styles.label1}>Group/indivdual</label>
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
                  <label className={styles.label1}>Treatment Type</label>
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
                  >
                    <MenuItem
                      onClick={() => setTreatment(!treatment)}
                      value={10}
                    >
                      Treatment Type
                    </MenuItem>
                    <MenuItem
                      onClick={() => setTreatment(!treatment)}
                      value={20}
                    >
                      Mabba Must
                    </MenuItem>
                    <MenuItem
                      onClick={() => setTreatment(!treatment)}
                      value={30}
                    >
                      Mabba Must
                    </MenuItem>
                  </Select>
                </div>
                <div className={styles.modal_dropDown}>
                  <label className={styles.label1}> Session Number</label>
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
                  <label className={styles.label1}>Instructor Full Name</label>
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
      <div>
        <Grid container spacing={3} className={styles.footerBtn}>
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
  );
};

export default PatientsDetailsQuestionarriesEdit;
