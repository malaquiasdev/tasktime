import React from "react";
import Item from "./Item";
import style from "./list.module.scss";

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
        {tasks.map((item, index) => {
          return <Item key={index} task={item.task} time={item.time} />;
        })}
      </ul>
    </aside>
  );
}
