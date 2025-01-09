import React from 'react';

const VideoLoader = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-red-600"></div>
      <p className="text-white font-semibold text-lg ml-4">Loading...</p>
    </div>
  );
};

export default VideoLoader;
