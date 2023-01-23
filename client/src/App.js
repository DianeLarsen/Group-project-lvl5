import React from "react";
import "./App.css";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

import { AxioContextProvider } from "./axioContext";

function App() {
  return (
    <>
      <AxioContextProvider>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </AxioContextProvider>
    </>
  );
}

export default App;
