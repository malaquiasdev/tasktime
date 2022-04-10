import React from "react";

export default function List() {
  const tasks = [
    {
      task: "Learn React",
      time: "02:00:00",
    },
    {
      task: "Learn TypeScript",
      time: "03:00:00",
    },
    { task: "Learn Something", time: "04:00:00" },
  ];
  return (
    <aside>
      <h3>My List</h3>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <h3>{task.task}</h3>
              <span>{task.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
