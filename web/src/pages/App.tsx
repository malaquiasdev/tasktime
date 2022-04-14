import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./app.module.scss";
import ITask from "../types/itask";

function App() {
  const [items, setItem] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(task: ITask) {
    setSelected(task);
    setItem(
      items.map((item) => {
        if (item.id === task.id) {
          return { ...item, selected: true };
        }
        return { ...item, selected: false };
      })
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setItem={setItem} />
      <List items={items} selectTaskOnClick={selectTask} />
      <Timer item={selected} />
    </div>
  );
}

export default App;
