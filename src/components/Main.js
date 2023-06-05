import React from "react";
import { Grid } from "./Grid";

export const Main = () => {
  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }
  const mapped = newDice.map((item) => <Grid value={item} />);
  return (
    <div className="main">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid">
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
        <Grid value={randomNumber} />
      </div>
      <button>Roll</button>
    </div>
  );
};
