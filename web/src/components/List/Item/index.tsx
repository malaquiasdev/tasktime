import style from "../list.module.scss";

export default function Item(props: { task: string; time: string }) {
  return (
    <li className={style.item}>
      <h3>{props.task}</h3>
      <span>{props.time}</span>
    </li>
  );
}
