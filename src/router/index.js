import React from "react";
import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
import About from "../views/About/About";

export default function RouterIndex() {
	return (
		<>
			<Routes>
				{/* <Route path="/" index element={<Login />} /> */}
				<Route path="/home" index element={<Home />} />
				<Route path="/" index element={<Home />} />
				<Route path="/about" index element={<About />} />
			</Routes>
		</>
	);
}
