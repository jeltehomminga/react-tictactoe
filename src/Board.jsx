import React, { Component } from "react";
import Square from "./Square";

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        renderSquareOnClick={() => this.props.onClick(i)}
      />
    );
  }
  handleClick(i) {
    const squares = [...this.props.squares];
    if (this.calculateWinner(squares) || squares[i]) return;
    else squares[i] = this.props.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.props.xIsNext });
  }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;