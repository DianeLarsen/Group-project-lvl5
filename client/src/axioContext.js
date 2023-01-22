import React, { useEffect, useState } from "react";
import axios from "axios";

const AxioContext = React.createContext();

function AxioContextProvider(props) {
  const [lots, setLots] = useState([]);
  const lotsIntialPost = {
    lastName: "",
    lot: null,
    info: "",
  };
  const [lotCard, setLotCard] = useState(lotsIntialPost);
  function getLot() {
    axios
      .get("/lots")
      .then((res) => setLots(res.data))
      .catch((error) => console.log(error.response.data.errMsg));
  }
  useEffect(() => {
    getLot();
  }, []);
  return (
    <AxioContext.Provider >
      {props.children}
    </AxioContext.Provider>
  );
}

export { AxioContext, AxioContextProvider };
