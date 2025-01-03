import React, { useEffect } from 'react'
import { logo } from '../utils/constants'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { removeUser } from '../utils/userSlice';

export const Header = () => {
  const navigate = useNavigate();
  const user=useSelector((store) => store.user);
  const photoURL = useSelector(state =>  state?.user?.photoURL);
  const dispatch = useDispatch();


  useEffect(() => {
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName,photoURL} = user;
        dispatch(
          addUser({uid :uid, email:email, displayName :displayName , photoURL:photoURL})
        );
        navigate("/browse");
        
        
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
        // ...
      }
    });
    return () => {
      //cleanup
      unSubscribe();
    }

  },[dispatch, navigate])


  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
      navigate("/");

    }).catch((error) => {
    // An error happened.
    console.log(error);
});
  }
  return (
    <div className = "Header h-14 align-middle flex absolute w-full z-10 bg-gradient-to-b from-black">
        
            <img src={logo} alt='Logo' className='h-16 m-2 p-2 ms-6'></img>
            {user && <div className='w-1/2'>
              <ul className='flex flex-wrap space-x-4 mx-4 my-5 font-bold text-white cursor-pointer'>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
              </ul>
          
          </div>}
            {user && <div className='flex justify-end items-center w-full p-2'>
              <img alt="username" className='w-7 h-7 rounded-full  border-red-600' src={photoURL}></img>
              <button onClick={handleSignOut} className=' bg-red-600 text-slate-200  text-xs font-extrabold rounded-md h-8 w-12'>Signout</button>
            </div>}
        
    </div>
  )
}
