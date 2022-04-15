interface Clock {
  minutes: string;
  minutesUnit: string;
  seconds: string;
  secondsUnit: string;
}

export function toSeconds(time: string): number {
  const [hours = 0, minutes = 0, seconds = 0] = time.split(":").map(Number);
  return hours * 3600 + minutes * 60 + seconds;
}

export function toClock(timeInSeconds: number): Clock {
  const minuteValue = Math.floor(timeInSeconds / 60);
  const secondValue = timeInSeconds % 60;
  const [minutes, minutesUnit] = String(minuteValue).padStart(2, "0");
  const [seconds, secondsUnit] = String(secondValue).padStart(2, "0");
  return {
    minutes,
    minutesUnit,
    seconds,
    secondsUnit,
  };
}
