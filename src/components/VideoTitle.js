import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold font-sans'>{title}</h1>
        <p className='py-6 w-1/3'>{overview}</p>
        <div className='p-2 space-x-3'>
            <button className='bg-gray-400 font-semibold text-black w-24 h-8 rounded-sm'>Play ▶︎</button>
            <button className='bg-gray-400 text-black w-24 h-8 rounded-sm'>More infoⓘ</button>
        </div>
    </div>
  )
}

export default VideoTitle