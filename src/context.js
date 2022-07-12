import React, { useState, useContext, useEffect } from "react";
import useFetch from "./useFetch";
import { getStorageTheme } from "./utils";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [query, setQuery] = useState("punisher");
	const { isLoading, error, data: movies } = useFetch(`&s=${query}`);
	const [theme, setTheme] = useState(getStorageTheme());

	const toggleTheme = () => {
		if (theme === "light-theme") {
			setTheme("dark-theme");
		} else {
			setTheme("light-theme");
		}
	};

	useEffect(() => {
		document.documentElement.className = theme;
		localStorage.setItem("theme", theme);
	});

	return (
		<AppContext.Provider
			value={{
				isLoading,
				error,
				movies,
				query,
				setQuery,
				theme,
				toggleTheme,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
