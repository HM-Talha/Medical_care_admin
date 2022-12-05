import clsx from 'clsx';
import React from 'react';

import MuiTextField from '@mui/material/TextField';

import { useStyles } from './styles';

export const TextField = ({ width = 0 || "", className = '', ...props }) => {
  const classes = useStyles({ width, });
  return (
    <MuiTextField
      variant="outlined"
      margin="normal"
      className={clsx(['TextInput', classes.TextInput, className])}
      {...props}
    />
  );
};

