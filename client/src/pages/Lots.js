import React from "react";
import lotMap from "../assets/lot-map.png";
import LotsCard from "../components/LotsCard.js";
import NewLot from "../components/NewLot.js";
import { AxioContext } from "../axioContext";



export default function Lots() {

  const { lotsUsed } = React.useContext(AxioContext);
  const [itemTarget, setItemTarget] = React.useState(true);
  const [lotID, setLotID] = React.useState("");
  console.log(itemTarget)
  const [showAll, setShowAll] = React.useState(false);
  function setTarget(target) {
    setItemTarget(lotsUsed.some((element) => element === target));
    setLotID(target)
    console.log(lotID)
  }
  return (
    <div className="lots">
    
      <div className="lot-form-map-container">
      <h1>Click on a lot below for information</h1>
      <button className="show-all" onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "Hide all" : "Show all"}
      </button>
        <img
          src={lotMap}
          alt="lot map"
          className="maparea"
          useMap="#image-map"
        />

        <map name="image-map">
          <area
            target="_blank"
            alt="Lot 1"
            title="Lot-1"
            style={{ background: "black" }}
            coords="75,261,27,184"
            shape="rect"
            id="1"
            onClick={() => setTarget(1)}
           
          />

          <area
            target="_blank"
            alt="Lot 2"
            title="Lot-2"
            coords="76,185,119,261"
            shape="rect"
            id="2"
            onClick={() => setTarget(2)}
          />
          <area
            target="_blank"
            alt="Lot 3"
            title="Lot 3"
            coords="166,262,121,184"
            shape="rect"
            id="3"
            onClick={() => setTarget(3)}
          />
          <area
            target="_blank"
            alt="Lot 4"
            title="Lot 4"
            coords="168,182,211,261"
            shape="rect"
            id="4"
            onClick={() => setTarget(4)}
          />
          <area
            target=""
            alt="Lot 5"
            title="Lot 5"
            coords="214,182,257,261"
            shape="rect"
            id="5"
            onClick={() => setTarget(5)}
          />
          <area
            target=""
            alt="Lot 6"
            title="Lot 6"
            coords="258,184,303,261"
            shape="rect"
            id="6"
            onClick={() => setTarget(6)}
          />
          <area
            target=""
            alt="Lot 7"
            title="Lot 7"
            coords="305,183,348,262"
            shape="rect"
            id="7"
            onClick={() => setTarget(7)}
          />
          <area
            target=""
            alt="Lot 8"
            title="Lot 8"
            coords="351,182,395,260"
            shape="rect"
            id="8"
            onClick={() => setTarget(8)}
          />
          <area
            target=""
            alt="Lot 9"
            title="Lot 9"
            coords="398,183,442,261"
            shape="rect"
            id="9"
            onClick={() => setTarget(9)}
          />
          <area
            target=""
            alt="Lot 10"
            title="Lot 10"
            coords="465,219,549,261"
            shape="rect"
            id="10"
            onClick={() => setTarget(10)}
          />
          <area
            target=""
            alt="Lot 11"
            title="Lot 11"
            coords="549,216,465,179"
            shape="rect"
            id="11"
            onClick={() => setTarget(11)}
          />
          <area
            target=""
            alt="Lot 12"
            title="Lot 12"
            coords="548,174,464,130"
            shape="rect"
            id="12"
            onClick={() => setTarget(12)}
          />
          <area
            target=""
            alt="Lot 13"
            title="Lot 13"
            coords="469,79,520,57,549,65,552,125,463,126"
            shape="poly"
            id="13"
            onClick={() => setTarget(13)}
          />
          <area
            target=""
            alt="Lot 14"
            title="Lot 14"
            coords="466,72,514,49,529,46,548,54,548,6,455,6,454,63"
            shape="poly"
            id="14"
            onClick={() => setTarget(14)}
          />
          <area
            target=""
            alt="Lot 15"
            title="Lot 15"
            coords="454,8,377,68"
            shape="rect"
            id="15"
            onClick={() => setTarget(15)}
          />
          <area
            target=""
            alt="Lot 16"
            title="Lot 16"
            coords="437,73,375,74,377,115,443,115,442,93"
            shape="poly"
            id="16"
            onClick={() => setTarget(16)}
          />
          <area
            target=""
            alt="Lot 17"
            title="Lot 17"
            coords="444,118,378,156"
            shape="rect"
            id="17"
            onClick={() => setTarget(17)}
          />
          <area
            target=""
            alt="Lot 18"
            title="Lot 18"
            coords="373,117,309,157"
            shape="rect"
            id="18"
            onClick={() => setTarget(18)}
          />
          <area
            target=""
            alt="Lot 19"
            title="Lot 19"
            coords="374,74,311,115"
            shape="rect"
            id="19"
            onClick={() => setTarget(19)}
          />
          <area
            target=""
            alt="Lot 20"
            title="Lot 20"
            coords="374,8,303,70"
            shape="rect"
            id="20"
            onClick={() => setTarget(20)}
          />
          <area
            target=""
            alt="Lot 21"
            title="Lot 21"
            coords="296,5,231,70"
            shape="rect"
            id="21"
            onClick={() => setTarget(21)}
          />
          <area
            target=""
            alt="Lot 22"
            title="Lot 22"
            coords="229,114,287,76"
            shape="rect"
            id="22"
            onClick={() => setTarget(22)}
          />
          <area
            target=""
            alt="Lot 23"
            title="Lot 23"
            coords="230,117,287,156"
            shape="rect"
            id="23"
            onClick={() => setTarget(23)}
          />
          <area
            target=""
            alt="Lot 24"
            title="Lot 24"
            coords="225,118,167,156"
            shape="rect"
            id="24"
            onClick={() => setTarget(24)}
          />
          <area
            target=""
            alt="Lot 25"
            title="Lot 25"
            coords="225,75,167,113"
            shape="rect"
            id="25"
            onClick={() => setTarget(25)}
          />
          <area
            target=""
            alt="Lot 26"
            title="Lot 26"
            coords="225,6,159,70"
            shape="rect"
            id="26"
            onClick={() => setTarget(26)}
          />
          <area
            target=""
            alt="Lot 27"
            title="Lot 27"
            coords="154,6,95,70"
            shape="rect"
            id="27"
            onClick={() => setTarget(27)}
          />
          <area
            target=""
            alt="Lot 28"
            title="Lot 28"
            coords="94,114,146,75"
            shape="rect"
            id="28"
            onClick={() => setTarget(28)}
          />
          <area
            target=""
            alt="Lot 29"
            title="Lot 29"
            coords="146,120,93,156"
            shape="rect"
            id="29"
            onClick={() => setTarget(29)}
          />
          <area
            target=""
            alt="Lot 30"
            title="Lot 30"
            coords="89,118,28,157"
            shape="rect"
            id="30"
            onClick={() => setTarget(30)}
          />
          <area
            target=""
            alt="Lot 31"
            title="Lot 31"
            coords="89,75,30,115"
            shape="rect"
            id="31"
            onClick={() => setTarget(31)}
          />
          <area
            target=""
            alt="Lot 32"
            title="Lot 32"
            coords="90,8,29,70"
            shape="rect"
            id="32"
            onClick={() => setTarget(32)}
          />
          <area
            target=""
            alt="Lot 33"
            title="Lot 33"
            coords="552,8,695,6,679,48,658,62,668,96,668,172,685,229,670,257,553,259"
            shape="poly"
            id="33"
            onClick={() => setTarget(33)}
          />
        </map>
        
        {itemTarget ? <LotsCard lotID={lotID} showAll={showAll}/> : <NewLot />}
      </div>


      
    </div>
  );
}
