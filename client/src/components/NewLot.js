import React from "react";
import "./NewLot.css"

export default function NewLot() {
  return (
    <div className="new-lot-form">
        <div className="title">Welcome</div>
      <div className="subtitle">Let's enter your lot!</div>
      <div className="input-container ic1">
      <input id="lotNum" className="input" type="number" placeholder=" " />
        <div className="cut"></div>
        <label for="lotNum" className="placeholder">Lot Number</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="lastname" className="placeholder">Family name</label>
      </div>
      <div className="input-container ic2">
        <textarea id="info" className="input" type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="info" className="placeholder">Family Info</label>
      </div>
      <button type="text" className="submit">submit</button>
    </div>
  );
}

// Enter a new lot button will pull up a form to fill out, it will look to make sure lot number isnt already taken and confirm required fields and submit will add it to the database
// as data is entered a card will apear below the form with the information and once they submit it that card will move to the main list