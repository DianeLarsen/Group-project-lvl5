import React, { useState } from "react";
import { AxioContext } from "../axioContext";

export default function LotsCard(props) {
  const [lots, setLots] = React.useContext(AxioContext);
  console.log(lots)
  return (
   
    <div className="allthelots">
    
      {lots.length > 0 &&
        lots.map((stuff) => {
          if (stuff.lot === null) {
            return;
          } else {
            return (
              <div key={stuff._id} className="lotsCard-container">
              <h2>{stuff.lot}</h2>
              <h4>{stuff.lastName}</h4>
              <p>{stuff.info}</p>
              </div>
           )
          }
        })}
    
    </div>
  );
}
