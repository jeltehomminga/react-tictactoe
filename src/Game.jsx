import React, { Component } from "react";
import Board from "./Board";

class Game extends Component {
  state = { history: [{ squares: Array(9).fill(null) }], xIsNext: true, stepNumber: 0 };
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squaresClone = [...current.squares];
    if (this.calculateWinner(squaresClone) || squaresClone[i]) return;
    else squaresClone[i] = this.state.xIsNext ? "X" : "O";
    debugger;
    this.setState(
      {
        history: history.concat([{ squares: squaresClone }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length,
      },
      state => {
        console.log();
        debugger;
      }
    )
  };
  jumpTo = step => {
      this.setState( {
        stepNumber: step,
        xIsNext: (step % 2) === 0
      }
          
      )
  }
  calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.squares);

    const moves = history.map((historyObject, i) => {
      const desc = i ? `Go to move ${i}` : `Go to start`;
      return (
        <li key={"tt-step-" + i}>
          <button onClick={() => this.jumpTo(i)}>{desc}</button>
        </li>
      );
    });

    let status = !!winner
      ? `Winner: ${winner}`
      : `Next Player: ${this.state.xIsNext ? "X" : "O"}`;
    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
