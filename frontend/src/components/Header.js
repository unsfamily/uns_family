import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

const Header = ({ onLogin, onSignup }) => {
   const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`text-white w-full top-0 z-50 transition-all duration-300 ${
        isSticky ? 'fixed bg-gradient-to-r from-white-700 to-emerald-600 shadow-md' : 'bg-green-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#">
          <img src="images/logo.png" alt="Logo" className="w-24" />
        </a>
        <div className="flex space-x-4">
          <a
            href="#"
            onClick={onLogin}
            className="text-white hover:underline"
          >
            Sign In
          </a>
          <a
            href="#"
            onClick={onSignup}
            className="text-white hover:underline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};


export default Header;
