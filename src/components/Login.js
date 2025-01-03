import React, { useRef, useState } from 'react';
import { Header } from './Header';
import { loginBg } from '../utils/constants';
import { checkValidData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

export const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  const handleOnClickButton = () => {
    setIsLoading(true);
    const message = checkValidData(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
      setIsLoading(false);
      return;
    }

    if (!isSigninForm) {
      // Sign-Up
      createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/117760750?v=4"
          }).then(() => {
            const {uid,email, displayName, photoURL} = auth.currentUser;
            // Profile updated!
            dispatch(addUser({ uid,email,displayName,photoURL}));
            // ...
            
          }).catch((error) => {
            // An error occurred
            // ...
          });
          console.log(user)
          
          
            .catch((error) => {
              setErrorMessage(`Profile update failed: ${error.message}`);
            })
        })
        .catch((error) => {
          //setErrorMessage(`${error.code}: ${error.message}`);
          //setIsLoading(false);
        });
    } else {
      // Sign-In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then(() => {
          
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
          setIsLoading(false);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="relative h-full">
        <img src={loginBg} alt="background_image" className="object-cover h-full" />
        <div className="Form flex justify-center items-center bg-black bg-opacity-30 w-full h-full absolute inset-0 pt-[180px]">
          <div className="relative bg-black bg-opacity-60 rounded-lg shadow-lg p-6 w-80 h-full">
            <h1 className="text-2xl font-semibold text-white mb-4">
              {isSigninForm ? 'Sign In' : 'Sign Up'}
            </h1>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col">
              {!isSigninForm && (
                <input
                  ref={name}
                  type="text"
                  placeholder="Name"
                  className="p-2 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"
                />
              )}
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="p-2 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-2 mb-4 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"
              />
              <p className="text-red-500 m-2 p-2">{errorMessage}</p>
              <button
                className="p-2 bg-red-600 hover:bg-red-700 w-full rounded-md text-white font-semibold"
                onClick={handleOnClickButton}
                disabled={isLoading}
              >
                {isSigninForm ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            <p
              className="SignUp text-cyan-50 my-3 py-3 mx-2 cursor-pointer hover:underline"
              onClick={toggleSignInForm}
            >
              {isSigninForm ? 'New to Netflix? Sign Up Now' : 'Already a member? Sign in now'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
