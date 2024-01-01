import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("Minesweeper App", () => {

  afterEach(() => {
    
  });

  it("should show the app title", () => {
    render(<App />);
    expect(screen.getByText("Minesweeper")).toBeInTheDocument();
  });

  it("should show the new game button", () => {
    render(<App />);

    expect(
      screen.getByRole("button", { name: /New Game/i })
    ).toBeInTheDocument();
  });

  it("should not show the game board when the game is started", () => {
    render(<App />);

    expect(screen.queryByRole("grid")).not.toBeInTheDocument();
  });
});
