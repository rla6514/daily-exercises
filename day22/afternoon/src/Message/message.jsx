import React from "react";
import "./style.scss";

export default class Question extends React.Component {
  render() {
      return (
          <div className="question">
              <h3 className="question__title">{this.props.title}</h3>
              <p className="question__definition">{this.props.text}</p>
          </div>
      );
  }
};
