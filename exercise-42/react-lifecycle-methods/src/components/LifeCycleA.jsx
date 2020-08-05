import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB.jsx";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "john",
    };
    console.log("LifecycleA constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("LifeCycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
    this.setState({ name: "jane" });
  }

  render() {
    console.log("LifeCycleA render");
    return (
      <div>
        LifecycleA
        <LifeCycleB name={this.state.name} />
      </div>
    );
  }
}

export default LifeCycleA;
