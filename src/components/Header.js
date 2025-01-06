import React, { useEffect, useState } from 'react';
import { logo } from '../utils/constants';
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const photoURL = useSelector((state) => state?.user?.photoURL);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({ uid, email, displayName, photoURL })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <header
      className={`fixed  top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-black px-10" : "bg-gradient-to-b from-black px-10"
      }`}
    >
      <div className="flex items-center justify-between h-14 ">
        <img src={logo} alt="Logo" className=" w-32 h-28" />
        {user && (
          <nav className="flex space-x-6 font-bold text-white">
            <a href="#home" className="hover:text-red-600 " >
              Home
            </a>
            <a href="#tvshows" className="hover:text-red-600">
              TV Shows
            </a>
            <a href="#movies" className="hover:text-red-600">
              Movies
            </a>
          </nav>
        )}
        {user && (
          <div className="flex items-center space-x-4">
            <img
              alt="username"
              className="w-8 h-8 rounded-full border-2 border-red-600"
              src={photoURL}
            />
            <button
              onClick={handleSignOut}
              className="bg-red-600 text-white text-xs font-bold rounded-md px-4 py-1"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
