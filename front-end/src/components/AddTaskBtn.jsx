import ModalForm from "./ModalForm";

function AddTaskBtn() {
  return (
    <div className="h-min  text-white ">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn text-white w-full"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Add Task
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add Task</h3>
          <ModalForm />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default AddTaskBtn;
