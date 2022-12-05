import {
  TextField,
  MenuItem,
  Divider,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./styles";
import Topbar from "app/containers/Dashboard/components/topbar";
import Back from "../NotificationDetails/assets/Back.png";
import Clock from "../NotificationDetails/assets/Clock.png";
import Phone from "../NotificationDetails/assets/Vector.png";
import Warning from "../NotificationDetails/assets/Warning.png";
import { style } from "@mui/system";
import { useNavigate } from "react-router-dom";

type Props = {};

const NotificationDetails = (props: Props) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const [btnDisabled, setBtnDisabled] = useState(true);
  const handleChange = (e) => {
    setBtnDisabled(!e.target.value);
  };

  const careList = [
    {
      id: 0,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
    {
      id: 1,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
    {
      id: 2,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
    {
      id: 3,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
    {
      id: 4,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
    {
      id: 5,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
    {
      id: 6,
      time: "13-05-2021,08:48 ",
      care: "I will Take care of him.",
    },
  ];

  return (
    <>
      <Topbar />
      <div className={styles.container}>
        <div className={styles.mainHeader}>
          <img
            src={Back}
            className={styles.imgClass}
            onClick={() => navigate(-1)}
          />
          <h5 className={styles.textHeader}>
            Notifications/Notifications Details
          </h5>
        </div>
        <div>
          <div className={styles.Container_one}>
            <div className={styles.d_flex}>
              <h1 className={styles.type}>Customer Type:</h1>
              <h1 className={styles.name}>Call Center Member</h1>
            </div>
            <TextField
              id="demo-simple-select"
              select
              size="small"
              value={"10"}
              placeholder="Call Center User"
              className={styles.filterSelect}
            >
              <MenuItem value={10}>Call Center User</MenuItem>
              <MenuItem value={20}>Call Center User</MenuItem>
              <MenuItem value={30}>Call Center User</MenuItem>
            </TextField>
          </div>
          <div className={styles.Container_two}>
            <div className={styles.d_flex}>
              <div className={styles.firstBlock}>
                <h5 className={styles.caregiver}>CareGiver Name</h5>
                <h5 className={styles.textName}>Name Surname</h5>
                <h5 className={styles.caregiver}> (13-05-2021, 08:48) </h5>
              </div>
              <Divider
                className={styles.Divider}
                orientation="vertical"
                flexItem
              ></Divider>
            </div>
            <div className={styles.d_flex}>
              <div className={styles.firstBlock}>
                <img src={Clock} className={styles.image} />
                <h5 className={styles.caregiver}>Time Stamp: </h5>
                <h5 className={styles.caregiver}> 13-05-2021, 08:48 </h5>
              </div>
              <Divider
                className={styles.Divider}
                orientation="vertical"
                flexItem
              ></Divider>
            </div>
            <div className={styles.d_flex}>
              <div className={styles.firstBlock}>
                <img src={Phone} className={styles.image} />
                <h5 className={styles.caregiver}>Mobile Number: </h5>
                <h5 className={styles.caregiver}>02-888956</h5>
              </div>
            </div>
          </div>
          <div className={styles.Container_three}>
            <div className={styles.flex}>
              <img src={Warning} className={styles.warningImg} />
              <h5 className={styles.caregiver}>Alert Type: </h5>
              <h5 className={styles.Alert_type}>Red</h5>
            </div>
            <div className={styles.flex}>
              <img src={Warning} className={styles.warningImg} />
              <h5 className={styles.caregiver}>: </h5>
              <h5 className={styles.caregiver}>Open door 30to60s </h5>
            </div>
          </div>
          <div className={styles.Container_four}>
            <h5 className={styles.caregiver}>13-05-2021,08:48 :</h5>
            <h5 className={styles.caregiver}>I will Take care of him. </h5>
          </div>
          <Divider className={styles.dividerH} flexItem></Divider>
          <div className={styles.Container_one}>
            <div className={styles.d_flex}>
              <h5 className={styles.Addcomment}>+</h5>
              <h5 className={styles.Addcomment}>Add Comment</h5>
            </div>
            <button
              disabled={btnDisabled}
              className={`${
                btnDisabled ? styles.buttonDisable : styles.buttonEnable
              }`}
            >
              Add
            </button>
          </div>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="Write your comment here..."
            fullWidth
            onChange={handleChange}
          />
          <div className={styles.Container_List}>
            <List
              dense
              style={{ maxHeight: "208px", overflow: "auto", padding: "0" }}
            >
              {careList.map((item) => (
                <ListItem className={styles.listItem}>
                  <div key={item.id} className={styles.List}>
                    <text className={styles.caregiver}>{item.time}:</text>
                    <text className={styles.caregiver}>{item.care}</text>
                  </div>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationDetails;
