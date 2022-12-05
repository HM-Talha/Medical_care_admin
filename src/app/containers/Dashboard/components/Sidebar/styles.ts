import {
  DASHBOARD_MENU_CLOSE_WIDTH,
  DASHBOARD_MENU_WIDTH,
} from 'utils/constants';

import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: '#FFF8ED',
    // background: "#aba",
    position: 'fixed',
    top: 0,
    left: 0,
    minHeight: '100vh',
    zIndex: 10,
    transition: '.3s',
    padding: '10px',
  },
  logo: {
    margin: '0 auto',
  },
  drawerButton: {
    position: 'absolute',
    top: 40,
    right: -45,
    zIndex: 11,
    background: '#3C4858',
    border: '1px solid #3C4858',
    borderRadius: '0px 5px 5px 0px',
    color: '#FFF',
    width: 45,
    height: 45,
    '&:hover': {
      color: '#000',
    },
  },
  menuOpen: {
    maxWidth: DASHBOARD_MENU_WIDTH,
    width: DASHBOARD_MENU_WIDTH,
    transition: '.3s',
    flexDirection: 'column',
    display: 'flex',
  },
  menuClose: {
    width: DASHBOARD_MENU_CLOSE_WIDTH,
    maxWidth: DASHBOARD_MENU_CLOSE_WIDTH,
    transition: '.3s',
  },
  abovelinksWrap: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  menuWrapper: {
    overflowY: 'auto',
    maxHeight: '85vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
    '&::-webkit-scrollbar': {
      width: 2,
      height: 2,
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
      borderRadius: '0',
    },

    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: 'transparent',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      background: 'transparent',
    },
  },
  copyRightText: {
    color: '#9CB0BA',
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 120,
  },
  copyRightContainer: {
    position: 'absolute',
    bottom: 0,
    background: '#FFF8ED',
  },

  copyText: {
    fontSize: '12px',
    lineHeight: '20px',
    color: "#9CB0BA",
  },
}));
