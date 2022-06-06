import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import customTheme from "./customTheme";

const App = () => {
	return (
		<ThemeProvider theme={customTheme}>
			<Routes>
				<Route path="/home/:id" element={<Home />} />
			</Routes>
			//{" "}
		</ThemeProvider>
	);
};

export default App;
