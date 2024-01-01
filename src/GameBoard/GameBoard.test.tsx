import { render, screen } from "@testing-library/react";
import { GameBoard } from "./GameBoard";
import userEvent from "@testing-library/user-event";

describe("Game board", () => {
  describe("on startup", () => {
    it("should show 9 cells by default", () => {
      render(<GameBoard />);

      expect(screen.queryAllByRole("cell").length).toBe(9);
      expect(screen.queryAllByRole("button").length).toBe(9);
    });
  });

  describe("when clicking a cell button", () => {
    it("should make the button disappear", async () => {
      render(<GameBoard />);

      const buttons = screen.queryAllByRole("button");
      expect(buttons.length).toBe(9);

      await userEvent.click(buttons[0]);

      expect(screen.queryAllByRole("button").length).toBe(8);
    });
  });
});
