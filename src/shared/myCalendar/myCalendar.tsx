import { useState } from 'react';
import Calendar from 'react-calendar';

import './myCalendar.css';

interface CalendarProps {
  className: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCalendar = ({ className, ...rest }: CalendarProps) => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className={className} {...rest}>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default MyCalendar;
