import React, { useState } from 'react';
import { toast } from 'react-toastify';

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
        toast.success('Image generated successfully!');
      } else {
        setError(data.message || 'Failed to generate image.');
        toast.error(data.message || 'Failed to generate image.');
      }
    } catch (err) {
      setError('An error occurred while generating the image.');
      toast.error('An error occurred while generating the image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 py-8 px-4">
      <div className="w-full max-w-xl bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">AI Image Generator</h2>
        <form onSubmit={handleGenerate} className="w-full flex flex-col gap-4 mb-8">
          <label htmlFor="prompt" className="text-base text-gray-700 dark:text-gray-200 font-medium mb-1">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition text-base shadow-sm"
            placeholder="Describe the image you want to generate..."
            required
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-sm transition-all text-base disabled:opacity-60 flex items-center justify-center"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Generating...
              </span>
            ) : 'Generate Image'}
          </button>
        </form>
        <div className="w-full flex flex-col items-center min-h-[300px]">
          {error && <div className="text-red-500 mb-4 text-center font-medium bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-lg shadow-sm">{error}</div>}
          {image && (
            <div className="w-full flex flex-col items-center">
              <img
                src={image}
                alt="Generated"
                className="rounded-xl shadow-md max-w-full max-h-[350px] border border-gray-200 dark:border-gray-700 bg-white/10"
              />
              <a
                href={image}
                download="generated-image.png"
                className="mt-4 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-all duration-200"
              >
                Download
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
