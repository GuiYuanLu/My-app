import React from "react";
import { BrowserRouter } from "react-router-dom";
import Mrouter from "./router/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Mrouter />
    </BrowserRouter>
  );
}

export default App;
