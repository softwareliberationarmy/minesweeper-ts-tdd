import { cleanup, render, screen } from "@testing-library/react";
import { App } from "./App";
import { userEvent } from "@testing-library/user-event";

describe("Minesweeper App", () => {
  afterEach(cleanup);

  describe("on startup", () => {
    it("should show the app title", () => {
      render(<App />);
      expect(screen.getByText("Minesweeper")).toBeInTheDocument();
    });

    it("should show the new game button", () => {
      render(<App />);

      expect(getNewGameButton()).toBeInTheDocument();
    });

    it("should not show the game board", () => {
      render(<App />);

      expect(getGameBoard()).not.toBeInTheDocument();
    });
  });

  describe("when clicking the new game button", () => {
    it("should show the game board", async () => {
      render(<App />);

      await userEvent.click(getNewGameButton());

      expect(getGameBoard()).toBeInTheDocument();
    });

    it("should have multiple cells on the game board", async () => {
      render(<App />);

      await userEvent.click(getNewGameButton());

      //there should be at least 9 cells on the board
      expect(getGameBoard()?.getElementsByTagName("td").length).toBeGreaterThan(
        8
      );
    });
  });
});

function getGameBoard(): HTMLElement | null {
  return screen.queryByTestId("gameBoard");
}

function getNewGameButton(): Element {
  return screen.getByRole("button", { name: /New Game/i });
}
