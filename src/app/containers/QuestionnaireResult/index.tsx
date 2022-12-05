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

const QuestionnairResult = () => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <div className={styles.bg_color}>
        <CustomDrawer />
        <Topbar />
        <div className={styles.right}>
          {/* rightSide */}

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
                {arr.map(() => {
                  return (
                    <tr
                      className={styles.tr}
                      onDoubleClick={() =>
                        navigate(
                          "/questionnaires-result/questionnaires-result-detail"
                        )
                      }
                    >
                      <td className={styles.actionTD}>15.06.22</td>
                      <td className={styles.dateTd}>15.06.22</td>
                      <td className={styles.dateTd}>Alex Gtelmen</td>
                      <td className={styles.dateTd}>
                        Questionnaire for Begginners
                      </td>
                      <td className={styles.dateTd}>15</td>
                      <td className={styles.dateTd}>20</td>
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

export default QuestionnairResult;
