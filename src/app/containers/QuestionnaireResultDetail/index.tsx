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

const QuestionnairResultDetail = () => {
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
              onClick={() => navigate("/questionnaires-result")}
            />
            <p className={styles.patients}>Questionnaire Result / </p>
            <p className={styles.addColor}>Questionnaire ResultDetail </p>
          </section>
          <div>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trHead}>
                  <td className={styles.tdHeader}>Date Sent</td>
                  <td className={styles.tdHeader}>Date Answered</td>
                  <td className={styles.tdHeader}>Patient Name</td>
                  <td
                    className={styles.tdHeader}
                    // style={{ textAlign: "center" }}
                  >
                    Questionnair Name
                  </td>
                  <td className={styles.tdHeader}>Number Of Question</td>

                  <td className={styles.tdHeader}>Total Grade</td>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tr}>
                  <td className={styles.actionTD}>15.06.22</td>
                  <td className={styles.dateTd}>15.06.22</td>
                  <td className={styles.dateTd}>Alex Gtelmen</td>
                  <td className={styles.dateTd}>
                    Questionnaire for Begginners
                  </td>
                  <td className={styles.dateTd}>15</td>
                  <td className={styles.dateTd}>20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trHead}>
                  <td className={styles.tdHeader}>#</td>
                  <td className={styles.tdHeader}>Question Body</td>
                  <td className={styles.tdHeader}>Answer 1</td>
                  <td className={styles.tdHeader}>Answer 2</td>
                  <td className={styles.tdHeader}>Answer 3</td>
                  <td className={styles.tdHeader}>Answer 4</td>
                  <td className={styles.tdHeader}>Answer 5</td>
                  <td
                    className={styles.tdHeader}
                    style={{ textAlign: "center" }}
                  >
                    Max <br /> Weight
                  </td>
                  <td
                    className={styles.tdHeader}
                    style={{ textAlign: "center" }}
                  >
                    Patient <br /> Selection
                  </td>
                  <td
                    className={styles.tdHeader}
                    style={{ textAlign: "center" }}
                  >
                    Patient <br /> Selection Weight
                  </td>
                </tr>
              </thead>
              <tbody>
                {arr.map((v) => {
                  return (
                    <tr className={styles.tr}>
                      <td className={styles.actionTD}>{v}</td>
                      <td className={styles.dateTd}>
                        Lorem, ipsum dolor. Sit EMi.
                      </td>
                      <td className={styles.dateTd}>Never</td>
                      <td className={styles.dateTd}>Somtimes</td>
                      <td className={styles.dateTd}>Rarely</td>
                      <td className={styles.dateTd}>Often</td>
                      <td className={styles.dateTd}>Very Often</td>
                      <td
                        className={styles.dateTd}
                        style={{ textAlign: "center" }}
                      >
                        5
                      </td>
                      <td
                        className={styles.dateTd}
                        style={{ textAlign: "center" }}
                      >
                        2
                      </td>
                      <td
                        className={styles.dateTd}
                        style={{ textAlign: "center" }}
                      >
                        5
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* rightSide */}
        </div>
      </div>
    </>
  );
};

export default QuestionnairResultDetail;
