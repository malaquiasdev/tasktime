import React from "react";
import Button from "../Button";

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="task">Create a new task</label>
          <input type="text" name="task" id="task" placeholder="Task name" required />
        </div>
        <div>
          <label htmlFor="timer">Timer</label>
          <input type="time" step="1" name="timer" id="timer" min="00:05:00" max="01:30:00" required />
        </div>
        <Button />
      </form>
    );
  }
}
