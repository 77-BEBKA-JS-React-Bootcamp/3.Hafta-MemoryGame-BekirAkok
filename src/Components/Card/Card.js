import React from "react";

const Card = ({ id, name, flipped, matched, clicked }) => {
  return (
    <div
      onClick={() => (flipped ? undefined : clicked(name, id))}
      className={
        "card" + (flipped ? " flipped" : "") + (matched ? " matched" : "")
      }
    >
      <div className="back">LoL!</div>
      <div className="front">
        <img alt={name} src={"img/" + name + ".png"} />
      </div>
    </div>
  );
};

export default Card;
