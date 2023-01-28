import React from "react";
import { AxioContext } from "../axioContext";

export default function EditLots(props) {
  const { lots, editLots } = React.useContext(AxioContext);
  const { setEditToggle } = props;
  const postInitial = {
    lot: lots.lot || "",
    lastName: lots.lastName || "",
    info: lots.info || "",
  };

  const [newLot, setNewLot] = React.useState(postInitial);



  return (
    <div className="edit-lots">
      <button
        className="btn tag-green"
        onClick={() => {
          editLots(newLot, lots.id);
          console.log(newLot, lots.id);
          setEditToggle((prevToggle) => !prevToggle);
        }}
      >
        <i className="fa-solid fa-check"></i>
      </button>
      <button
        className="btn tag-red"
        onClick={() => setEditToggle((prevToggle) => !prevToggle)}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
