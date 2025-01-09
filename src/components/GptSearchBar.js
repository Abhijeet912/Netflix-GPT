import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import { GptAPI } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion"; // Import the suggestions component
const { GoogleGenerativeAI } = require("@google/generative-ai");

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [searchResults, setSearchResults] = useState([]); // State to hold the search results
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  const handleGptSearchClick = async () => {
    const query = searchText.current.value.trim();
    if (!query) return; // Prevent empty search

    setLoading(true);
    setError(null);
    setSearchResults([]);

    try {
      console.log(query);
      const genAI = new GoogleGenerativeAI(GptAPI);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const getPrompt =
        "Act as a movie recommendation system and suggest some movies and TV shows for the query: ";
      const getResults =
        ". Give a list of 6 movies as the name of the movie,in comma separated form eg: movie1,movie2,movie3";
      const queryOptions =
        " Don't add a header in the query result. Just return the list of movies.";
      const prompt = getPrompt + query + getResults + queryOptions;

      const result = await model.generateContent(prompt);
      const responseText = result.response.text();
      setSearchResults(responseText.split(","));
   // Split the response into lines for display
    } catch (err) {
      console.error("Error fetching GPT results:", err);
      setError("Failed to fetch recommendations. Please try again.");
    } finally {
      setLoading(false);
      searchText.current.value = null;
    }
  };
  console.log(searchResults[0]);

  return (
    <div className="flex flex-col items-center pt-12 min-h-screen relative">
      <form
        className="flex w-[500px] max-w-2xl m-4 p-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden opacity-100 relative z-10"
        onSubmit={(e) => e.preventDefault()} 
      >
        <input
          ref={searchText}
          type="text"
          className="flex-grow px-4 py-2 text-white bg-gray-700 outline-none placeholder-gray-400"
          placeholder={lang[language]?.gptSearchPlaceholder || "Search..."}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors"
          onClick={handleGptSearchClick}
        >
          {lang[language]?.search || "Search"}
        </button>
      </form>

      {/* Pass the searchResults to GptMovieSuggestion */}
      <GptMovieSuggestion
        results={searchResults}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default GptSearchBar;
