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
				<Route path="/" index element={<Login />} />
				<Route path="/home" element={<Home />} />
			</Routes>

			<Link to="/about"></Link>
			<h1>About</h1>
			<Link to="/home"></Link>
			<h1>Home</h1>
		</>
	);
}
