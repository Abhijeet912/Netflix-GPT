import { useState, useRef } from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import YouTube from "react-youtube";
import MuteButton from "./MuteButton"; // Import the MuteButton component

const VideoBackground = ({ movieId }) => {
  const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute
  const trailer = useMovieTrailer(movieId);
  const playerRef = useRef(null); // Ref to store YouTube player instance

  const onPlayerReady = (event) => {
    const player = event.target;
    playerRef.current = player; // Store player instance in ref
    console.log("YouTube player is ready:", player); // Debugging
    player.mute(); // Mute the video by default
    player.playVideo(); // Start playback
  };

  const toggleMute = () => {
    const player = playerRef.current;
    if (player) {
      console.log("Toggling mute. Current state:", isMuted); // Debugging
      if (isMuted) {
        player.unMute();
      } else {
        player.mute();
      }
      setIsMuted(!isMuted); // Toggle the mute state
    } else {
      console.error("YouTube player instance is not available");
    }
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
      playlist: trailer?.key, // Loop the same video (required for single video looping)
      vq: "hd1080",
    },
  };

  if (!trailer?.key) {
    return <div>Loading trailer...</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden -z-10">
      <div className="top-0 left-0 w-full h-full pointer-events-none">
        <YouTube
          videoId={trailer?.key}
          opts={opts}
          onReady={onPlayerReady}
          className="absolute top-0 left-0 w-full h-full scale-[1.7]" // Adjust scale as needed
        />
      </div>
      {/* Use the MuteButton component */}
      <MuteButton isMuted={isMuted} onToggle={toggleMute} />
    </div>
  );
};

export default VideoBackground;