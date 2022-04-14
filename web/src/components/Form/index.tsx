import React from "react";
import Button from "../Button";
import style from "./form.module.scss";
import ITask from "../../types/itask";
import * as uuid from "uuid";

export default class Form extends React.Component<{
  setItem: React.Dispatch<React.SetStateAction<ITask[]>>;
}> {
  state = {
    id: "",
    task: "",
    time: "00:00:00",
    selected: false,
    done: false,
  };
  createNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setItem((tasks) => [...tasks, { ...this.state, id: uuid.v4() }]);
    this.setState({
      id: "",
      task: "",
      time: "00:00:00",
      selected: false,
      done: false,
    });
  }
  render() {
    return (
      <form className={style.newTask} onSubmit={this.createNewTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="Name"
            required
            value={this.state.task}
            onChange={(e) =>
              this.setState({ ...this.state, task: e.target.value })
            }
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="timer">Time</label>
          <input
            type="time"
            step="1"
            name="timer"
            id="timer"
            min="00:05:00"
            max="01:30:00"
            required
            value={this.state.time}
            onChange={(e) =>
              this.setState({ ...this.state, time: e.target.value })
            }
          />
        </div>
        <Button type="submit">Create</Button>
      </form>
    );
  }
}
