import { MdDelete } from "react-icons/md";
import { deleteTask, patchTask } from "../../api/api";
import EditTaskBtn from "./EditTaskBtn";

function TaskCard(props) {
  const { _id, title, description, isDone, createdAt } = props.task;
  return (
    <div className="bg-primary text-white h-min rounded-xl p-4 text-left">
      <div className="flex justify-between">
        <h1 className="font-black text-xl text-center">{title}</h1>

        <div className="flex gap-2">
          <EditTaskBtn task={props.task} id={_id} />
          <MdDelete
            className="text-red-700 cursor-pointer hover:text-rose-900"
            size={23}
            onClick={() => deleteTask(_id)}
          />
          <input
            type="checkbox"
            className={`checkbox checked border-2 border-teal-400 [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] `}
            defaultChecked={isDone}
            onChange={() => patchTask({ isDone: !isDone }, _id)}
          />
        </div>
      </div>
      <h3 className="font-bold text-base-100">{createdAt}</h3>
      <p className="font-semibold text-rose-200">{description}</p>
    </div>
  );
}

export default TaskCard;
