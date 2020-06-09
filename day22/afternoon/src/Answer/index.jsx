import React from "react";

export default class Answer extends React.Component {

  state = {
    count: 0,
  };

  like = () => {
    this.setState({
      count: this.state.count +1
    });
  };


  render() {
    return (
      <div className="answer">
        <div className="answer__user">Username: {this.props.user}</div>
        <div className="answer__text">Answer: {this.props.text}</div>
        <button className="like" onClick={this.like}>Like</button> <div>{this.state.count}</div>
      </div>
    )
  }
}