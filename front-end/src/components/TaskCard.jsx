import { MdEdit } from "react-icons/md";

function TaskCard() {
  return (
    <div className="bg-primary text-white h-min rounded-xl p-4 text-left">
      <div className="flex justify-around">
        <MdEdit
          className="text-rose-700 cursor-pointer hover:text-rose-900"
          size={23}
        />

        <h1 className="font-black text-xl text-center">Task-1</h1>
        <input
          type="checkbox"
          className="checkbox [--chkbg:oklch(var(--a))] [--chkfg:oklch(var(--p))] border-2 border-teal-400"
        />
      </div>
      <h3 className="font-bold text-base-100">{new Date().toDateString()}</h3>
      <p className="font-semibold text-rose-200">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa
        maxime consequuntur quo! Quod laboriosam veritatis quam quasi earum
        commodi.
      </p>
    </div>
  );
}

export default TaskCard;
