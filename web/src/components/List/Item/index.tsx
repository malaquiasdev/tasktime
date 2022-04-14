import ITask from "../../../types/itask";
import style from "./item.module.scss";

interface Props extends ITask {
  selectTaskOnClick: (task: ITask) => void;
}

export default function Item({
  selectTaskOnClick,
  id,
  task,
  time,
  done,
  selected,
}: Props) {
  return (
    <li
      className={`${style.item} ${selected ? style.itemSelected : ""}`}
      onClick={() =>
        selectTaskOnClick({
          id,
          task,
          time,
          done,
          selected: true,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
    </li>
  );
}
