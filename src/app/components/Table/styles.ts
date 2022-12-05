import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "8px",
  },
  container: {
    minHeight: "150px",
    // paddingRight: 5,
    border: "none",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 13,
      height: 8,
      padding: "5px 0px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#F4F4F4",
      boxShadow: "inset 4px 4px 3px rgba(0, 0, 0, 0.15)",
      borderRadius: "10px",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#387E8D",
      borderRadius: 20,
      border: "3px solid #387E8D",
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#387E8D",
    },
  },
  tableSort: {
    color: "#2A3333 !important",
    "& svg": {
      color: "#2A3333 !important",
    },
  },
  cellHead: {
    // minWidth: 170,
     position: "sticky",
    padding: "14px 14px 17px 16px",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "16.71px",
    // textAlign: "unset",
    color: "#2A3333",
    whiteSpace: "nowrap",
    height: 56,
    fontFamily: "Cairo",
    background: "#F5F9F9",
    "&:last-child": {},
    "&:first-child": {},
    "&:first-of-type": {
      borderLeft: "transparent",
    },
    "&.makeStyles-cellHead-33": {
      backgroundColor: "transparent",
      color: "#BDBDBD",
    },
  },
  cellHeadWithoutWidth: {
    position: "sticky",
    padding: "14px 14px 17px 16px",
    fontSize: 14,
    fontWeight: 700,
    lineHeight: "16.71px",
    textAlign: "unset",
    color: "#2A3333",
    whiteSpace: "nowrap",
    height: 56,
    fontFamily:"Cairo",
    background:"#F5F9F9",
    "&:last-child": {},
    "&:first-child": {},
    "&:first-of-type": {
      borderLeft: "transparent",
    },
    "&.makeStyles-cellHead-33": {
      backgroundColor: "transparent",
      color: "#BDBDBD",
    },
  },
  tableBody: {
    backgroundColor: "transparent",
    "& .MuiTableRow-root:nth-of-type(even)": {
      backgroundColor: "#F5F9F9",
    },
    border: "none",
    "& .MuiTableCell-root": {
      border: "none",
      backgroundColor: "transparent",
    },
  },
  table: {
    border: "1px solid #C6C9CA",
  },
  headerCheckbox: {
    padding: 0,
    width: 18,
    height: 18,
    marginRight: 6,
  },
  customCheckbox: {
    padding: 0,
    width: 18,
    height: 18,
  },
  iconButton: {
    padding: "0px",
    marginLeft:"5px",
    marginRight:"5px",    
  },
  overrideIconButton:{
    position:'relative',
    right:-20
  },
  downloadBtn: {
    cursor: "pointer"
  }
});
