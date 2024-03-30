import "./App.css";
import Header from "./components/Header.jsx";
import AddTaskBtn from "./components/AddTaskBtn.jsx";
import TaskCard from "./components/TaskCard.jsx";
import TaskCardGrid from "./components/TaskCardGrid.jsx";
function App() {
  return (
    <>
      <div className="lg:mx-32  h-screen flex flex-col ">
        <Header />
        <AddTaskBtn />
        <TaskCardGrid />
      </div>
    </>
  );
}
export default App;
