import React from "react";

export function GameBoardCell() {
  const [showButton, setShowButton] = React.useState(true);

  const hideButton = () => {
    setShowButton(false);
  };

  return showButton ? <button onClick={() => hideButton()} /> : null;
}
