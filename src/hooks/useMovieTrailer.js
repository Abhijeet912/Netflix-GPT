import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const [trailer, setTrailer] = useState(null); // State to hold the trailer data

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        if (!response.ok) {
          throw new Error(`Error fetching videos: ${response.status}`);
        }
        const data = await response.json();
  
        // Filter for trailer
        const trailerData = data.results.filter((video) => video.type === "Trailer");
        setTrailer(trailerData.length > 0 ? trailerData[0] :data.results[0] ); // Set the first trailer
      } catch (error) {
        console.error('Failed to fetch movie videos:', error);
      }
    };
  
    useEffect(() => {
      if (movieId) {
        getMovieVideos();
      }
    }, [movieId]);
    
    return trailer;
}

export default useMovieTrailer;