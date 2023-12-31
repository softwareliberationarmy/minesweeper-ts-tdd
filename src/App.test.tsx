import { render, screen } from "@testing-library/react";

describe("Minesweeper App", () => {
  it("should show the app title", () => {
    render(<App />);
    expect(screen.getByText("Minesweeper")).toBeInTheDocument();
  });
});

function App() {
  return <div>Minesweeper</div>;
}
