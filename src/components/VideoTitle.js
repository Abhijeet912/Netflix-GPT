import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12 z-25 absolute'>
        <h1 className='text-6xl font-bold font-sans text-white'>{title}</h1>
        <p className='py-6 w-1/3 text-white font-light'>{overview}</p>
        <div className='p-2 space-x-3 '>
            <button className='bg-white font-semibold text-black w-24 h-8 rounded-sm'>Play ▶︎</button>
            <button className='bg-white text-black w-24 h-8 rounded-sm opacity-50'>More infoⓘ</button>
        </div>
    </div>
  )
}

export default VideoTitle