import React from "react";

function Task({ deleteTask, text, category }) {
  function handleDeleteTask() {
    deleteTask(text);
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={handleDeleteTask} className="delete">
        X
      </button>
    </div>
  );
}

export default Task;
