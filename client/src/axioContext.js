import React, { useEffect, useState } from "react";
import axios from "axios";

const AxioContext = React.createContext();

function AxioContextProvider(props) {
  const [validInput, setValidInput] = useState(true);
  const [lotsUsed, setLotsUsed] = useState([]);
  const [checkLot, setCheckLot] = useState(true);
  const [lots, setLots] = useState([]);
  const lotsIntial = {
    lastName: "",
    lot: "",
    info: "",
  };
  const [lotCard, setLotCard] = useState(lotsIntial);
  
  function getLot() {
    axios
      .get("/lots")
      .then((res) => {
        const newCard = res.data;

        setLots(newCard);
      })
      .catch((error) => console.log(error.response.data.errMsg));
  }
  useEffect(() => {
    getLot();
  }, []);
  useEffect(() => {
    lots.map((thelot) => {
      return setLotsUsed((prev) => [...prev, thelot.lot]);
      
    });
    // eslint-disable-next-line
  }, [lots]);
  useEffect(() => {
    if (
      lotCard.lot !== "" &&
      lotCard.lastName !== "" &&
      lotCard.info !== "" &&
      checkLot === false
    ) {
      setValidInput(false);
    } else {
      setValidInput(true);
    }
    // eslint-disable-next-line
  }, [lotCard]);
useEffect(() => {
  setCheckLot(false);
  handleLotCheck(lotCard.lot)
  // eslint-disable-next-line
},[lotCard.lot])  
function handleLotCheck(num){
  lotsUsed.map((that) => {
    if (Number(num) === Number(that) && Number(num) > 0 && Number(num) < 32) {
      
      return setCheckLot(true);
     
    }
    return that
  }
  )
}
  function handleChange(event) {
    const { name, value } = event.target;
    
    if (name === "lot") {
      handleLotCheck(value)
    }

    setLotCard((prevValue) => ({ ...prevValue, [name]: value }));
    // eslint-disable-next-line
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newLots = {
      lot: lotCard.lot,
      lastName: lotCard.lastName,
      info: lotCard.info,
    };

    console.log(newLots);
    axios
      .post("/lots", newLots)
      .then((res) => {
        getLot(res);
      })
      .catch((err) => console.log(err));

    setLotCard(lotsIntial);
  }
  function editLots(updates, postID) {
    
    axios
      .put(`/lots/${postID}`, updates)
      .then((res) =>
        setLots((prevdata) =>
          prevdata.map((post) => (post._id !== postID ? post : res.data))
        )
      )
      .catch((error) => console.log(error));
  }
  return (
    <AxioContext.Provider
      value={{
        lots,
        nlot: lotCard.lot,
        nlastName: lotCard.lastName,
        ninfo: lotCard.info,
        handleChange,
        handleSubmit,
        validInput,
        checkLot,
        lotsUsed,
        editLots
      }}
    >
      {props.children}
    </AxioContext.Provider>
  );
}

export { AxioContext, AxioContextProvider };
