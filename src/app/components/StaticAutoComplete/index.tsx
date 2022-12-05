import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { request } from 'utils/request';

type Props = {
  onChange: any;
  name: string;
  label: string;
  placeholder?: string;
  error?: string
  selected: any;
  fullWidth?: boolean,
  isDisable?: boolean,
};

export const StaticAutoComplete = ({
  onChange,
  name,
  label,
  error,
  selected,
  fullWidth,
  isDisable,
  placeholder
}: Props) => {

  const [value, setValue] = React.useState<any | null>(null);

  const onInputChange = (event, value, reason) => {
    // debugger
    if (event && reason == 'clear') {
      onChange({
        name,
        value: value,
      });
      return
    }
    if (event && reason == 'reset') {
      if (!value) { return }
      onChange({
        name,
        value: value,
      });
      return
    }

  };

  return (<></>);
};