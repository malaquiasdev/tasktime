import React from "react";
import Button from "../Button";
import Clock from "./Clock/index";
import style from "./timer.module.scss";

export default function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}>Set timer</p>
      <div className={style.timerWrapper}>
        <Clock></Clock>
      </div>
      <Button>Start</Button>
    </div>
  );
}
