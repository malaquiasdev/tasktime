import React from "react";
import style from './list.module.scss'

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
    <aside className={style.list}>
      <h2>My List</h2>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index} className={style.item}>
              <h3>{task.task}</h3>
              <span>{task.time}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
