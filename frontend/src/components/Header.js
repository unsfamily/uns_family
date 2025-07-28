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
      className={`text-white bg-gradient-to-r w-full top-0 z-50 transition-all duration-300 ${
        isSticky ? 'fixed bg-gradient-to-r from-green-900 to-emerald-600 shadow-md' : 'bg-white-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="images/logo.png" alt="Logo" className="w-24" />
        </Link>
        <div className="flex space-x-4">
          <Link
            to="/login"
            className="text-black hover:underline"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="text-black hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
