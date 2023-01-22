import React, { useState } from "react";

export default function LotsCard(props) {
  
  return (
    <div className="lotsCard-container">
      <h2>{lotCard.lot}</h2>
      <h4>{lotCard.lastName}</h4>
      <p>{lotCard.info}</p>
    </div>
  );
}
