import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 pt-1 pb-8 mt-12 shadow-inner w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-6">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="flex items-center space-x-3">
            <svg
              className="w-7 h-7 text-blue-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-white text-lg font-semibold tracking-wide">
              AI Image Producer
            </span>
          </div>
          <span className="text-gray-400 text-sm max-w-xs text-center md:text-left">
            Create stunning AI-generated images instantly. Fast, secure, and affordable credits-based platform.
          </span>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-3 mt-6 md:mt-0">
          <div className="flex space-x-6">
            <a
              href="/privacy"
              className="text-gray-400 hover:text-pink-400 text-sm font-medium transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="mailto:support@aiimageproducer.com"
              className="text-gray-400 hover:text-pink-400 text-sm font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </div>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71c-.7-.02-1.36-.21-1.94-.53v.05a4.28 4.28 0 0 0 3.43 4.19c-.33.09-.68.14-1.04.14-.25 0-.5-.02-.74-.07a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 24 4.59a8.5 8.5 0 0 1-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02a9.2 9.2 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.54 22 16.74 22 12.26 22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72zm0 0" />
              </svg>
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.634 2.2 15.25 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.29.058-2.18.25-2.95.53-.8.29-1.48.67-2.15 1.34-.67.67-1.05 1.35-1.34 2.15-.28.77-.472 1.66-.53 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.29.25 2.18.53 2.95.29.8.67 1.48 1.34 2.15.67.67 1.35 1.05 2.15 1.34.77.28 1.66.472 2.95.53C8.332 23.988 8.736 24 12 24c3.264 0 3.668-.012 4.948-.07 1.29-.058 2.18-.25 2.95-.53.8-.29 1.48-.67 2.15-1.34.67-.67 1.05-1.35 1.34-2.15.28-.77.472-1.66.53-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.29-.25-2.18-.53-2.95-.29-.8-.67-1.48-1.34-2.15-.67-.67-1.35-1.05-2.15-1.34-.77-.28-1.66-.472-2.95-.53C15.668.012 15.264 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.844-10.406a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-4 flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
        <span className="text-gray-500 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} AI Image Producer. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;



