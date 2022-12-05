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
  bodyContainer:{
    padding: "40px 30px 0px 300px",
    marginTop: "40px",
    minHeight:"100%",
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

  gridBtn: {
    background: "transparent",
    color: "#ffff",
    "&:hover": {
      background: "transparent",
    },

    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    width: "162px",
    height: "56px",
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
  downloadLabel: {
    fontFamily: "Cairo",
    fontWeight: "400px",
    marginTop: "13px",
    fontSize: "16px",
    marginLeft: "16px",
    color: "#6C7A7A",
  },
  messageImportLabel:{
    fontFamily: "Cairo",
    fontWeight: "400px",
    marginTop: "13px",
    fontSize: "16px",
    marginLeft: "16px",
    color: "#FFFFFF",
  },

  downloadBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    border: "1px solid #6C7A7A",
    height: "56px",
    width: "100%",
  },
  messageImportBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    background:"#C66078",
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
    width: "92.5%",
    marginTop:"7px"
  },
  tableDiv: {
    border: "1px",
  },
  deleteModal:{
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "410px",
    height:"230px"
  },
  importModal:{
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "770px",
    height:"365px"
  },
  messageModal:{
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "648px",
    height:"416px"
  },

  modalContainer: {
    padding: "20px 40px 40px 40px",
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
 
  uploadBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    borderStyle: "dashed",
    borderWidth: "1px",
    border: "1px solid #6C7A7A",
    height: "56px",
    width: "230px",
    background: "#FFF",
    marginBottom:"5px"
  },
  uploadLabel: {
    fontFamily: "Cairo",
    fontWeight: "400px",
    marginTop: "13px",
    fontSize: "14px",
    marginLeft: "16px",
    color: "#6C7A7A",

  },
  selectArrow:{
    marginRight:"10px"
  },
  

}));
