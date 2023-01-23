import React, { useEffect, useState } from "react";
import axios from "axios";

const AxioContext = React.createContext();

function AxioContextProvider(props) {
  const [lots, setLots] = useState([]);
  const lotsIntial = {
    lastName: "",
    lot: "",
    info: "",
  };
  const [lotCard, setLotCard] = useState(lotsIntial);
  console.log(lotCard);
  function getLot() {
    axios
      .get("/lots")
      .then((res) => {
        const newCard = res.data;
        console.log(newCard);
        setLots(newCard);
      })
      .catch((error) => console.log(error.response.data.errMsg));
  }
  useEffect(() => {
    getLot();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setLotCard((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newLots = {
      lot: lotCard.lot,
      lastName: lotCard.lastName,
      info: lotCard.info,
    };
   
console.log(newLots)
    axios
      .post("/lots", newLots)
      .then((res) => {
        getLot(res);
      })
      .catch((err) => console.log(err));

    setLotCard(lotsIntial);
  }

  return (
    <AxioContext.Provider
      value={{
        lots,
        nlot: lotCard.lot,
        nlastName: lotCard.lastName,
        ninfo: lotCard.info,
        handleChange, handleSubmit} }      
    >
      {props.children}
    </AxioContext.Provider>
  );
}

export { AxioContext, AxioContextProvider };
