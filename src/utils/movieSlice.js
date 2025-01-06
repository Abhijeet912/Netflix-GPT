import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        NowPlayingMovies : null,
        TopRatedMovies : null,
        PopularMovies : null,
        TrendingToday: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) =>  {
            state.NowPlayingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.PopularMovies = action.payload;
        },
        addTrendingToday : (state, action) => {
            state.TrendingToday = action.payload;
        }
        
    },
});
export const {addNowPlayingMovies,addTopRatedMovies ,addPopularMovies, addTrendingToday} =movieSlice.actions;
export default movieSlice.reducer;