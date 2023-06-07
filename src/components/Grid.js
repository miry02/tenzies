import React from "react";

export const Grid = (props) => {
  return (
    <div
      className={props.isHeld ? "held-grid-cells" : "grid-cells"}
      onClick={props.holdDice}
    >
      {props.value}
    </div>
  );
};
