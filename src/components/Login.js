import React, { useState } from 'react'
import { Header } from './Header'
import { loginBg } from '../constants'

export const Login = () => {

    const [isSigninForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
            setIsSignInForm(!isSigninForm);
    }




  return (
    <div>
        
        
        
        <Header/>
        
        <div className='relative h-full'>
            <img src={loginBg} alt='background_image' className='object-cover h-full'></img>
        
        <div className="Form flex justify-center items-center bg-black bg-opacity-30 w-full h-full absolute inset-0">

            {/* Card Container */}
            <div className="relative bg-black bg-opacity-60 rounded-lg shadow-lg p-6 w-80">
                <h1 className="text-2xl font-semibold text-white mb-4">{isSigninForm?"Sign In":"Sign Up"}</h1>
                <form className="flex flex-col">

                {!isSigninForm && (<input 
                        type="text" 
                        placeholder="Name" 
                        className="p-2 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"
                    />)}

                    
                    <input 
                        type="text" 
                        placeholder="Email Address" 
                        className="p-2 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"
                    />
                    
                    <input 
                        type="password" 
                        placeholder="Password"  
                        className="p-2 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"
                    />
                    <button className="p-2 bg-red-600 hover:bg-red-700 w-full rounded-md text-white font-semibold">
                    {isSigninForm?"Sign In":"Sign Up"}
                    </button>
                </form>
                <p className='SignUp text-cyan-50 my-3 py-3 mx-2 cursor-pointer hover:underline' onClick={toggleSignInForm}>{isSigninForm?"New to netflix? Sign Up Now":"Already a member? Sign in now"}</p>
            </div>
            
        </div>
    </div>

        
        
    </div>
  )
}
