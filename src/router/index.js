import React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";

export default function RouterIndex() {
	return (
		<div>
			<Routes>
				<Route path="/" index element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}
