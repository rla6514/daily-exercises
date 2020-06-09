import React from "react";
import "./style.css";

export default class Toggle extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="message__sender">{this.props.sender}</div>
        <div className="message__subject">{this.props.subject}</div>
        <div className="message__time">{this.props.time}</div>
      </div>
    );
  }
}
