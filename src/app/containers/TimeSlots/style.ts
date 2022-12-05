import { BorderColor } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#F5F9F9",
    minHeight: "100%",
    minWidth: "100%",
    position: "absolute",
    bottom: "auto",
  },

  bodyContainer: {
    padding: "0px 30px 0px 300px",
    minHeight: "100%",
  },

  imgClass: {
    height: 20,
    width: 20,
    cursor: "pointer",
  },
  textHeader: {
    color: "#2A3333",
    marginLeft: "14px",
    fontWeight: "600px",
    fontSize: "16px",
    lineHeight: "29.98px",
    fontStyle: "Semibold",
  },
  textHeaderT: {
    color: "#387E8D",
    fontWeight: "600px",
    fontSize: "16px",
    lineHeight: "29.98px",
  },
  mainHeader: {
    display: "flex",
    alignItems: "center",
    paddingTop:"100px"
     },
  label: {
    fontFamily: "Cairo",
    fontWeight: 400,
    fontSize: "16px",
    color: "#2A3333",
  },
  saveBtn: {
    background: "#C66078",
    color: "#ffff",
    "&:hover": {
      background: "#C66078",
    },

    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "160px",
    height: "50px",
  },
  commentSaveBtn: {
    background: "#C66078",
    color: "#ffff",

    "&:hover": {
      background: "#C66078",
    },

    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "120px",
    height: "56px",
  },
  cancelBtn: {
    color: "#C66078",
    borderColor: "#C66078",
    "&:hover": {
      borderColor: "#C66078",
    },
    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "160px",
    height: "50px",
  },
  tabLabel: {
    color: "#C66078",
    fontWeight: "bold",
  },
  textEnabled: {
    background: "#FFF",
    width: "100%"
  },
  chipBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    border: "1px solid #C6C9CA",
    height: "40px",
    padding: "10px",
    background: "#FFF",
  },
  chipLabel: {
    fontFamily: "Cairo",
    fontWeight: "600px",
    fontSize: "16px",
    color: "#387E8D",
    marginTop: "13px",
  },
  numLabel: {
    fontFamily: "Cairo",
    fontWeight: "400px",
    fontSize: "16px",
    marginLeft: "16px",
    color: "#6C7A7A",
    marginTop: "13px",
  },

  SelectEnabled:{
    background: "#FFF",
    marginTop: "8px",
    marginBottom: "4px",
    width: "117%"
  },
  SelectEnabledDrop:{
    background: "#FFF",
    marginTop: "8px",
    marginBottom: "4px",
    width: "100%"
  }
}));
