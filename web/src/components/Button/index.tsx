import React from "react";
import style from "./button.module.scss";

export default class Button extends React.Component {
  render() {
    return <button className={style.create}>{this.props.children}</button>;
  }
}
