import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";

function App() {

	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/movies/:id" element={<SingleMovie />} />
			<Route path="*" element={<Error />} />
		</Routes>
	);
}

export default App;
