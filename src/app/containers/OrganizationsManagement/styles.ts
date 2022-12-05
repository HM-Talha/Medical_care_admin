import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer:{
   background:"#F5F9F9",
   minHeight:"100%",
   minWidth:"100%",
   position:"absolute",
   bottom:"auto",
  },
  root: {
    padding: "40px 30px 0px 300px",
    marginTop: "70px",
  },
  tableDiv: {
    border: "1px",
  },
  filterBox: {
    display: "flex",
    justifyContent: "space-between",
    width: 500,
    gap: 20,
  },
  filterSelect: {
    width: 300,
  },

  clearFilter: {
    color: "#EDAC15",
    fontSize: 14,
    fontWeight: 400,
    cursor: "pointer",
  },
  dateDiv: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
  },
  dateDivRoot: {
    marginTop: 50,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  page: {
    position: "relative",
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 24,
  },
  ml25: {
    marginLeft: "25px !important",
  },
  search: {
    background: "#F5F5F5",
    border: "none",
    borderRadius: 7,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  },
  dataTableDiv: {
    maxHeight: "calc(100vh - 210px)",
    overflowY: "auto",
    marginTop: "20px",
    background: "#FFF",
    "&::-webkit-scrollbar": {
      width: 4,
      height: 5,
      padding: "5px 0px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#D9D9D9",
      // marginTop:500,
      // boxShadow: 'inset 4px 4px 3px rgba(0, 0, 0, 0.15)',
      borderRadius: "10px",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#959595",
      borderRadius: 20,
      // border: '1px solid #3C4858',
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      //  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#959595",
    },
  },
  addBtn: {
    fontSize: 14,
    color: "#333333",
    border: "1px solid #D5D8DE",
    fontFamily: "Cairo",
    fontWeight: "400",
  },
  btnDiv: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  datePicker1: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    right: "200px",
  },
  datePicker: {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
  },
  dateButton: {
    color: "#333333",
    border: "1px solid #D5D8DE",
    backgroundColor: "#F7F7FA",
    minWidth: "180px",
    fontSize: "14px",
    minHeight: "45px",
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
  label:{
    fontFamily:"Cairo",
    fontWeight:400,
    fontSize:"16px",
    color:"#2A3333",
  },
  Textfield:{
    width:"220px",
    maginTop:"10px"
    
  }
}));
