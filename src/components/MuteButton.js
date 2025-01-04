import React from "react";

const MuteButton = ({ isMuted, onToggle }) => {
  return (
    <button
      className="absolute bottom-5 right-5 z-50 p-2 bg-black bg-opacity-50 rounded-full cursor-pointer text-white focus:outline-none"
      onClick={onToggle}
      aria-label={isMuted ? "Unmute Video" : "Mute Video"}
    >
      {isMuted ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9v6h4l5 5V4l-5 5H9z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 9v6h4l5 5V4l-5 5H9z"
          />
          <line
            x1="15"
            y1="9"
            x2="21"
            y2="15"
            stroke="currentColor"
            strokeWidth="2"
          />
          <line
            x1="15"
            y1="15"
            x2="21"
            y2="9"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      )}
    </button>
  );
};

export default MuteButton;
