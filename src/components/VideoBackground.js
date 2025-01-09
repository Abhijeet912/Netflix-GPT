import { useState } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import YouTube from "react-youtube";
import VideoLoader from "./VideoLoader";

const VideoBackground = ({ movieId }) => {
  const trailer = useMovieTrailer(movieId);
  const [isVideoReady, setIsVideoReady] = useState(false); // Track when the video is ready

  const onPlayerReady = (event) => {
    event.target.mute(); // Automatically mute the video
    event.target.playVideo(); // Start playback
    setIsVideoReady(true); // Mark video as ready
  };

  const opts = {
    height: "120%",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto-play the video
      controls: 0, // Hide player controls
      modestbranding: 1, // Remove YouTube branding
      rel: 0, // Prevent showing related videos
      fs: 0, // Disable fullscreen button
      iv_load_policy: 3, // Hide annotations
      loop: 1, // Enable video looping
      playlist: trailer?.key, // Loop the same video
      vq: "hd1080", // Force HD resolution
    },
  };

  if (!trailer?.key) {
    return <VideoLoader />; // Show loading component if no trailer key is available
  }

  return (
    <div className="relative w-full h-screen overflow-hidden -z-10">
      <div className="top-0 left-0 w-full h-full pointer-events-none">
        {!isVideoReady && <VideoLoader />} {/* Show loader while video is loading */}
        <YouTube
          videoId={trailer?.key}
          opts={opts}
          onReady={onPlayerReady}
          className="absolute -top-10 left-0 w-full h-full scale-[1.5]" // Adjust scale if needed
        />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent pointer-events-none opacity-80"
        style={{ height: "200px" }} // Adjust gradient height
      ></div>
    </div>
  );
};

export default VideoBackground;
