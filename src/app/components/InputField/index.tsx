import React from 'react';

import { TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';

type Props = {
  onChange: any;
  isEdit?: boolean | undefined;
  defaultValue?: string | null;
  label: string;
  placeholder?: string;
  fullWidth: boolean;
  size?: 'small' | 'medium' | undefined;
  lightPlaceholder?: boolean;
  isDisable?: boolean;
  mt?: string;
  mb?: string;
  minWidth?: string;
  backgroundColor?: string;
  value?: any;
  name?: any;
  editable?: any;
  inputProps?: any;
  onBlur?: any;
  error?: any;
  mainStyle?: any;
  type?: string;
  sx?: any;
  multiline?: boolean;
  rows?: number;
  labelFontWeight?: number | string;
  maxLength?: number;
  className?: any;
};

const useStyles = makeStyles(() => ({
  inputField: {
    maxHeight: '48px',
  },
}));

const InputField = (props: Props) => {
  const labelFontWeight = props.labelFontWeight ? props.labelFontWeight : 500;
  const styles = useStyles();
  return (
    <div style={props.mainStyle}>
      {props.label && (
        <Typography
          sx={{
            mt: props.mt ?? '10px',
            mb: props.mb ?? '8px',
            fontWeight: labelFontWeight,
          }}
        >
          {props.label}
        </Typography>
      )}
      <TextField
        type={props.type}
        disabled={props.isDisable}
        inputProps={{ maxLength: props.maxLength, ...props.inputProps }}
        size={props.size}
        fullWidth={props.fullWidth}
        onChange={props.onChange}
        onBlur={props.onBlur}
        error={!!props.error}
        helperText={props.error}
        multiline={props.multiline}
        defaultValue={props.defaultValue}
        rows={props.rows}
        sx={{
          input: {
            '&::placeholder': {
              color: props.lightPlaceholder ? '#D5D8DE' : '#333333',
              opacity: '100%',
              fontWeight: '400',

            },
            backgroundColor: props.backgroundColor ?? '#ffffff',

          },
          ...props.sx,
        }}
        className={clsx(styles.inputField, props.className)}
        // defaultValue={props.isEdit ? props.defaultValue : null}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
      />
      {/* {!!props.error && <Typography sx={{ marginTop: 0, color: '#ff0000' }}>{props.error}</Typography>} */}
    </div>
  );
};
export default InputField;
