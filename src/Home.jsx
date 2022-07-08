import React from "react";
import SearchForm from "./SearchForm";
import Movies from "./Movies";
import ThemeButton from "./ThemeButton";

const Home = () => {
	return (
		<main>
			<ThemeButton />
			<SearchForm />
			<Movies />
		</main>
	);
};

export default Home;
