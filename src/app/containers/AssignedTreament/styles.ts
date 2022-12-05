import { BorderColor, Height, Margin, Repeat } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";

export const useStyles = makeStyles(() => ({
  parent: {
    backgroundColor: "#F5F9F9",
  },
  right: {
    width: "81.9%",
    marginLeft: "18%",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
  },
  inpBox: {
    position: "relative",
    width: "80%",
  },
  inp: {
    width: "40%",
    padding: "14px",
    background: "transparent",
    border: "1px solid #E3E7E7",
    borderRadius: "5px",
  },
  searchIcon: {
    position: "absolute",
    left: "35%",
    top: "8px",
    width: "20px",
  },
  organization: {
    color: "#4D4D5As",
    display: "inline-block",
    margin: "0 10px",
  },
  label: {
    fontFamily: "Cairo",
    fontWeight: 400,
    fontSize: "16px",
    color: "#2A3333",
  },
  modal_dropDown: {
    margin: "0 15px",
    width: "20%",
  },
  modal_dropDown1: {
    margin: "10px 35px",
    width: "20%",
  },
  textEnabled: {
    background: "#FFF",
    width: "100%",
  },
  total_item_parent: {
    border: "1px solid lightgrey",
    marginRight: "20px",
    padding: "8px 10px",
    display: "flex",
    justifyContent: "space-between",
    // width: "100%",
    background: "#fff",
  },
  blue_text: {
    color: "#387E8D",
    fontWeight: "bold",
  },
  tableParent: {
    padding: "15px",
  },
  table: {
    border: "1px solid lightgrey",
    width: "100%",
    borderRadius: "8px",
    overflowX: "auto",
  },
  tdHeader: {
    // border: "1px solid red",
    // textAlignF: "center",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "12px",
  },
  actionTD: {
    padding: "15px",
  },
  dateTd: {
    padding: "25px 18px",
    fontSize: "0.9rem",
    fontWeight: "bold",
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
  messageModal: {
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
    width: "60%",
    height: "416px",
    backgroundColor: "#F5F9F9",
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
  treatment_heading: {
    textAlign: "center",
    color: "#508D9B",
  },
  modal_table: {
    width: "100%",
    border: "1px solid lightgrey",
  },
  modal_table_header: {
    padding: "0 10px",
  },
  modal_table_category: {
    padding: "5px 10px",
    backgroundColor: "#FFFFFF",
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
    padding: "10px 35px",
    border: "none",
    color: "#fff",
    marginBottom: "10px",
    borderRadius: "3px",
    width: "150px",
  },
}));
