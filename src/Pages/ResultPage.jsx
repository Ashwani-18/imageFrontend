import React, { useState } from 'react';

function ResultPage() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const BASE_URL = process.env.REACT_APP_API;

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImage(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${BASE_URL}/api/v1/image/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      if (data.success && data.image) {
        setImage(data.image);
      } else {
        setError(data.message || 'Failed to generate image.');
      }
    } catch (err) {
      setError('An error occurred while generating the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 py-8 px-4">
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-gray-200/20 dark:border-gray-800/60">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 text-center drop-shadow-lg tracking-tight">
          AI Image Generator
        </h2>
        <form onSubmit={handleGenerate} className="w-full flex flex-col gap-5 mb-8">
          <label htmlFor="prompt" className="text-base text-gray-200 font-medium mb-1">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-gray-900/80 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-base shadow-sm resize-none"
            placeholder="Describe the image you want to generate..."
            required
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-bold rounded-lg shadow-lg transition-all text-lg disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Generating...
              </>
            ) : 'Generate Image'}
          </button>
        </form>
        <div className="w-full flex flex-col items-center min-h-[300px]">
          {error && <div className="text-red-500 mb-4 text-center font-medium bg-red-100/10 border border-red-400/30 px-4 py-2 rounded-lg shadow-sm animate-pulse">{error}</div>}
          {image && (
            <div className="w-full flex flex-col items-center bg-gray-900/80 border border-gray-700 rounded-xl shadow-lg p-6">
              <img
                src={image}
                alt="Generated"
                className="rounded-xl shadow-md max-w-full max-h-[350px] border border-gray-700 bg-white/10"
              />
              <a
                href={image}
                download="generated-image.png"
                className="mt-6 inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 hover:from-blue-700 hover:to-pink-600 text-white font-bold rounded-full shadow transition-all duration-200"
              >
                Download Image
              </a>
            </div>
          )}
          {!image && !error && !loading && (
            <div className="flex flex-col items-center mt-8">
              <span className="text-gray-400 text-base">Your generated image will appear here.<br/>Try a creative prompt!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;