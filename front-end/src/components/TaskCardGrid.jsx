import TaskCard from "./TaskCard";

function TaskCardGrid() {
  return (
    <div className="h-full mt-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
}

export default TaskCardGrid;
