import React from "react";
import { MdEdit } from "react-icons/md";
import EditTaskModalForm from "./EditTaskModalForm";
function EditTaskBtn(props) {
  const { id } = props;
  return (
    <>
      <MdEdit
        className="text-base-200 cursor-pointer hover:text-rose-900 "
        size={23}
        onClick={() => document.getElementById("my_modal_3").showModal()}
      />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Edit Task {id}</h3>
          <EditTaskModalForm task={props.task} id={id} />
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default EditTaskBtn;
