import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12 z-25 absolute bg-gradient-to-r from-black to-transparent w-1/2 h-[800px]'>
        <h1 className='text-6xl font-bold font-sans text-white'>{title}</h1>
        <p className='py-6 w- text-white font-light'>{overview}</p>
        <div className=' space-x-3  '>
            <button className='bg-white font-semibold text-black w-24 h-8 rounded-sm hover:opacity-80'>Play ▶︎</button>
            <button className='bg-gray-400 text-white font-semibold w-24 h-8 rounded-sm hover:opacity-80'>More infoⓘ</button>
        </div>
    </div>
  )
}

export default VideoTitle