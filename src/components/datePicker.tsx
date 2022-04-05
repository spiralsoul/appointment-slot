import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {  date: Date;
  onDateChange: (event:Date) => void;
}

const DatePicker: React.FC<Props> = ({ date, onDateChange, ...props }) => {
  return (
    <div {...props}>
      <Calendar onChange={onDateChange} value={date} />
    </div>
  )
}

export default DatePicker
