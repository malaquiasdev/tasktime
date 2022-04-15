import React, { useEffect } from "react";
import Button from "../Button";
import Clock from "./Clock/index";
import style from "./timer.module.scss";
import { toSeconds } from "../../utils/time";
import ITask from "../../types/itask";

interface Props {
  item: ITask | undefined;
}

export default function Timer({ item }: Props) {
  const [time, setTime] = React.useState<number>(0);

  useEffect(() => {
    if (item?.time) {
      setTime(toSeconds(item.time));
    }
  }, [item]);
  return (
    <div className={style.timer}>
      <p className={style.title}>Timer</p>
      <div className={style.timerWrapper}>
        <Clock seconds={time}></Clock>
      </div>
      <Button>Start</Button>
    </div>
  );
}
