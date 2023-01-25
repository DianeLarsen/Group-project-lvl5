import React from "react";
import { AxioContext } from "../axioContext";
import "../CssFiles/LotsCard.css"

export default function LotsCard(props) {
  const {lots} = React.useContext(AxioContext);
  
  return (
   
    <div className="allthelots">
    
      {lots.length > 0 &&
        lots.map((stuff) => {
         return stuff.lot === "" ? <h1>No Lots Found</h1>  :
            (
              <div key={stuff._id} className="lotsCard-container">
              <h3>Lot #: {stuff.lot}</h3>
              <h4>Family Name: {stuff.lastName}</h4>
              <p>Family Info: {stuff.info}</p>
              </div>
           )
            
             
            }
        )}
    
    </div>
  );
}
