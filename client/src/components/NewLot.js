import React from "react";


export default function NewLot() {
  return (
    <div className="new-lot-form">
        <form>
            <input placeholder="Lot Number"></input>
            <input placeholder="Last Name"></input>
            <input placeholder="Family Info"></input>
      <button>Enter a new Lot</button>
      </form>
    </div>
  );
}

// Enter a new lot button will pull up a form to fill out, it will look to make sure lot number isnt already taken and confirm required fields and submit will add it to the database
// as data is entered a card will apear below the form with the information and once they submit it that card will move to the main list