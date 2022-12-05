import { BorderColor } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#F5F9F9",
    minHeight:"100%",
    minWidth:"100%",
    position:"absolute",
    bottom:"auto",
   
  },
  root: {
    padding: "40px 30px 0px 300px",
  },
  
  imgClass: {
    height: 20,
    width: 20,
    cursor: 'pointer',
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
    marginTop: "100px",
  },
  label: {
    fontFamily: "Cairo",
    fontWeight: 400,
    fontSize: "16px",
    color:"#2A3333",
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
    background: "#FFF"
  }
 
}));
