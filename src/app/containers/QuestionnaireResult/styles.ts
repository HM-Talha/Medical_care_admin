import { BorderColor } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  bg_color: {
    background: "#F5F9F9",
  },
  right: {
    marginLeft: "280px",
    marginTop: "70px",
    padding: "15px",
  },

  tdHeader: {
    padding: "20px",
    fontFamily: "Cairo",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "14px",
    lineHeight: "2",
    color: "#2A3333",
  },
  actionTD: {
    padding: "15px",
  },
  dateTd: {
    padding: "15px 18px",
    fontFamily: "Cairo",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "24px",
    color: "#2A3333",
  },
  trHead: {
    backgroundColor: "#F5F9F9",
  },
  tr: {
    // border: "1px solid red",
    "&:nth-child(odd)": {
      backgroundColor: "#fff",
    },
  },
  table: {
    marginTop: "20px",
    width: "1173px",
    border: "1px solid lightgrey",
    borderRadius: "5px",
    overflowX: "auto",
  },
}));
