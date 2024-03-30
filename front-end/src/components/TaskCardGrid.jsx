import TaskCard from "./TaskCard";
import { getAllTasks } from "../../api/api";
import { useEffect, useState } from "react";

function TaskCardGrid() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      const tasksData = await getAllTasks();
      setTasks(tasksData);
    }
    fetchTasks();
  }, []);

  return (
    <div className="h-full mt-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 ">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskCardGrid;
