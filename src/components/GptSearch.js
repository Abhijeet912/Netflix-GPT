import React from 'react';
import GptSearchBar from './GptSearchBar';
import { loginBg } from '../utils/constants';

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src={loginBg}
        alt="background_image"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      
      {/* Search Bar */}
      <div className="relative flex justify-center items-center min-h-screen">
        <GptSearchBar />
      </div>
    </div>
  );
};

export default GptSearch;
