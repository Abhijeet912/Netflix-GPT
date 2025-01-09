import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTrendingToday from '../hooks/useTrendingToday';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';


export const Browse = () => {
  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch); 

  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useTrendingToday();
  return (
    <div >
    <Header/>
    {
      showGptSearch?
    <GptSearch/> :
    <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    }
    </div>
  )
}
