import React from "react";
import Button from "../Button";
import './style.scss'

export default class Form extends React.Component {
  render() {
    return (
      <form className="newTask">
        <div className="inputContainer">
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" placeholder="Name" required />
        </div>
        <div className="inputContainer">
          <label htmlFor="timer">Timer</label>
          <input type="time" step="1" name="timer" id="timer" min="00:05:00" max="01:30:00" required />
        </div>
        <Button />
      </form>
    );
  }
}
