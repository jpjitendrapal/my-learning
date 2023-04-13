import { useState } from "react";
import { getGlobalCounter } from "./../common/utils";
import ToDoContext from "./ToDoContext";
import TaskList from "./List";
const getTaskId = getGlobalCounter(1);
const ToDo = () => {
  const [toDoTasks, setToDoTask] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editing, setEditing] = useState(-1);
  const [filter, setFilter] = useState("all"); // all, done, pending
  const addToDoList = (title) => {
    setToDoTask([...toDoTasks, { id: getTaskId(), title }]);
  };

  return (
    <ToDoContext.Provider
      value={{
        toDoTasks: toDoTasks,
        setToDoTask: setToDoTask,
        addTask: addToDoList,
        newTask,
        setNewTask,
        editing,
        setEditing,
        filter,
        setFilter
      }}
    >
      <h2>To Do List</h2>
      <div className="todo-app">
        <TaskList list={toDoTasks} />
      </div>
    </ToDoContext.Provider>
  );
};
export default ToDo;
