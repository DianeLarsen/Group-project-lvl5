import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.js";
import Lots from "../pages/Lots.js";
import Posts from "../pages/Posts.js";

export default function Main() {
  return (
    <div className="main-wrapper-outer">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lots" element={<Lots />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
      <div className="spacer-div"></div>
    </div>
  );
}
