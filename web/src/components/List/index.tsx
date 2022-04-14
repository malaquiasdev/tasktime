import React from "react";
import Item from "./Item";
import style from "./list.module.scss";
import ITask from "../../types/itask";

export default function List({ items }: { items: ITask[] }) {
  return (
    <aside className={style.list}>
      <h2>My List</h2>
      <ul>
        {items.map((item, index) => {
          return <Item key={index} task={item.task} time={item.time} />;
        })}
      </ul>
    </aside>
  );
}
