import React, { useState } from "react";
import { GameBoard } from "./GameBoard";

export function App() {
  const [showBoard, setShowBoard] = useState(false);

  const startNewGame = () => {
    setShowBoard(true);
  };

  return (
    <>
      <h1>Minesweeper</h1>
      <button onClick={() => startNewGame()}>New Game</button>
      {showBoard && <GameBoard />}
    </>
  );
}
