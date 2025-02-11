import Link from 'next/link';

import TaskItem from '@/feature/[teamid]/tasklist/TaskItem';

const TasklistPage = () => {
  const boardList = ['법인 설립', '법인 등기', '정기 주총', '기타'];

  return (
    <div className="h-screen bg-black-100">
      <div className="mx-auto w-[1200px] text-white-100">
        <h1>Tasklist</h1>
        <Link href="/">Go to Home</Link>

        <div className="flex flex-col gap-6 pt-5">
          <div className="text-xl/6 font-bold">할 일</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-base font-medium">2월 7일 (금)</p>
              <div className="flex gap-1">
                <button className="h-4 w-4 rounded-full bg-black-300"></button>
                <button className="h-4 w-4 rounded-full bg-black-300"></button>
              </div>
              <button className="h-6 w-6 rounded-full bg-black-300"></button>
            </div>
            <p className="font-normal text-sm text-green-300">
              + 새로운 목록 추가하기
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              {boardList.map((data, i) => (
                <p className="text-base/5 pb-[5px] font-medium" key={i}>
                  {data}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
              <TaskItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasklistPage;
