import { Logo } from "app/components/Logo";
import clsx from "clsx";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Fade, Typography } from "@mui/material";

import { selectMenuOpen } from "../../selector";
import { actions } from "../../slice";
import DashboardLink from "../DashboardLink";
import { useStyles } from "./styles";
import SettingsIcon from "@mui/icons-material/Settings";
import Icon from "app/components/Icons";

type Props = {};

const links = [
  {
    name: "Users",
    displayName: "Users List",
    path: "/dashboard/user-management",
    icon: <Icon name="users.svg" />,
  },
  {
    name: "Merchants",
    displayName: "Merchants",
    path: "/dashboard/merchants",
    icon: <Icon name="bell-reset.svg" />,
  },
  {
    name: "Products",
    displayName: "Product catalog",
    path: "/dashboard/products",
    icon: <Icon name="products.svg" />,
  },
  {
    name: "TV Post",
    displayName: "My TV Posts",
    path: "/dashboard/tv-post",
    icon: <Icon name="bell-reset.svg" />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings/channels",
    icon: <SettingsIcon />,
    isToggleable: true,
    names: [
      {
        name: "Channels",
        displayName: "Channels",
        path: "/dashboard/settings/channels",
      },
      {
        name: "Heros",
        displayName: "Heros",
        path: "/dashboard/settings/heros",
      },
      {
        name: "Tags",
        displayName: "Tags",
        path: "/dashboard/settings/tags",
      },
    ],
  },
];

// const IconOnlyLinks = () => <Box>
//   {
//     links.map(link => <IconOnlyLink key={link.name} {...link} />)
//   }
// </Box>

const Links = () => (
  <Box>
    {links.map((link) => (
      <DashboardLink key={link.name} {...link} />
    ))}
  </Box>
);

const bottomLink = [
  {
    name: "Feed Configuration",
    displayName: "Feed configuration",
    path: "/dashboard/feed-config",
    icon: <Icon name="terms-privacy.svg" />,
    isDifferent: true,
  },
  {
    name: "Terms of service",
    displayName: "Terms of service",
    path: "/terms-of-use",
    icon: <Icon name="terms-privacy.svg" />,
    isDifferent: true,
    target: "_blank",
  },
  {
    name: "Privacy Policy",
    displayName: "Privacy Policy",
    path: "/privacy-policy",
    icon: <Icon name="terms-privacy.svg" />,
    isDifferent: true,
    target: "_blank",
  },
];

const BottomLink = () => (
  <Box>
    {bottomLink.map((x) => (
      <DashboardLink key={x.name} {...x} />
    ))}
  </Box>
);

const Sidebar = (props: Props) => {
  const dispatch = useDispatch();

  const isMenuOpen = useSelector(selectMenuOpen);

  const handleToggle = () => {
    dispatch(actions.toggleMenu());
  };

  const styles = useStyles();
  return (
    <Box
      className={clsx({
        [styles.root]: true,
        [styles.menuOpen]: isMenuOpen,
        [styles.menuClose]: !isMenuOpen,
      })}
    >
      <Box display={"flex"} mb={5}>
        <Logo style={{ width: 60, height: 60 }} />
      </Box>
      <Box className={styles.menuWrapper}>
        <Fade in={isMenuOpen} timeout={{ enter: 300, exit: 200 }}>
          <span className={styles.abovelinksWrap}>
            {isMenuOpen && <Links />}
          </span>
        </Fade>
        <Box className={styles.copyRightText}>
          <BottomLink />
        </Box>
        <Box className={styles.copyRightContainer}>
          <Box sx={{ px: 4, py: 3.5 }}>
            <Typography className={styles.copyText}>
              Copyright © 2022 Shopi®.
            </Typography>
            <Typography className={styles.copyText}>
              {" "}
              All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
