import React from "react";
import Task from "./Task";

function TaskList({ allTasks, deleteTask }) {
  const tasks = allTasks.map((task)=> (    
    <Task
    key={task.text}
    text={task.text}
    category={task.category}
    deleteTask={deleteTask}
  />
  ));
  
      /* display a list of tasks using Task component */
  return <div className="tasks">{tasks}</div>;
}

export default TaskList;
