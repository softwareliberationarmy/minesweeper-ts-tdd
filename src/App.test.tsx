import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("Minesweeper App", () => {
  it("should show the app title", () => {
    render(<App />);
    expect(screen.getByText("Minesweeper")).toBeInTheDocument();
  });
});
