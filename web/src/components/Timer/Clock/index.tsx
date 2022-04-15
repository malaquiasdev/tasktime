import { toClock } from "../../../utils/time";
import style from "./clock.module.scss";

export default function Clock({
  seconds = 0,
}: {
  seconds: number | undefined;
}) {
  const clock = toClock(seconds);
  return (
    <>
      <span className={style.clockNumber}>{clock.minutes}</span>
      <span className={style.clockNumber}>{clock.minutesUnit}</span>
      <span className={style.clockDivider}>:</span>
      <span className={style.clockNumber}>{clock.seconds}</span>
      <span className={style.clockNumber}>{clock.secondsUnit}</span>
    </>
  );
}
