import React from "react";
import Item from "./Item";
import style from "./list.module.scss";
import ITask from "../../types/itask";

interface Props {
  items: ITask[];
  selectTaskOnClick: (task: ITask) => void;
}

export default function List({ items, selectTaskOnClick }: Props) {
  return (
    <aside className={style.list}>
      <h2>My List</h2>
      <ul>
        {items.map((item) => {
          return (
            <Item
              selectTaskOnClick={selectTaskOnClick}
              key={item.id}
              id={item.id}
              task={item.task}
              time={item.time}
              done={item.done}
              selected={item.selected}
            />
          );
        })}
      </ul>
    </aside>
  );
}
