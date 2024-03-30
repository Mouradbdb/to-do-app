
export function handelTitleChange(e,setTitle) {
  setTitle((t) => (t = e.target.value));
}
export function handelDescriptionChange(e,setDescription) {
  setDescription((d) => (d = e.target.value));
}
export function handelIsDoneChange(setIsDone) {
  setIsDone((prevIsDone) => !prevIsDone); 
}