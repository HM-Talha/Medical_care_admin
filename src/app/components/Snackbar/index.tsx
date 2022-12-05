import React from 'react';
import {
  Alert,
  AlertColor,
  Box,
  IconButton,
  Snackbar,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from 'app/containers/Dashboard/slice';
import { selectSnacbar } from 'app/containers/Dashboard/selector';
import { Close, Info, Verified, WarningAmber, Error } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';
export interface SnackbarProps {
  message: string;
  open: boolean;
  variant?: AlertColor;
  translate?: boolean;
}

export type SnackbarProp = SnackbarProps;
const useStyles = makeStyles(() => ({
  root: {
    top: 140,
  },
}));

export default function MuiSnackBar(props) {
  const { open, message, variant, translate } = useSelector(selectSnacbar);
  const dispatch = useDispatch();
  const styles = useStyles();
  const { t } = useTranslation();

  const handleClose = (e, reason?: string) => {
    dispatch(actions.closeSnackbar());
  };

  const displayText = translate ? t(message) : message;

  return (
    <Snackbar
      classes={{ root: styles.root }}
      autoHideDuration={6000}
      open={open}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert severity={variant}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          minWidth={240}
          maxWidth={600}
        >
          {/* {variant === 'success' && <Verified />}
          {variant === 'error' && <Error />}
          {variant === 'info' && <Info />}
          {variant === 'warning' && <WarningAmber />} */}
          <Typography>{displayText}</Typography>
          <IconButton size="small" onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>
      </Alert>
    </Snackbar>
  );
}
