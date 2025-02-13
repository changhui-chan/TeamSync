import { useState } from 'react';
import dayjs from 'dayjs';
import Calendar from 'react-calendar';

// import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import './myCalendar.css';

interface CalendarProps {
  className: string;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const PrevIcon = () => {
  return <div></div>;
  // return <BiSolidLeftArrow />;
};

const NextIcon = () => {
  return <div></div>;
  // return <BiSolidRightArrow />;
};

const MyCalendar = ({ className, ...rest }: CalendarProps) => {
  const [value, onChange] = useState<Value>(new Date());
  console.log(value);

  // onViewChange 에서 next/prev만 남기고 막기

  return (
    <div className={'w-[400px]'} {...rest}>
      <Calendar
        onChange={onChange}
        value={value}
        locale="en"
        calendarType="gregory"
        formatDay={(locale, date) => dayjs(date).format('D')}
        formatMonthYear={(locale, date) => dayjs(date).format('MMMM YYYY')}
        formatWeekday={(locale, date) => dayjs(date).format('DDD')}
        prevLabel={<PrevIcon />}
        nextLabel={<NextIcon />}
      />
    </div>
  );
};

export default MyCalendar;
