import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
export default function RouterIndex() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
