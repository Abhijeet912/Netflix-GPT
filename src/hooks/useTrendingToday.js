import { useDispatch } from "react-redux";
import { addTrendingToday } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingToday = () => {
      const dispatch = useDispatch();
    
      const getNowTrendingToday = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/day', API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addTrendingToday(json.results));
      }
    
    
      useEffect(() => {
        getNowTrendingToday();
      },[])
    
};

export default useTrendingToday;