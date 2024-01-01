import React, { useState } from "react";
import { GameBoard } from "./GameBoard/GameBoard";
import "./App.css";

export function App() {
  const [showBoard, setShowBoard] = useState(false);

  const startNewGame = () => {
    setShowBoard(true);
  };

  return (
    <div className="Minesweeper">
      <h1>Minesweeper</h1>
      <button className="NewGame" onClick={() => startNewGame()}>
        New Game
      </button>
      {showBoard && <GameBoard />}
    </div>
  );
}
