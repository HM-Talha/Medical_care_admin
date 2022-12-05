import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  mainContainer: {
    background: "#F5F9F9",
  },
  root: {
    padding: "45px 40px",
    marginTop: "40px",
  },
  tableDiv: {
    border: "1px",
  },
  filterBox: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: "20px",
  },
  dateDivRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    // flex:1
  },
  textFieldStyle: {
    width: "200px",
    marginRight: 15,
    "& label": {
      marginBottom: "15px",
    },
    "& .css-jd1zyo-MuiSelect-select-MuiInputBase-input-MuiInput-input.MuiSelect-select":
      {
        background: "white",
        border: "1px solid #D1D1D1",
        borderRadius: "5px",
        height: "30px",
        marginTop: "8px",
        padding: "5px",
      },
    "& .css-175axk8-MuiInputBase-root-MuiInput-root:before, & .css-175axk8-MuiInputBase-root-MuiInput-root:after":
      {
        border: "none",
      },
  },
  filterSelect: {
    width: "200px",
    marginRight: 15,
    marginTop: 10,
    "& label": {
      marginBottom: "15px",
    },
    "& .css-jd1zyo-MuiSelect-select-MuiInputBase-input-MuiInput-input.MuiSelect-select":
      {
        background: "white",
        border: "1px solid #D1D1D1",
        borderRadius: "5px",
        height: "30px",
        marginTop: "8px",
        padding: "5px",
      },
    "& .css-175axk8-MuiInputBase-root-MuiInput-root:before, & .css-175axk8-MuiInputBase-root-MuiInput-root:after":
      {
        border: "none",
      },
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
  modalContainer: {
    padding: "20px",
    background: "#F5F9F9",
  },
  headerModal: {
    color: "#387E8D",
    fontFamily: "Cairo",
    fontWeight: "800",
    fontSize: "24px",
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
  label: {
    fontFamily: "Cairo",
    fontWeight: 400,
    fontSize: "16px",
    color: "#2A3333",
  },
  textEnabled: {
    background: "#FFF",
    marginTop: "6px",
  },
  labelText: {
    color: "#6c7a7a",
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
}));
