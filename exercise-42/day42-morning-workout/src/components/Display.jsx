import React from 'react';


class Display extends React.Component {
  render() {
    const { count } = this.props;

    return <h2>{count}</h2>
  }
}

export default Display;