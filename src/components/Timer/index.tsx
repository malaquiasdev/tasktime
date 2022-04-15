import React, { useEffect } from "react";
import Button from "../Button";
import Clock from "./Clock/index";
import style from "./timer.module.scss";
import { toSeconds } from "../../utils/time";
import ITask from "../../types/itask";

interface Props {
  item: ITask | undefined;
  completeTask: () => void;
}

export default function Timer({ item, completeTask }: Props) {
  const [time, setTime] = React.useState<number>(0);

  useEffect(() => {
    if (item?.time) {
      setTime(toSeconds(item.time));
    }
  }, [item]);

  function startTimer(time: number = 0) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        return startTimer(time - 1);
      }
      completeTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Timer</p>
      <div className={style.timerWrapper}>
        <Clock seconds={time}></Clock>
      </div>
      <Button onClick={() => startTimer(time)}>Start</Button>
    </div>
  );
}
