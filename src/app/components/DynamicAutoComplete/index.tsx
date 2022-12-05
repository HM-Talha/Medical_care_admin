import { Close } from '@mui/icons-material';
import { Autocomplete, InputAdornment, TextField } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

import { request } from 'utils/request';

type Props = {
  url: string;
  onChange: any;
  sx?: any;
  name: string;
  label: string;
  filterId?: string | null;
  filterField?: string | null;
  optionMapper?: any;
  mapOptions?: any;
  load?: boolean;
  placeholder?: string;
  error?: string;
  selected: any;
  onClear?: any;
  dependent?: any;
  width?: any;
  disabled?: boolean;
  lightPlaceholder?: string;
};

export const DynamicAutoComplete = ({
  url,
  onChange,
  name,
  label,
  optionMapper,
  mapOptions,
  load = true,
  error,
  selected,
  onClear,
  width, sx, lightPlaceholder,
  disabled = false,
}: Props) => {
  const id = `autoCompleteTextField${label}`;
  const [options, setOptions] = useState<any[]>([]);
  const [value, setValue] = React.useState<any | null>(null);
  const previousController = useRef<any>();
  const optionValues = optionMapper
    ? optionMapper
    : {
      name: 'name',
      value: 'value',
    };

  const getData = searchTerm => {
    if (previousController.current) {
      previousController.current.abort();
    }
    const controller = new AbortController();
    const signal = controller.signal;
    previousController.current = controller;
    const URL = `${url}&limit=10${searchTerm ? '&q=' + searchTerm : ''}`;

    request(URL, { signal }).then(function (myJson: any) {
      if (mapOptions) {
        mapOptions(setOptions, myJson.items);
      } else {
        setOptions(myJson.items);
      }
    });
  };

  const onInputChange = (event, value, reason) => {

    getData(value);
    if (event) {
      const optionIndex = event.target.dataset?.optionIndex;
      const item = options[optionIndex];
      onChange({
        name,
        value: item?.id,
        item,
      });
    }
  };

  useEffect(() => {
    if (load === true) {
      getData(value);
    }
  }, [load]);


  useEffect(() => {
    if (selected?.id) {
      setValue(selected as any);
      setOptions([selected as any]);
    } else {
      setValue(null);
      getData('');
    }
  }, [selected?.id, url]);

  const clearValues = () => {
    setValue('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <Autocomplete
      clearIcon={<Close fontSize="small" onClick={clearValues} />}
      id={`${name}-autocomplete`}
      size="small"
      fullWidth={true}
      options={options}
      disabled={disabled}
      sx={{
        ...(width && { width }), ...sx
      }}
      onInputChange={onInputChange}
      value={value}
      onChange={(event: any, newValue: any | null) => {
        setValue(newValue);
      }}
      isOptionEqualToValue={(option, newValue) => {
        return option.id === newValue.id;
      }}
      getOptionLabel={(option: any) => option[optionValues.name] || 'N/A'}
      // style={{ width: 480 }}
      renderInput={params => (
        <TextField
          {...params}
          placeholder={label}
          disabled={disabled}
          label={label}
          InputLabelProps={{
            style: {
              color: lightPlaceholder ?? '#333333',
            }
          }}

          //   sx={{
          // }}
          variant="outlined"
          id={id}
          error={!!error}
          helperText={error}
        />
      )}
    />
  );
};
