import React from "react";

import { Box } from "@mui/material";

import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { selectMenuOpen } from "../../selector";
import clsx from "clsx";
import underConstructionImage from '../../../../assets/underConstructionImage.png';

const Content = ({ children }) => {
  const styles = useStyles();
  return <Box className={clsx(styles.root, styles.menuClose)}>
    {children}
  </Box>;
};

export default Content;
