import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="relative  bg-black text-white ">
      {/**
       * MovieList -Popular
       * MovieList -Top Rated
       * MovieList - Trending
       * MovieList - Action
       * MovieList - Comedy
       * MovieList - Horror
       */}
      <div className="relative -top-56 z-9 pb-4 bg-blend-multiply ps-4">
        {/* Adjust the -top value as needed for overlap */}
        <MovieList title={"Now Playing"} movies={movies?.NowPlayingMovies} />
      
      <MovieList title={"Top Rated"} movies={movies?.TopRatedMovies} />
      <MovieList title={"Popular Movies"} movies={movies?.PopularMovies} />
      <MovieList title={"Trending Today"} movies={movies?.TrendingToday} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
