import React from 'react';


class CounterButton extends React.Component {
  render() {
    const { onClick, value } = this.props;

    return <button onClick={onClick}>{value}</button>
  }
}

export default CounterButton;