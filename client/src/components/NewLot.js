import React from "react";
import "../CssFiles/NewLot.css";
import { AxioContext } from "../axioContext";

export default function NewLot() {
  

  const { handleChange, handleSubmit, nlot, nlastName, ninfo, validInput, checkLot } = React.useContext(AxioContext);
  return (
    <div className="new-lot-form">
      <div className="title">Lot does not exist</div>
      <div className="subtitle">Let's enter your lot!</div>
      <p className="required"> * all fields required</p>
      <div className="input-container ic1">
        <input
          id="lotNum"
          className="input"
          type="tel"
          placeholder=" "
          name="lot"
          value={nlot}
          onChange={handleChange}
          min="1" max="32"
          style={checkLot ? {width: "220px"}: {width: "150px"}}
          required
        />
        <div className="cut" style={checkLot ? {width: "180px"}: {width: "85px"}}></div>
        {checkLot ? <label htmlFor="lotNum" className="placeholder"style={checkLot && {color: "red", width: "250px"}}>
         * Lot Number (already in use)
        </label> : <label htmlFor="lotNum" className="placeholder">
          * Lot Number
        </label>}
      </div>
      <div className="input-container ic2">
        <input
          id="lastname"
          className="input"
          type="text"
          placeholder=" "
          name="lastName"
          value={nlastName}
          onChange={handleChange}
          required
        />
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">
        * Family name
        </label>
      </div>
      <div className="input-container ic2">
        <textarea
          id="info"
          className="input"
          type="text"
          placeholder=" "
          name="info"
          value={ninfo}
          onChange={handleChange}
          required
        />
        <div className="cut cut-short"></div>
        <label htmlFor="info" className="placeholder">
        * Family Info
        </label>
      </div>
      <button type="text" disabled={validInput} className="submit" onClick={handleSubmit}>
        {!validInput ? "Submit" : "Missing or Incorrect Fields"}
      </button>
    </div>
  );
}

