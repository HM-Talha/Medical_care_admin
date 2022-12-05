import React from "react";
import { useSelector } from "react-redux";
import { selectDirection } from "styles/theme/slice";

import { LocalizationProvider, MobileDatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Box, TextField } from "@mui/material";

const DatePicker = (
  { value, open, onOpen, onClose, onChange, label },
  props
) => {
  const direction = useSelector(selectDirection);
  const handleOpen = () => {
    if (onOpen) onOpen();
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div dir={direction} style={{ display: "flex" }}>
          <MobileDatePicker
            DialogProps={{
              dir: direction,
            }}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
            label={label}
            value={value}
            onChange={onChange}
            maxDate={new Date()}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                // sx={{ display: 'none' }}
              />
            )}
          />
        </div>
      </LocalizationProvider>
    </>
  );
};

export default DatePicker;
