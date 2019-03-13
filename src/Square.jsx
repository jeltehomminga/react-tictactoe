import React from "react";

const Square = props => <button className="square" onClick={props.renderSquareOnClick}>{props.value}</button> ;

export default Square;