import React from "react";

import { AxioContext } from "../axioContext";

export default function EditLots(props) {

  const { editLots} = React.useContext(AxioContext);
//console.log(lots.lastName)
const lotsIntial = {
  lastName: props.thisLot.lastName || "",
  lot: props.thisLot.lot || "",
  info: props.thisLot.info || "",
};
const [newLot, setNewLot] = React.useState(lotsIntial);
function handleChange(event) {
  const { name, value } = event.target;
  setNewLot((prevValue) => ({ ...prevValue, [name]: value, edited: true }));
  // eslint-disable-next-line
}
  return (
    <div className="edit-lots">
      <button
        className="btn tag-green"
        onClick={() => {
          editLots(newLot, props.id);
          console.log(newLot, props.id);
          props.setEditToggle((prevToggle) => !prevToggle);
        }}
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button
        className="btn tag-red"
        onClick={() => props.setEditToggle((prevToggle) => !prevToggle)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h3>Lot #: {newLot.lot}</h3>
                    <label htmlFor="lastName" >
                    Family Name: </label>
                    <input name="lastName" id="lastName" value={newLot.lastName} onChange={handleChange}/>
                    <label htmlFor="info" >
                    Family Info: </label>
                    <textarea name="info" id="info" value={newLot.info} onChange={handleChange}/>
    </div>
  );
}
