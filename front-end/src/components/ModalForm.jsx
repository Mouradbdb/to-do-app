function ModalForm() {
    
  return (
    <div className="flex flex-col items-center gap-8 mt-6">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
      />
      <textarea
        className="textarea textarea-bordered min-h-32 w-full max-w-xs"
        placeholder="Bio"
      ></textarea>
      <div className="flex w-full justify-center gap-20 items-center">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text mr-3">Done ?</span>
            <input type="checkbox" className="checkbox checkbox-secondary" />
          </label>
        </div>
        <button className="btn btn-outline">Add</button>
      </div>
    </div>
  );
}

export default ModalForm;
