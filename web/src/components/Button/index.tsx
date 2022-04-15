import React from "react";
import style from "./button.module.scss";

export default class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button type={type} className={style.create} onClick={onClick}>
        {this.props.children}
      </button>
    );
  }
}
