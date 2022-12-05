import React from "react";
import { Link } from "react-router-dom";

import { ThumbUp } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

type Props = {};

const useStyles = makeStyles(() => ({
  heading: {
    fontSize: 16,
    fontWeight: 500,
    textAlign: "center",
    color: "#000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "100%",
    height: 40,
    fontSize: 22,
    marginTop: 11,
  },
  icon: {
    width: 77,
    height: 70,
    color: "#000",
    margin: "53px 0px 60px 0px",
  },
  input: {
    marginTop: 24,
  },
  subHeading: {
    fontSize: 20,
    lineHeight: "23.87px",
    textAlign: "center",
  },
  loginLink: {
    color: "#EDAC15",
  },
}));

const ThankYou = (props: Props) => {
  const styles = useStyles();

  return (
    <Box className={styles.form}>
      <Box mb={2} className={styles.heading}>
        Password Set
      </Box>
      <ThumbUp className={styles.icon} />
      <div className={styles.subHeading}>
        Your Password has been set. Please{" "}
        <Link className={styles.loginLink} to="/login">
          Click Here
        </Link>{" "}
        to log in
      </div>
    </Box>
  );
};

export default ThankYou;
