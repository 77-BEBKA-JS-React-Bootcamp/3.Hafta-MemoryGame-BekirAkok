import React from "react";

const GameOver = ({ restartGame }) => {
  return (
    <div className="centered">
      <h1>Supreme troll Congrats!</h1>
      <button className="restart-button" onClick={restartGame}>
       Play Again ?
      </button>
    </div>
  );
};

export default GameOver;
