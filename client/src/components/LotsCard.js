import React from "react";
import { AxioContext } from "../axioContext";

export default function LotsCard(props) {
  const {lots} = React.useContext(AxioContext);
  console.log(lots)
  return (
   
    <div className="allthelots">
    
      {lots.length > 0 &&
        lots.map((stuff) => {
          if (stuff.lot === "") {
            return;
          } else {
            return (
              <div key={stuff._id} className="lotsCard-container">
              <h3>Lot #: {stuff.lot}</h3>
              <h4>Family Name: {stuff.lastName}</h4>
              <p>Family Info: {stuff.info}</p>
              </div>
           )
          }
        })}
    
    </div>
  );
}
