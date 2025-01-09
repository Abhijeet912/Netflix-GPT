import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const GptMovieSuggestion = ({ results, loading, error }) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!results || results.length === 0) {
        setMovieDetails([]);
        return;
      }

      setFetchError(null);
      

      try {
        const promises = results.map(async (movieName) => {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
              movieName
            )}&include_adult=false&page=1`,
            API_OPTIONS
          );
          const data = await response.json();
          return data.results?.[0]; // Get the first result if available
        });

        const movies = await Promise.all(promises);
        setMovieDetails(movies.filter((movie) => movie)); // Filter out null/undefined values
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setFetchError("Failed to fetch movie details. Please try again.");
      }
    };

    fetchMovies();
  }, [results]);

  if (!loading && !error && (!results || results.length === 0)) {
    return null; // Return nothing if there's nothing to display
  }

  return (
    <div className="w-3/4 max-w-2xl bg-gray-800 rounded-lg shadow-lg mt-4 p-4">
      {loading && <p className="text-white text-center">Loading recommendations...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      {fetchError && <p className="text-red-500 text-center">{fetchError}</p>}

      {!loading && !error && movieDetails && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movieDetails.map((movie, index) => (
            <div key={index} className="relative">
              {movie?.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title || movie.name}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <p className="text-gray-400 text-center">No backdrop available</p>
              )}
              <p className="text-white text-center mt-2">
                {movie.title || movie.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestion;
