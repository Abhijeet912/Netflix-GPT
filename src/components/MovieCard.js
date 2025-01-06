import React from 'react'
import { movieCardUrl } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img alt='' src={movieCardUrl + posterPath}></img>
    </div>
  )
}

export default MovieCard