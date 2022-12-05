import { Button, Popover, Typography } from '@mui/material';

import React, { Dispatch, SetStateAction, useState } from 'react';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { DateRange as DateRangeIcon } from '@mui/icons-material';
import { getFormattedDateTime } from 'utils/helpers';

type Props = {
  title: string;
  value?: any;
  setValue?: Dispatch<SetStateAction<number>>;
  onChange: Function;
  date: Array<{
    startDate: Date | null;
    endDate: Date | null;
    key: string;
  }>;
  clearDates: any;
};

const PopoverDateRangePicker = (props: Props) => {
  const [date, setDate] = useState<typeof props.date>([
    { startDate: new Date(), endDate: new Date(), key: 'selection' },
  ]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onDateClear = () => {
    setDate([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    props.clearDates();
    handleClose();
  };

  const onCancel = () => {
    if (!props.date[0].startDate) {
      setDate([
        { startDate: new Date(), endDate: new Date(), key: 'selection' },
      ]);
    } else {
      setDate(props.date);
    }
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const onOkay = () => {
    props.onChange(date);
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const [{ startDate, endDate }] = props.date;
  const title = !props.title
    ? `${getFormattedDateTime(
        startDate?.toISOString(),
        'dd/MM/yyyy',
      )} - ${getFormattedDateTime(endDate?.toISOString(), 'dd/MM/yyyy')}`
    : props.title;
  return (
    <div style={{ position: 'relative' }}>
      <Button
        aria-describedby={id}
        sx={{
          color: '#333333',
          border: '1px solid #D5D8DE',
          backgroundColor: '#F7F7FA',
          minWidth: '180px',
          fontSize: '14px',
          minHeight: '45px',
        }}
        onClick={handleClick}
      >
        <Typography sx={{ ml: 2, mr: 3 }}>{title}</Typography>
        <DateRangeIcon sx={{ color: '#FAA61A', fontSize: 16 }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DateRange
          onChange={item => setDate([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={date}
        />
        <div
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#fff',
            padding: '10px 20px 30px 0px',
          }}
        >
          <Button sx={{ color: '#333' }} onClick={onDateClear}>
            Clear
          </Button>
          <Button sx={{ color: '#333' }} onClick={onCancel}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#FFA96A', color: '#fff' }}
            onClick={onOkay}
          >
            Ok
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default PopoverDateRangePicker;

// position: 'absolute', bottom: 20, right: 25
