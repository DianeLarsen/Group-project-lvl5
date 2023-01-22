import React, { useState } from "react";

export default function LotsCard(props) {
  const intialPost = {
    lastName: "",
    lot: null,
    info: "",
  };
  const [lotCard, setLotCard] = useState(intialPost);
  return (
    <div className="lotsCard-container">
      <h2>Lot #</h2>
      <h4>address, email, phone</h4>
      <p>details including residents, and interets</p>
    </div>
  );
}
