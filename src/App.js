import React, { useState } from "react";

import "./App.css";

function App() {
  const [gameState, setGameState] = useState("menu");

  const renderGameState = () => {
    switch (gameState) {
      case "menu":
        return <div>Menu</div>;
      case "quiz":
        return <div>Quiz</div>;
      case "endgame":
        return <div>Menu</div>;
    }
  };

  return (
    <div className="App">
      Kwiz App
      {renderGameState()}
    </div>
  );
}

export default App;
