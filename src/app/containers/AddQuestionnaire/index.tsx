import { Button, Grid, MenuItem, Select } from "@mui/material";
import { CustomDrawer } from "app/components/Drawer";
import React, { useState } from "react";
import Topbar from "../Dashboard/components/topbar";
import { useStyles } from "./styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { getSectionHasLiquidHeight } from "@fullcalendar/react";
import Addbtn from "./assets/Buttonplus.png";
import { Navigate, useNavigate } from "react-router-dom";

const AddQuestionnaires = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className={styles.bg_color}>
        <CustomDrawer />
        <Topbar />
        <div className={styles.right}>
          {/* rightSide */}

          <section className={styles.inputSectionParent}>
            <ArrowBackIcon
              style={{
                color: "#679DA8",
              }}
              onClick={() => navigate("/questionnaires")}
            />
            <p className={styles.patients}>Questionnaries / </p>
            <p className={styles.addColor}> Add Questionnaires</p>
          </section>

          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label className={styles.label}>Organization name</label>
            <input
              className={styles.textEnabled}
              placeholder="Ener Questionnaire Question"
              type="text"
            />
          </Grid>
          <section className={styles.Questionnaire_heading}>
            Create Questionnaire
          </section>

          <div>
            <section className={styles.question_box}>
              <p className={styles.quest1}>Question 1</p>
              <p className={styles.quest2}>Question 2</p>
              <p className={styles.quest3}>Question 3</p>
            </section>

            <section className={styles.question_body}>
              <label className={styles.question_body_text_box}>
                <span className={styles.question_text}>Question Body</span>
                <textarea
                  placeholder="I Am Happy"
                  className={styles.question_text_area}
                ></textarea>
              </label>

              <div className={styles.check_box_main_parent}>
                <section>
                  <p className={styles.ans_text}>Answer Content</p>
                  <div className={styles.check_parent}>
                    <label className={styles.check_box_parent}>
                      <input className={styles.check_box} type="checkbox" />
                      <span className={styles.check_text}>Never</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <input className={styles.check_box} type="checkbox" />
                      <span className={styles.check_text}>Rarely</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <input className={styles.check_box} type="checkbox" />
                      <span className={styles.check_text}>Sometimes</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <input className={styles.check_box} type="checkbox" />
                      <span className={styles.check_text}>Often</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <input className={styles.check_box} type="checkbox" />
                      <span className={styles.check_text}>Very Often</span>
                    </label>
                  </div>
                </section>
                <section>
                  <p className={styles.ans_text}>Answer Weight</p>
                  <div className={styles.check_parent}>
                    <label className={styles.check_box_parent}>
                      <span className={styles.check_text1}>5</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <span className={styles.check_text1}>9</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <span className={styles.check_text1}>8</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <span className={styles.check_text1}>7</span>
                    </label>
                    <label className={styles.check_box_parent}>
                      <span className={styles.check_text1}>6</span>
                    </label>
                  </div>
                </section>
              </div>
            </section>
          </div>

          <Grid
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingTop: "15px",
            }}
          >
            <Button>
              <span className={styles.addQues}>Add Question</span>
              <img height="50px" src={Addbtn}></img>
            </Button>
          </Grid>

          <div>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trHead}>
                  <td className={styles.tdHeader}>Grade Type</td>
                  <td className={styles.tdHeader}>Question Numbers</td>
                  <td className={styles.tdHeader}>Grade Type</td>
                  <td
                    className={styles.tdHeader}
                    style={{ textAlign: "center" }}
                  >
                    Min Grad <br /> (calc)
                  </td>
                  <td className={styles.tdHeader}>
                    Max Grad <br /> (calc)
                  </td>

                  <td className={styles.tdHeader}>Grade Ranges</td>
                  <td className={styles.tdHeader}>Mental / Physical</td>
                </tr>
              </thead>
              <tbody>
                {arr.map(() => {
                  return (
                    <tr className={styles.tr}>
                      <td className={styles.actionTD}>
                        Compassiona Satisfaction Scale
                      </td>
                      <td className={styles.dateTd}>1/3/11</td>
                      <td className={styles.dateTd}>Range</td>
                      <td className={styles.dateTd}>0</td>
                      <td className={styles.dateTd}>60</td>
                      <td className={styles.dateTd}>
                        0-22-law/23-41-Medium/41-999-High
                      </td>
                      <td className={styles.dateTd}>Mental</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Grid
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingTop: "15px",
            }}
          >
            <Button>
              <span className={styles.addQues}>Add Grade Type</span>
              <img height="50px" src={Addbtn}></img>
            </Button>
          </Grid>
          <div>
            <div
              className={styles.btnContainer1}
              // container
              // className={styles.btnContainer1}
              // spacing={3}
            >
              <Grid>
                <Button className={styles.cancelBtn} variant="outlined">
                  Cancel
                </Button>
              </Grid>
              <Grid>
                <Button className={styles.saveBtn} variant="contained">
                  Send
                </Button>
              </Grid>
            </div>
          </div>
          {/* rightSide */}
        </div>
      </div>
    </>
  );
};

export default AddQuestionnaires;
