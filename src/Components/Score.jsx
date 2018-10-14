import React from "react";

const Score = ({ score }) => (
  <>
    {score > 0 && "+"}
    {score}
  </>
)

export default Score;