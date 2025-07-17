import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    name: "Harsh",
    text: "Absolutely amazing! The image generation is fast and the results are stunning. Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ashwani",
    text: "I love how easy it is to use. The free service is a game changer for my projects.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Prashant",
    text: "The quality of the images is top-notch. I use it every day for my design work.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Anishka",
    text: "Fast, free, and reliable. What more could you ask for? 10/10!",
    // Girl image for Anishka
    avatar: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Ritu",
    text: "This tool exceeded my expectations. The interface is clean and intuitive.",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg"
  }
];

const AUTO_SCROLL_INTERVAL = 4000; // ms

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const prevReview = () => {
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Pause auto-scroll on manual navigation, then resume
  const handleManualNav = (navFn) => {
    clearInterval(intervalRef.current);
    navFn();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, AUTO_SCROLL_INTERVAL);
  };

  return (
    <section
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-[320px] flex items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Decorative Blurs (matching Banner2) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-700 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-700 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-white drop-shadow-lg">
          What Our Users Say
        </h2>
        <div className="relative w-full flex items-center justify-center">
          {/* Slider */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Previous Button (for desktop) */}
            <button
              onClick={() => handleManualNav(prevReview)}
              className="hidden md:flex p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition absolute left-0 top-1/2 -translate-y-1/2 z-10 border border-blue-700"
              aria-label="Previous review"
            >
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* Review Card */}
            <div className="flex-1 max-w-2xl bg-gray-800 bg-opacity-95 rounded-3xl shadow-2xl px-8 py-10 flex flex-col items-center border border-gray-700 min-h-[320px] relative">
              {/* Gradient bar (like Banner2) */}
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full blur-md opacity-70"></span>
              <img
                src={reviews[current].avatar}
                alt={reviews[current].name}
                className="w-20 h-20 rounded-full border-4 border-blue-500 mb-6 shadow-lg"
              />
              <p className="text-xl text-gray-200 italic mb-6 text-center leading-relaxed">
                "{reviews[current].text}"
              </p>
              <span className="font-semibold text-blue-300 text-lg">{reviews[current].name}</span>
              <div className="flex items-center mt-6 space-x-2">
                {/* Previous Button (for mobile) */}
                <button
                  onClick={() => handleManualNav(prevReview)}
                  className="md:hidden p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition border border-blue-700"
                  aria-label="Previous review"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {/* Dots */}
                <div className="flex space-x-1">
                  {reviews.map((_, idx) => (
                    <span
                      key={idx}
                      className={`inline-block w-3 h-3 rounded-full transition-all duration-200 ${idx === current ? 'bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 scale-110' : 'bg-gray-700'}`}
                    ></span>
                  ))}
                </div>
                {/* Next Button (for mobile) */}
                <button
                  onClick={() => handleManualNav(nextReview)}
                  className="md:hidden p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition border border-blue-700"
                  aria-label="Next review"
                >
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              {/* Gradient bar (like Banner2) */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-md opacity-60"></span>
            </div>
            {/* Next Button (for desktop) */}
            <button
              onClick={() => handleManualNav(nextReview)}
              className="hidden md:flex p-3 rounded-full bg-gray-800 hover:bg-blue-700 transition absolute right-0 top-1/2 -translate-y-1/2 z-10 border border-blue-700"
              aria-label="Next review"
            >
              <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Bottom gradient bar (like Banner2) */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-full opacity-70 mt-10"></div>
      </div>
    </section>
  );
};

export default Reviews;





