import React from "react";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { useGlobalContext } from "./context";

const ThemeButton = () => {
	const { theme, toggleTheme } = useGlobalContext();

	return (
		<div className="theme-container">
			<button className="theme-btn" onClick={toggleTheme}>
				{theme === "light-theme" ? <FaMoon /> : <FaSun />}
			</button>
		</div>
	);
};

export default ThemeButton;
