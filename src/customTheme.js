import { createTheme } from "@mui/material/styles";

const pink = "#FFC0CB";
const lightblue = "#ADD8E6";
const purple = "#800080";
const black = "#000000";

const theme = createTheme({
	palette: {
		common: {
			pink: pink,
			lightblue: lightblue,
			purple: purple,
			black: black,
		},
		primary: {
			main: lightblue,
			mainGradient: "linear-gradient(to left, purple, lightblue)",
		},
		secondary: {
			main: purple,
			mainGradient: "linear-gradient(to right, lightblue, purple)",
		},
	},
	typography: {
		tab: {
			fontFamily: "Orbitron",
			textTransform: "none",
			fontSize: "2.5rem",
			color: lightblue,
		},
		h1: {
			fontFamily: "Orbitron",
			fontSize: "2.5em",
		},
		h2: {
			fontFamily: "Orbitron",
			fontSize: "2.5em",
		},
		subtitle1: {
			fontFamily: "Orbitron",
		},
		subtitle2: {
			fontFamily: "Orbitron",
			fontSize: "1.5rem",
		},
		buttons: {
			fontFamily: "Orbitron",
			textTransform: "none",
		},
	},
});

export default theme;
