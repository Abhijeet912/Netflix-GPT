import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((store) => store?.movies?.NowPlayingMovies); // Fetch array of movies

    const getRandomMovie = () => {
        if (!movies || movies.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * movies.length);
        return movies[randomIndex];
    };

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (movies && movies.length > 0) {
            const movie = getRandomMovie();
            setSelectedMovie(movie);
        }
    }, [movies]); // Re-run when movies array changes
    //console.log(selectedMovie);
    const {original_title, overview,id} = selectedMovie || {};

    return (
        <div>
            {selectedMovie ? (
                <VideoTitle title={original_title} overview={overview} />
            ) : movies && movies.length > 0 ? (
                <p>Loading...</p>
            ) : (
                <p>No movies available</p>
            )}
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;

