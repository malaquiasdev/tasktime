import React from "react";
import Button from "../Button";
import style from "./form.module.scss";

export default class Form extends React.Component {
  render() {
    return (
      <form className={style.newTask}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Name"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="timer">Timer</label>
          <input
            type="time"
            step="1"
            name="timer"
            id="timer"
            min="00:05:00"
            max="01:30:00"
            required
          />
        </div>
        <Button>Create</Button>
      </form>
    );
  }
}
