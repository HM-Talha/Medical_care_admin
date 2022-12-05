import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  openingHourButtonLabel: {
    whiteSpace: 'nowrap'
  },
  hourRowContainer: {
    width: "100%",
    padding: 8,
    [theme.breakpoints.up(1820)]: {
      width: "50%"
    }
  }
}))