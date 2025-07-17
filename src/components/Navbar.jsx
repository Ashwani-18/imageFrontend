import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, credits, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-white text-xl font-bold">AI Image Producer</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
               <a 
                href="/" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
               <a 
                href="/contact" 
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact 
              </a>
              
              <a 
                href="/buy-credits" 
                className="text-pink-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Buy Credits
              </a>
              {user && (
                <span className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium ml-2">
                  Credits: {credits !== null ? credits : '...'}
                </span>
              )}
              {user ? (
                <button
                  onClick={() => {
                    logout();
                    navigate('/');
                  }}
                  className="text-red-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              ) : (
                <a 
                  href="/login" 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  Login
                </a>
              )}
            </div>

          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
              <a 
                href="/" 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="/pricing" 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Pricing
              </a>
              <a 
                href="/buy-credits" 
                className="text-pink-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Buy Credits
              </a>
              <a 
                href="/login" 
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

