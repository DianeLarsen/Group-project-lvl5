import React from "react";
//import { AxioContext } from "../axioContext";
import "../CssFiles/LotsCard.css";
import EditLots from "./EditLots";

export default function LotsCard(props) {
  const {id, info, lastName, lot, lotID, showAll, itemTarget } = props;
  const [editToggle, setEditToggle] = React.useState(false);
  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setNewLot((prevValue) => ({ ...prevValue, [name]: value }));
  //   // eslint-disable-next-line
  // }
  console.log(showAll && lotID === lot)
  return (
    <>
   {itemTarget ? (<div className="allthelots">
      
        <div
          key={id}
          className="lotsCard-container"
          style={
            showAll && (lotID === lot)
              ? { backgroundColor: "blue" }
              : { backgroundColor: "white" }
          }
        >
          {editToggle ? (
            <>
              <EditLots
                editToggle
                setEditToggle
               
                info={info}
                id={id}
                lastName={lastName}
                lot={lot}
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
              <h3>Lot #: {lot}</h3>
              <h4>Family Name: {lastName}</h4>
              <p>Family Info: {info}</p>
            </>
          )}
        </div>
      
    </div>):(<div className="allthelots">
      
      <div
        key={id}
        className="lotsCard-container"
        style={
          showAll && (lotID === lot)
            ? { backgroundColor: "blue" }
            : { backgroundColor: "white" }
        }
      >
        {editToggle ? (
          <>
            <EditLots
              editToggle
              setEditToggle
             
              info={info}
              id={id}
              lastName={lastName}
              lot={lot}
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
            <h3>Lot #: {lot}</h3>
            <h4>Family Name: {lastName}</h4>
            <p>Family Info: {info}</p>
          </>
        )}
      </div>
    
  </div>)}
    </>
  );
}
