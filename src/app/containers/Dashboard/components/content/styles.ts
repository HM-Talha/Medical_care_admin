import {
  DASHBOARD_MENU_WIDTH,
  DASHBOARD_TOP_BAR_HEIGHT,
} from "utils/constants";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    // paddingTop: DASHBOARD_TOP_BAR_HEIGHT,
    width: '100% !important',
    height: 'inherit !important',
    objectFit:'cover',
    backgroundColor: "#F5F5F5"
  },
  menuClose: {
    transition: ".3s",
    width: "100%",
  },
  image: {
    width: "inherit",
    height: "100vh",
  }
}));
