import clsx from "clsx";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DASHBOARD_MENU_WIDTH } from "utils/constants";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Avatar,
  Modal,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";

import { themeActions } from "../../../../../styles/theme/slice";
import { selectSearch } from "../../selector";

import DashboardLink from "../DashboardLink";
import SearchIcon from "../topbar/assets/IconSearch.png";
import LogoutIcon from "../topbar/assets/Logout.png";
import { Logo } from "app/components/LogoWithName";
import { actions } from "../../slice";

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    top: 0,
    height: 80,
    zIndex: 9,
    background: "#F5F9F9",
    transition: `.3s`,
  },
  wrapper: {
    padding: "0px 30px 0px 300px",
    height: "100%",
  },
  hr: {
    margin: 0,
    // marginTop: 21,
    // borderBottom: "1px solid #CBCBCB"
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
  Typo: {
    marginLeft: "15px",
    fontFamily: "Cairo",
  },
  menuOpen: {
    width: `calc(100% - ${DASHBOARD_MENU_WIDTH}px)`,
    transition: `.3s`,
  },
  menuClose: {
    width: `100%`,
    transition: `.3s`,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // borderBottom: '1px solid #CBCBCB',
    height: "100%",
  },

  leftBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
  rightBox: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginRight: "15px",
  },
  dynamicHeader: {
    color: "#FAA61A",
    fontWeight: "700",
    fontSize: "26px",
    flex: 1,
  },
  searchIcon: {
    height: "24px",
    width: "24px",
  },
  adminName: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  notificationCircle: {
    backgroundColor: "#333333",
    padding: "7px",
    position: "absolute",
    borderRadius: "100%",
    right: "5px",
    top: "5px",
  },
  imgLogout: {
    height: "23px",
    width: "20px",
  },

  logoutModal: {
    position: "absolute",
    background: "#FFFFFF",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "560px",
    height: "182px",
    border: "0px",
    boxShadow: "0",
    zIndex: "9999",
  },
  CardActions: {
    justifyContent: "flex-end",
    marginTop: "30px",
    marginRight: "28px",
  },
  cardContent: {
    marginLeft: "17px",
    marginTop: "12px",
  },

  bodyTypography: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    color: "rgba(0, 0, 0, 0.6)",
  },
  headTypography: {
    color: "#000000",
    fontWeight: "550",
    fontSize: "21.5px",
    lineHeight: "24px",
    letterSpacing: "0.15px",
  },
  btnNo: {
    color: "#88929C",
    paddingRight: "38px",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.0125rem",
  },
  btnLogout: {
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.0125rem",
  },
}));

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const styles = useStyles();
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const search = useSelector(selectSearch);
  const user = localStorage.getItem("loginResponse")
    ? JSON.parse(localStorage.getItem("loginResponse") || "")
    : "";

  const language = t(
    i18n.language === "en" ? "dashboard.hebrew" : "dashboard.english"
  );

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleModal = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };
  const handleLogout = () => {
    // localStorage.removeItem("email");
    // localStorage.removeItem("sessionToken");
    // localStorage.removeItem("loginResponse");
    navigate("/login", { replace: true });
  };

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("hw");
      dispatch(themeActions.toggleDirection());
    } else {
      i18n.changeLanguage("en");
      dispatch(themeActions.toggleDirection());
    }
    handleClose();
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;
    dispatch(actions.setSearch(value));
  };

  const open = Boolean(anchorEl);
  const id = open ? "user-popover" : undefined;

  return (
    <>
      <Box className={clsx(styles.root, styles.menuClose)}>
        <Box className={styles.wrapper}>
          <Box className={styles.container}>
            <Box className={styles.leftBox}>
              <TextField
                className={styles.search}
                placeholder={`Search`}
                size="small"
                value={search}
                onChange={handleSearchChange}
                InputProps={{
                  endAdornment: (
                    <img
                      src={SearchIcon}
                      alt="search icon"
                      className={styles.searchIcon}
                    />
                  ),
                }}
              />
            </Box>
            <Box
              display="flex"
              alignItems="center"
              onClick={handleModal}
              sx={{ cursor: "pointer" }}
            >
              {/* <Box className={styles.rightBox}> */}
              <Avatar style={{ width: "36px", height: "36px" }}>
                M
                {/* <img className={styles.imgLogout} src={LogoutIcon}></img> */}
              </Avatar>
              <Typography className={styles.Typo}>Organization</Typography>
              {/* </Box> */}
            </Box>
          </Box>

          {/* <hr className={styles.hr} /> */}
        </Box>
        {/* <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      > */}
        {/* <MenuItem sx={{ p: 1.5 }} onClick={changeLanguage}>{t('dashboard.convert_to')} {language}</MenuItem> */}
        {/* <MenuItem sx={{ p: 1.5 }} onClick={handleLogout}>
          Logout
        </MenuItem>
      </Popover> */}
      </Box>
      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card className={styles.logoutModal}>
          <CardContent className={styles.cardContent}>
            <Typography
              className={styles.headTypography}
              gutterBottom
              variant="h6"
              component="div"
            >
              log out
            </Typography>
            <Typography className={styles.bodyTypography} variant="body2">
              Are you sure you want to log out?
            </Typography>
          </CardContent>
          <CardActions className={styles.CardActions}>
            <Button
              className={styles.btnNo}
              size="medium"
              onClick={handleModalClose}
            >
              NO
            </Button>
            <Button
              className={styles.btnLogout}
              size="medium"
              onClick={handleLogout}
            >
              LOG OUT
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default Topbar;
