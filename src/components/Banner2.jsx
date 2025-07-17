import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Banner2 = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  const handleClick = () => {
    if (token) {
      navigate('/result');
    } else {
      navigate('/login');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[320px] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-700 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="max-w-3xl w-full mx-auto">
        <div className="bg-gray-800 bg-opacity-95 rounded-3xl shadow-2xl p-12 flex flex-col items-center space-y-10 border border-gray-700">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight drop-shadow-lg">
            Click on this button to create image
          </h2>
          <button
            className={`group relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400/40 ${!token ? 'opacity-50' : 'hover:from-blue-700 hover:to-purple-700'}`}
            onClick={handleClick}
            title={!token ? 'Please login to generate images' : ''}
          >
            <span className="flex items-center space-x-3">
              <svg className="w-7 h-7 text-white group-hover:animate-pulse transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v4m0 8v4m8-8h-4m-8 0H4m15.07-7.07l-2.83 2.83m-8.48 8.48l-2.83 2.83m0-14.14l2.83 2.83m8.48 8.48l2.83 2.83" />
              </svg>
              <span>Generate Image</span>
            </span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-md opacity-60"></span>
          </button>
          {!token && (
            <div className="mt-2 text-pink-400 text-sm font-medium">Please login to generate images.</div>
          )}
          <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full opacity-70"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;




