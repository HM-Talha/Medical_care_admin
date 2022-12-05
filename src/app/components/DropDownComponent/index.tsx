import React from 'react';

import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';

type Props = {
  value: any;
  handleChange: any;
  title?: string;
  size?: 'small' | 'medium' | undefined;
  fullWidth?: boolean;
  lableColor?: string;
  lable?: string;
  width?: string;
  menuItems?: any;
  name?: string;
  placeholder?: string;
  error?: string;
  labelFontWeight?: number;
  defaultValue?: string
};

const DropDownComponent = ({
  value,
  handleChange,
  title,
  size,
  fullWidth,
  lableColor,
  lable,
  width,
  menuItems,
  name,
  placeholder,
  error,
  labelFontWeight = 500,
  defaultValue,
}: Props) => {
  return (
    <>
      {lable && (
        <Typography sx={{ mt: '10px', mb: '8px', fontWeight: labelFontWeight }}>
          {lable}
        </Typography>
      )}
      <FormControl

        size={size ?? 'small'}
        sx={{ width: width ?? '15%', backgroundColor: '#F7F7FA' }}
      >
        <InputLabel
          shrink
          sx={{
            color: lableColor ?? '#333333',
            borderColor: '#D5D8DE',
          }}
          id={`select-label${name}`}
        >
          {title}
        </InputLabel>
        <Select
          notched
          displayEmpty
          defaultValue={defaultValue}
          name={name}
          labelId={`select-label${name}`}
          id={`select${name}`}
          value={value || ''}
          label={title}
          onChange={handleChange}
          error={!!error}
          placeholder={placeholder}
        >
          {menuItems?.length < 0 && (
            <>
              <MenuItem value={''}>All</MenuItem>
              <MenuItem value={'TRUE'}>Active</MenuItem>
              <MenuItem value={'FALSE'}>In-Active</MenuItem>
            </>
          )}
          {menuItems}
        </Select>
        <FormHelperText error>{error}</FormHelperText>
      </FormControl>
    </>
  );
};

export default DropDownComponent;
