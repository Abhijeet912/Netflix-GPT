import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-4 pt-8 px-8 mx-6 ">{title}</h1>
      <div className="flex overflow-x-auto space-x-6 scrollbar-hide">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.id}
              className="flex-shrink-0 w-40 h-60 bg-gray-800 rounded-md overflow-hidden"
            >
              <MovieCard posterPath={movie?.poster_path} />
            </div>
          ))
        ) : (
          <p className="text-white text-center w-full">No movies available</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
