import React from "react";
import { GameBoardCell } from "./GameBoardCell";

export function GameBoard() {
  return (
    <table data-testid="gameBoard">
      <tbody>
        <tr>
          <td>
            <GameBoardCell />
          </td>
          <td>
            <GameBoardCell />
          </td>
          <td>
            <GameBoardCell />
          </td>
        </tr>
        <tr>
          <td>
            <GameBoardCell />
          </td>
          <td>
            <GameBoardCell />
          </td>
          <td>
            <GameBoardCell />
          </td>
        </tr>
        <tr>
          <td>
            <GameBoardCell />
          </td>
          <td>
            <GameBoardCell />
          </td>
          <td>
            <GameBoardCell />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
