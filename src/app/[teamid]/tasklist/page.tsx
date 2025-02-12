import TaskItem from '@/feature/[teamid]/tasklist/TaskItem';
import Link from 'next/link';

const TasklistPage = () => {
  const boardList = ['법인 설립', '법인 등기', '정기 주총', '기타'];

  return (
    <div className="bg-black-200 h-screen">
      <div className="mx-auto w-[1200px] text-[#fff]">
        <h1>Tasklist</h1>
        <Link href="/">Go to Home</Link>

        <div className="flex flex-col gap-6 pt-5">
          <div className="text-xl/6 font-bold">할 일</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <p className="text-base font-medium">2월 7일 (금)</p>
              <div className="flex gap-1">
                <button className="bg-black-400 h-4 w-4 rounded-full"></button>
                <button className="bg-black-400 h-4 w-4 rounded-full"></button>
              </div>
              <button className="bg-black-400 h-6 w-6 rounded-full"></button>
            </div>
            <p className="text-sm font-normal text-green-800">
              + 새로운 목록 추가하기
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-5">
              {boardList.map((data, i) => (
                <p className="pb-[5px] text-base/5 font-medium" key={i}>
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
