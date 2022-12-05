import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useDispatch } from "react-redux";
import { actions } from "../../slice";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  name: string;
  path: string;
  target?: string;

  isDifferent?: boolean;
  end?: boolean;
  names?: object[];
  displayName?: string;
  disabled?: boolean;
};

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 4,
    textDecoration: "none",
    color: "#3C4858",
    display: "flex",
    height: 40,
    alignItems: "center",
  },
  active: {
    borderRadius: "8px",
    boxShadow: "0px 4px 4px rgba(239, 99, 40, 0.35)",
    background: "#FAA61A",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,

    color: "#FFF!important",
    "& *": {
      color: "#FFF!important",
    },
    "& img": {
      filter: "brightness(0) invert(1)",
    },
  },
  icon: {
    color: "#3C4858",
    marginRight: 18,
    background: "transparent",
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: "20px 20px",
    width: "100%",
    // backgroundColor: "#333",
  },
  isDifferent: {
    paddingLeft: 17,
  },
  isSettingDropDown: {
    height: "40px",
    marginLeft: "30px",
  },
  diffIcon: {
    // marginRight: 18,
  },
  link: {
    background: "transparent",
  },
}));

const DashboardLink = ({
  name,
  path,
  target,
  isDifferent,
  end,
  names,
  displayName,
  disabled,
}: Props) => {
  const dispatch = useDispatch();
  const isSettings = name === "Settings";
  const AccordinComponent = ({ names }) => {
    return (
      <Accordion elevation={0} sx={{ backgroundColor: "#FFF8ED", border: 0 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#FFF8ED",
            // paddingLeft:4
          }}
          style={{ justifyContent: "space-between" }}
        >
          <Typography sx={{ mr: 6 }}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {names.map((x) => (
            <NavLink
              target={x.target}
              end={end}
              to={x.path}
              key={x.path}
              className={(prop) => {
                if (prop?.isActive) {
                  dispatch(actions.setRoute(x?.name));
                }
                return clsx({
                  [styles.root]: true,
                  [styles.active]: prop.isActive,
                });
              }}
            >
              <MenuItem
                className={clsx({
                  [styles.wrapper]: true,
                  [styles.isDifferent]: isDifferent,
                  [styles.isSettingDropDown]: isSettings,
                })}
              >
                <Typography>{t(`${x?.name}`)}</Typography>
              </MenuItem>
            </NavLink>
          ))}
        </AccordionDetails>
      </Accordion>
    );
  };

  const { t } = useTranslation();
  const styles = useStyles();
  const navigate = useNavigate();
  const [className, setClassName] = useState("");

  const handleMenuItem = () => {
    navigate(`${path}`);
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/user-management") {
      setClassName("Seniors Management");
    } else if (
      path === "/caregivers-management" ||
      path === "/caregivers-management/caregivers-details"
    ) {
      setClassName("CareGivers Management");
    } else if (
      path === "/notifications" ||
      path === "/notifications/notification-details"
    ) {
      setClassName("Notification");
    }
  }, []);

  return (
    <>
      <div
        className={
          name === className
            ? clsx({ [styles.active]: true })
            : clsx({ [styles.root]: true })
        }
      >
        <MenuItem
          disabled={disabled}
          onClick={handleMenuItem}
          className={clsx({
            [styles.wrapper]: true,
            [styles.isDifferent]: isDifferent,
          })}
        >
          <Typography>{t(`${name}`)}</Typography>
        </MenuItem>
      </div>
    </>
  );
};

export default DashboardLink;
