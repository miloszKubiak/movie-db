import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
	const { id } = useParams();
	const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

	if (isLoading) {
		return <div className="loading"></div>;
	}

	if (error.show) {
		return (
			<div className="error-page">
				<h1>{error.msg}</h1>
				<Link to="/" className="btn">
					back to movies
				</Link>
			</div>
		);
	}

	const {
		Poster: poster,
		Title: title,
		Plot: plot,
		Year: year,
		Genre: genre,
		imdbRating,
		Actors: actors,
	} = movie;

	return (
		<section className="single-movie">
			<img src={poster} alt={title} />
			<div className="single-movie-info">
				<h2>{title}</h2>
				<h3>{year}</h3>
				<p>{plot}</p>
				<p>{genre}</p>
				<p>{actors}</p>
				<h4>IMDb Rating: {imdbRating}</h4>
				<Link to="/" className="btn">
					back to movies
				</Link>
			</div>
		</section>
	);
};

export default SingleMovie;
