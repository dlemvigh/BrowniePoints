import React from "react";

const User = ({ name, color, score, isSelected, onSelect }) => (
  <div
    style={{ backgroundColor: color, color: "white" }}
    className="border"
    onClick={() => onSelect(name)}
  >
    {isSelected && "*"}
    {name} has earned {score} brownie points.
    <br />
  </div>
);

export default User;