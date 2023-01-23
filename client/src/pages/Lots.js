import React from "react";
import lotMap from "../assets/lot-map.png"
import LotsCard from "../components/LotsCard.js"

export default function Lots() {

  return (
    <div className="lots">
      <img className="lot-map" src={lotMap} alt="lot map"/>
      <button>Enter a new Lot</button>
      <form>
        <label>Enter Lot Number</label>
        <input type="number" placeholder="lot #" />
      </form>
      <LotsCard />
    </div>
  );
}