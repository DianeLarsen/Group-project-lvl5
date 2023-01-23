import React from "react";
import lotMap from "../assets/lot-map.png"
import LotsCard from "../components/LotsCard.js"
import NewLot from "../components/NewLot.js"

export default function Lots() {

  return (
    <div className="lots">
      <div className="lot-form-map-container">
      <img className="lot-map" src={lotMap} alt="lot map"/>
      <NewLot />
      </div>
      <form className="lot-form-container">
        <label>Enter Lot Number</label>
        <input type="number" placeholder="lot #" />
      </form>
      
      <LotsCard />
    </div>
  );
}