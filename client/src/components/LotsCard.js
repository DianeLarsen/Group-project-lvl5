import React, { useState } from "react";
import {AxioContext} from "../axioContext"

export default function LotsCard(props) {
    const { lot, lastName, info} = React.useContext(AxioContext)
  return (
    <div className="lotsCard-container">
      <h2>{lot}</h2>
      <h4>{lastName}</h4>
      <p>{info}</p>
    </div>
  );
}
