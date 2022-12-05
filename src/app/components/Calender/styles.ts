import { BorderBottom, BorderColor } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  calenderMain: {
    paddingTop: "10px",
  },
  dayHeader: {
    background: "#F5F9F9",
    color: "#387E8D",
    fontFamily: "Cairo",
    fontSize: "14px",
  },
  view: {
    background: "#FFFFF",
    fontFamily: "Cairo",
  },

  dayCell: {
    height: "100px",
    background: "#FFFFFF",
  },
 
  calenderPicker: {},
  
  addModal: {
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "730px",
    height: "463px",
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
  bodyContainer: {
    padding: "30px 0px",
  },
  labelHead: {
    fontFamily: "Cairo",
    fontWeight: 700,
    fontSize: "16px",
    color: "#2A3333",
    paddingBottom: "5px",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
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
  headerContainer:{
    background:"#E7F4F4",
    padding:"5px 0px",
    border:"1px solid #e0e0e0",
    borderBottom:"0px"
  },
  headerText:{
    fontFamily:"Cairo",
    fontWeight:"700px",
    fontSize:"18px",
    color:"#2A3333"
  },
  headerItem:{
    display:"flex",
    justifyContent:"space-between"
  },
  slotLabel:{
    color:"#387E8D",
  },
  // event:{
  //   background:"red",
  //   color:"red"
  // }
  
}));
