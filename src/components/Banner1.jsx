import React from 'react';

const Banner1 = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 min-h-[400px] flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-white space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-blue-600 text-white px-2 rounded">Free</span> & <span className="bg-blue-600 text-white px-2 rounded">Fast</span> Image Generation
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Create stunning images instantly with our AI-powered generation tool. 
            No cost, no waiting, just pure creativity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-4 py-2">
              <div className="text-2xl">🎨</div>
              <span className="font-medium">100% Free</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-4 py-2">
              <div className="text-2xl">⚡</div>
              <span className="font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center space-x-2 bg-gray-700 rounded-lg px-4 py-2">
              <div className="text-2xl">✨</div>
              <span className="font-medium">High Quality</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
