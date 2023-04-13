import { useContext } from "react";
import ToDoContext from "./ToDoContext";

const Filter = () => {
  const toDoContext = useContext(ToDoContext);
  const applyFilter = (type) => {
    toDoContext.setFilter(type);
  };
  if (toDoContext.toDoTasks.length === 0) return null;
  return (
    <div className="todo-filter">
      <button
        onClick={() => {
          applyFilter("all");
        }}
      >
        All
      </button>
      <button
        onClick={() => {
          applyFilter("pending");
        }}
      >
        Pending
      </button>
      <button
        onClick={() => {
          applyFilter("done");
        }}
      >
        Done
      </button>
    </div>
  );
};

export default Filter;
