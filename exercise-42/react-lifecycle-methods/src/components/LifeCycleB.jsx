import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
    console.log("LifeCycleB constructor");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(`LifeCycleB prevState.name ${prevState.name}`);
    console.log(`LifeCycleB nextProps.name ${nextProps.name}`);
    if (nextProps.props !== prevState.name) {
      return {
        name: nextProps.name,
      };
    }
    console.log("LifeCycleB getDerivedStateFromProps");

    return null;
  }
  componentDidMount() {
    console.log("LifeCycleB componentDidMount");
  }

  render() {
    console.log("LifeCycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifeCycleB;