import React from "react";
//import { AxioContext } from "../axioContext";
import "../CssFiles/LotsCard.css";
import EditLots from "./EditLots";

export default function LotsCard(props) {
  const { lots, thisLot, lotID, showAll } = props;
  const [editToggle, setEditToggle] = React.useState(false);
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setNewLot((prevValue) => ({ ...prevValue, [name]: value }));
  //   // eslint-disable-next-line
  // }
  return (
    <div className="allthelots">
      
        <div
          key={thisLot._id}
          className="lotsCard-container"
          style={
            showAll && lotID === thisLot.lot
              ? { backgroundColor: "blue" }
              : { backgroundColor: "white" }
          }
        >
          {editToggle ? (
            <>
              <EditLots
                editToggle
                setEditToggle
                lots={lots}
                thisLot={thisLot}
              />
            </>
          ) : (
            <>
              <div>
                <button
                  className="btn"
                  onClick={() => {
                    setEditToggle((prevToggle) => !prevToggle);
                  }}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
              </div>
              <h3>Lot #: {thisLot.lot}</h3>
              <h4>Family Name: {thisLot.lastName}</h4>
              <p>Family Info: {thisLot.info}</p>
            </>
          )}
        </div>
      
    </div>
  );
}
