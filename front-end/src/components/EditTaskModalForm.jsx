import { useEffect, useState } from "react";
import {
  handelDescriptionChange,
  handelTitleChange,
  handelIsDoneChange,
} from "./controllers/modalFormControllers";
import { patchTask } from "../../api/api";

function EditTaskModalForm(props) {
  const [title, setTitle] = useState("new task name");
  const [description, setDescription] = useState("new description");
  let [isDone, setIsDone] = useState(false);
  const patchData = { title: title, description: description, isDone: isDone };

  return (
    <div className="flex flex-col items-center gap-8 mt-6">
      <input
        onChange={(e) => handelTitleChange(e, setTitle)}
        type="text"
        placeholder={title}
        className="input input-bordered w-full max-w-xs"
      />
      <textarea
        onChange={(e) => handelDescriptionChange(e, setDescription)}
        className="textarea textarea-bordered min-h-32 w-full max-w-xs"
        placeholder={description}
      ></textarea>
      <div className="flex w-full justify-center gap-20 items-center">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mr-3">Done ?</span>
            <input
              type="checkbox"
              className="checkbox checkbox-secondary"
              checked={isDone}
              value={isDone}
              onChange={() => handelIsDoneChange(setIsDone)}
            />
          </label>
        </div>
        <button
          className="btn btn-outline"
          onClick={() => {
            
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default EditTaskModalForm;
