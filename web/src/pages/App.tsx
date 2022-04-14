import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./app.module.scss";
import ITask from "../types/itask";

function App() {
  let [items, setItem] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Form setItem={setItem} />
      <List items={items} />
      <Timer />
    </div>
  );
}

export default App;
