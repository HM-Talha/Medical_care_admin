import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirection } from 'styles/theme/slice';

import { MenuItem } from '@mui/material';
import MuiTextField from '@mui/material/TextField';
import { useStyles } from './styles';

export const Select = ({
  width = 0,
  className = '',
  SelectProps = {},
  menuItems,
  noDefaults = false,
  placeholder = 'Select',
  labelClass = '',
  ...props
}) => {
  const direction = useSelector(selectDirection);
  const classes = useStyles({ width });

  return (
    <MuiTextField
      {...props}
      className={clsx(['SelectInput', classes.SelectInput, className])}
      select
      InputLabelProps={{
        shrink: props.value ? true : false,
        className: labelClass ? labelClass : classes.labelClass,
      }}
      label={placeholder}
      placeholder={placeholder}
      SelectProps={{
        ...SelectProps,
        style: {
          maxHeight: 200,
        },
        MenuProps: {
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
          transformOrigin: {
            horizontal: 'left',
            vertical: 'top',
          },
          PaperProps: {
            style: {
              maxHeight: 200,
            },
          },
        },
      }}
    >
      {!noDefaults && <MenuItem value={''}>‎</MenuItem>}
      {menuItems}
    </MuiTextField>
  );
};
