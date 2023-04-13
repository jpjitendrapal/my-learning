import Task from "./Task";
import AddTask from "./AddTask";
import Filter from "./Filter";
import ToDoContext from "./ToDoContext";
import { useContext } from "react";
const TaskList = ({ list }) => {
  const todoContext = useContext(ToDoContext);
  const renderList = (list = []) => {
    return list.map((task, index) => {
      if (todoContext.filter === "all")
        return <Task key={task.id} task={task} index={index} />;
      else if (todoContext.filter === "done" && task.done) {
        return <Task key={task.id} task={task} index={index} />;
      } else if (todoContext.filter === "pending" && !task.done) {
        return <Task key={task.id} task={task} index={index} />;
      }
    });
  };
  return (
    <div>
      <AddTask />
      <Filter />
      {renderList(list)}
    </div>
  );
};

export default TaskList;
