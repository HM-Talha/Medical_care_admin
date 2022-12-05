import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React from 'react';
import { DateRange,Calendar } from 'react-date-range';

interface Props {
  onChange: Function;
  range?:Boolean
  date: Array<{
    startDate: Date;
    endDate: Date | null;
    key: string;
  }>;
}

const DateRangePicker = ({ onChange, date,range=true }: Props) => {
  return (
    <>
    {range?
      <DateRange
        onChange={item => onChange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}

      />:
      <Calendar
    
      date={new Date()}
   onChange={item => onChange(item)}
    />
      }
    </>
  );
};
export default DateRangePicker;
