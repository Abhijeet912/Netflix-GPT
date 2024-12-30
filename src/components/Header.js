import React from 'react'
import { logo } from '../constants'

export const Header = () => {
  return (
    <div className = "Header h-14 align-middle flex absolute w-full z-10 bg-gradient-to-b from-black">
        
            <img src={logo} alt='Logo' className='h-16 m-2 p-2 ms-6'></img>
        
    </div>
  )
}
