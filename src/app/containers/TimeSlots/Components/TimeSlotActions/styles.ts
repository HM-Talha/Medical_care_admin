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
  bodyContainer:{
    padding: "0px 30px 0px 300px",
    minHeight: "100%",
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
  addModal: {
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "700px",

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
  uploadLabel: {
    fontFamily: "Cairo",
    fontWeight: "400px",
    marginTop: "13px",
    fontSize: "14px",
    marginLeft: "16px",
    color: "#6C7A7A",
  },

  uploadBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    borderStyle: "dashed",
    borderWidth: "1px",
    borderColor: "#6C7A7A",
    height: "56px",
    width: "100%",
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
    marginTop:"5px"
  },
  chipLabel: {
    fontFamily: "Cairo",
    fontWeight: "600px",
    fontSize: "16px",
    color: "#387E8D",
    marginTop: "15px",
  },
  numLabel: {
    fontFamily: "Cairo",
    fontWeight: "400px",
    fontSize: "14px",
    marginLeft: "16px",
    color: "#6C7A7A",
    marginTop: "16px",
  },
  dotBox: {
    display: "flex",
    alignItems: "flex-end",
  },
  textEnabled: {
    background: "#FFF",
    width: "100%"
  },
  searchIcon: {
    height: "24px",
    width: "24px",
  },
  search: {
    // marginRight: 26,
    "& .MuiOutlinedInput-root": {
      borderRadius: 3,
      margin: 0,
      background: "#F5F9F9",
      width: "35vw",
    },
  },
  textEnabledSelect: {
    background: "#FFF",
    width: "100%",
    marginTop:"8px"
    
  },
  checkLabel:{
    fontStyle:"Cairo",
    fontWeight:"600px",
    fintSize:"16px",
    marginTop:"14px"
  },
  deleteModal:{
    position: "absolute",
    background: "#F5F9F9",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "410px",
    height:"230px"
  },

  modalContainer: {
    padding: "20px",
  },
  headerModal: {
    color: "#387E8D",
    fontFamily: "Cairo",
    fontWeight: "800",
    fontSize: "24px",
  },
  deleteTypo:{
    color: "#2A3333",
    fontFamily: "Cairo",
    fontWeight: "400",
    fontSize: "16px",
  },
  btnContainer: {
    display: "flex",
    alignItems: "flex-end",
  },
}));
