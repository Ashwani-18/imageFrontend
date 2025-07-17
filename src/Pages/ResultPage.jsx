import React, { useState } from 'react';

function ResultPage() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const BASE_URL = process.env.REACT_APP_API; // Make sure this is set in your .env

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImage(null);

    try {
      const token = localStorage.getItem('token'); // JWT auth

      const response = await fetch(`${BASE_URL}/api/v1/image/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { 'Authorization': `Bearer ${token}` } : {})
        },
        body: JSON.stringify({ prompt }), // Only send prompt
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
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #eee' }}>
      <h2 style={{ textAlign: 'center' }}>Image Generator</h2>
      <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <label htmlFor="prompt" style={{ fontWeight: 500 }}>Enter your prompt:</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          rows={3}
          style={{ padding: 8, fontSize: 16, borderRadius: 4, border: '1px solid #ccc' }}
          placeholder="Describe the image you want to generate..."
          required
        />
        <button
          type="submit"
          disabled={loading || !prompt.trim()}
          style={{
            padding: '10px 0',
            background: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: 16,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Generating...' : 'Generate Image'}
        </button>
      </form>
      <div style={{ marginTop: 32, minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px dashed #ccc', borderRadius: 8 }}>
        {loading && <span>Generating image, please wait...</span>}
        {!loading && image && (
          <img
            src={image}
            alt="Generated"
            style={{ maxWidth: '100%', maxHeight: 400, borderRadius: 8 }}
          />
        )}
        {!loading && !image && !error && (
          <span style={{ color: '#888' }}>Your generated image will appear here.</span>
        )}
        {!loading && error && (
          <span style={{ color: 'red' }}>{error}</span>
        )}
      </div>
    </div>
  );
}

export default ResultPage;