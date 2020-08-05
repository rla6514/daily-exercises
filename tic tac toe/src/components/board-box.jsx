import React from "react";


const Square = (props) => {
  return (
    <button className="board_box" onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Square;