import { useContext } from "react";
import ToDoContext from "./ToDoContext";
const AddTask = () => {
  const toDoContext = useContext(ToDoContext);
  const handleChange = (e) => {
    toDoContext.setNewTask(e.target.value);
  };
  const addTaskToList = () => {
    if (toDoContext.newTask.trim().length > 0) {
      if (toDoContext.editing > -1) {
        const editTask = toDoContext.toDoTasks[toDoContext.editing];
        editTask.title = toDoContext.newTask;
        toDoContext.setEditing(-1);
        toDoContext.setToDoTask([...toDoContext.toDoTasks]);
      } else {
        toDoContext.addTask(toDoContext.newTask);
      }
      toDoContext.setNewTask("");
    }
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      addTaskToList();
    }
  };
  return (
    <div>
      <input
        value={toDoContext.newTask}
        type="text"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => keyDownHandler(e)}
      />
      &nbsp;
      <button onClick={addTaskToList}>
        {toDoContext.editing > -1 ? "Update" : "Add Task"}
      </button>
    </div>
  );
};
export default AddTask;
