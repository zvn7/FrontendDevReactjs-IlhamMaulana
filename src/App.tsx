import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetailsComponent from "./pages/Detail";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<RestaurantDetailsComponent />} />
			</Routes>
		</Router>
	);
};

export default App;
