import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";

export default function RouterIndex() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/"
          render={() =>
            localStorage.getItem("token") ? (
              <Home></Home>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Routes>
    </div>
  );
}

function Redirect(to) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to, { replace: true });
  }, []);
  return null;
}
