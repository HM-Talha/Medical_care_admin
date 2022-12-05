import { Button, Grid, MenuItem, Select } from "@mui/material";
import { CustomDrawer } from "app/components/Drawer";
import React, { useState } from "react";
import Topbar from "../Dashboard/components/topbar";
import { useStyles } from "./styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getSectionHasLiquidHeight } from "@fullcalendar/react";
import Addbtn from "./assets/Buttonplus.png";
import { useNavigate } from "react-router-dom";

const Questionnaires = () => {
  const styles = useStyles();
  const [organizationOpen, setOrganizationOpen] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.bg_color}>
        <CustomDrawer />
        <Topbar />
        <div className={styles.right}>
          {/* rightSide */}
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label className={styles.label}>Organization name</label>
            <Select
              margin="dense"
              fullWidth
              variant="outlined"
              required
              autoComplete={"off"}
              autoFocus
              value={10}
              className={styles.textEnabled}
              onClick={() => setOrganizationOpen(!organizationOpen)}
              open={organizationOpen}
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value={10}> Organization 1 </MenuItem>
              <MenuItem value={20}> Organization 1 </MenuItem>
              <MenuItem value={30}> Organization 1 </MenuItem>
            </Select>
          </Grid>

          <div>
            <table className={styles.table}>
              <thead>
                <tr className={styles.trHead}>
                  <td className={styles.tdHeader}>Action</td>
                  <td className={styles.tdHeader}> Date Created</td>
                  <td className={styles.tdHeader}> Data Edited</td>
                  <td className={styles.tdHeader}>Questionnaire Name</td>
                  <td
                    colSpan={1}
                    style={{
                      width: "200px",
                    }}
                  >
                    {" "}
                  </td>
                  <td className={styles.tdHeader}>Number Of Question</td>
                  <td className={styles.tdHeader}>Maximum Grade</td>
                </tr>
              </thead>
              <tbody>
                {arr.map(() => {
                  return (
                    <tr
                      className={styles.tr}
                      onDoubleClick={() =>
                        navigate("/questionnaires/questionnair-detail")
                      }
                    >
                      <td className={styles.actionTD}>
                        <DeleteIcon
                          style={{
                            color: "#C66078",
                            fontSize: "19px",
                            margin: "0 10px",
                          }}
                        />
                        <EditIcon
                          style={{ color: "#E7B84F", fontSize: "19px" }}
                        />
                      </td>
                      <td className={styles.dateTd}>15.06.22</td>
                      <td className={styles.dateTd}>15.06.22</td>
                      <td className={styles.dateTd}>Question Of Begginners</td>
                      <td colSpan={1}></td>
                      <td
                        className={styles.dateTd}
                        style={{ paddingLeft: "22px" }}
                      >
                        20
                      </td>
                      <td
                        className={styles.dateTd}
                        style={{ paddingLeft: "22px" }}
                      >
                        90
                      </td>
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
              paddingTop: "15px",
            }}
          >
            <Button
              onClick={() => navigate("/questionnaires/add-questionaire")}
            >
              <img height="50px" src={Addbtn}></img>
            </Button>
          </Grid>

          {/* rightSide */}
        </div>
      </div>
    </>
  );
};

export default Questionnaires;
