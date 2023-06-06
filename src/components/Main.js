import React, { useState } from "react";
import { Grid } from "./Grid";

export const Main = () => {
  const [dice, setDice] = useState(allNewDice());
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({ value: Math.ceil(Math.random() * 6), isHeld: false });
    }
    return newDice;
  }
  const mapped = dice.map((item) => <Grid value={item.value} />);
  function rollDice() {
    setDice(allNewDice());
  }
  return (
    <div className="main">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid">{mapped}</div>
      <button onClick={rollDice}>Roll</button>
    </div>
  );
};
