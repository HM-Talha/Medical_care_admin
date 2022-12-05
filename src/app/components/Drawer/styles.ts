import { makeStyles } from "@mui/styles";

export const Styles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  container: {
    minHeight: "150px",
    borderRadius: "7px 7px 0px 0px",
    // paddingRight: 5,
    border: "none",
    overflow: "auto",
    fontFamily: "Cairo",
    "&::-webkit-scrollbar": {
      width: 13,
      height: 8,
      padding: "5px 0px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#3C4858",
      boxShadow: "inset 4px 4px 3px rgba(0, 0, 0, 0.15)",
      borderRadius: "10px",
    },

    /* Handle */
    "&::-webkit-scrollbar-thumb": {
      background: "#222",
      borderRadius: 20,
      border: "3px solid #3C4858",
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
      boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.15)",
    },

    /* Handle on hover */
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#222",
    },
  },
  drawerListItems: {
    backgroundColor: "#EBF2F4",
    borderRight: "4px solid #387E8D",
    lineHeight: "140%",
  },
  drawerListItemText: {
    fontStyle: "normal",
    fontWeight: "700 !important",
  },
  logoImage: {
    padding: "12px 65px 0px 65px",
  },
});
