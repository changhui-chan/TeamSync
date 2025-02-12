const TaskItem = () => {
  return (
    <div className="bg-black-400 flex h-[74px] flex-col justify-between rounded-md px-3 py-2">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p>(체크박스)</p>
          <p>법인 설립 안내 드리기</p>
          <p>댓글 3</p>
        </div>
        <p>메뉴버튼</p>
      </div>
      <div className="flex gap-5">
        <p>2025년 2월 25일</p>
        <p>매일 반복</p>
      </div>
    </div>
  );
};

export default TaskItem;
