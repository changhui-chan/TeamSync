import { useState } from 'react';
import {
  BiCheck,
  BiDotsVerticalRounded,
  BiSolidCalendarAlt,
  BiSolidCommentDetail,
} from 'react-icons/bi';
import { TbRepeat } from 'react-icons/tb';

const TaskItem = () => {
  const [isDone, setIsDone] = useState(false);
  const handleDone = () => {
    setIsDone(!isDone);
  };
  const title = '법인 설립 안내드리기';

  return (
    <div className="flex h-[74px] flex-col justify-between rounded-md bg-black-300 px-3 py-2">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <label className="relative h-6 w-6">
            <input
              type="radio"
              value={title}
              name={'checkbox'}
              checked={isDone}
              onChange={handleDone}
              onClick={handleDone}
              className="h-6 w-6 appearance-none"
            />
            {isDone ? (
              <BiCheck className={`absolute left-1 top-1 z-10 h-4 w-4`} />
            ) : (
              <></>
            )}
            <div
              className={`absolute left-1 top-1 h-4 w-4 rounded-md border ${isDone ? 'border-green-500 bg-green-500' : 'border-white-100'}`}
            />
          </label>
          <p className={`${isDone ? 'line-through' : ''}`}>{title}</p>
          <p className="flex items-center gap-1 text-white-500">
            <BiSolidCommentDetail />3
          </p>
        </div>
        <BiDotsVerticalRounded className="text-white-500" />
      </div>
      <div className="flex gap-5">
        <p className="flex items-center gap-1 text-white-500">
          <BiSolidCalendarAlt />
          2025년 2월 25일
        </p>
        <p className="flex items-center gap-1 text-white-500">
          <TbRepeat />
          매일 반복
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
