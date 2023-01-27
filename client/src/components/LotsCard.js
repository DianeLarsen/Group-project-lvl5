import React from "react";
import { AxioContext } from "../axioContext";
import "../CssFiles/LotsCard.css";

export default function LotsCard(props) {
  const { lots } = React.useContext(AxioContext);


  return (
    <div className="allthelots">
      
      {props.showAll
        ? lots.length > 0 &&
          lots.map((stuff) => {
            return stuff.lot === "" ? (
              <h1>No Lots Found</h1>
            ) : (
              <div key={stuff._id} className="lotsCard-container" style={props.showAll && props.lotID === stuff.lot ? {backgroundColor: "blue"}: {backgroundColor: "white"}}>
                <h3>Lot #: {stuff.lot}</h3>
                <h4>Family Name: {stuff.lastName}</h4>
                <p>Family Info: {stuff.info}</p>
              </div>
            );
          })
        : lots.filter((show) =>  Number(show.lot) === Number(props.lotID)).map((filteredlot) => (
                <div key={filteredlot._id} className="lotsCard-container">
                  <h3>Lot #: {filteredlot.lot}</h3>
                  <h4>Family Name: {filteredlot.lastName}</h4>
                  <p>Family Info: {filteredlot.info}</p>
                </div>
              ))
              }
          
    </div>
  );
}
