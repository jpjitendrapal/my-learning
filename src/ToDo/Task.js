import { useContext } from "react";
import ToDoContext from "./ToDoContext";
const getTaskIndex = (list, item) => {
  let ind = -1;
  for (let i = 0; i < list.length; i++) {
    if (item && list[i].id === item.id) {
      ind = i;
      break;
    }
  }
  return ind;
};
const Task = ({ task, index }) => {
  const toDoContext = useContext(ToDoContext);
  const editTask = (task) => {
    const ind = getTaskIndex(toDoContext.toDoTasks, task);
    toDoContext.setNewTask(task.title);
    toDoContext.setEditing(ind);
  };
  const deleteTask = (task) => {
    const newList = toDoContext.toDoTasks;
    let ind = getTaskIndex(toDoContext.toDoTasks, task);
    newList.splice(ind, 1);
    toDoContext.setToDoTask([...newList]);
  };
  const doneTask = (task) => {
    const ind = getTaskIndex(toDoContext.toDoTasks, task);
    toDoContext.toDoTasks[ind].done = !toDoContext.toDoTasks[ind].done;
    toDoContext.setToDoTask([...toDoContext.toDoTasks]);
  };
  return (
    <div className="task" key={task.id}>
      <div>
        <span>{task.id}.</span>
        &nbsp;
        <span className={"task-title" + (task.done ? " done" : "")}>
          {task.title}
        </span>
        {task.done && (
          <span role="img" aria-label="tick">
            &nbsp;✅
          </span>
        )}
      </div>
      <div>
        <button onClick={() => doneTask(task)}>
          {task.done ? "UnDone" : "Done"}
        </button>{" "}
        &nbsp;
        <button onClick={() => editTask(task)}>Edit</button> &nbsp;
        <button onClick={() => deleteTask(task)}>Delete</button>
      </div>
    </div>
  );
};
export default Task;
export { getTaskIndex };
