import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { Grid } from "./Grid";

export const Main = () => {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((item) => item.isHeld === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((item) => item.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDice());
    }
    return newDice;
  }

  function holdDice(id) {
    setDice((prevDice) =>
      prevDice.map((item) => {
        return item.id === id ? { ...item, isHeld: !item.isHeld } : item;
      })
    );
  }

  const mapped = dice.map((item) => (
    <Grid
      value={item.value}
      isHeld={item.isHeld}
      holdDice={() => holdDice(item.id)}
      key={item.id}
    />
  ));

  function rollDice() {
    if (!tenzies) {
      setDice((prevDice) =>
        prevDice.map((item) => {
          return item.isHeld === true ? item : generateNewDice();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }

  return (
    <div className="main">
      {tenzies && <Confetti />}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid">{mapped}</div>
      <button onClick={rollDice}>{tenzies ? "Start Game" : "Roll"}</button>
    </div>
  );
};
