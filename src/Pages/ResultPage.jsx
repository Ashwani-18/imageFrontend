import React, { useState } from "react";
import axios from "axios";

const ResultPage = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setImage(null); // Clear previous image

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("You must be logged in to generate images.");
        setLoading(false);
        return;
      }

      console.log("Sending token:", token); // ✅ Debugging line

      const response = await axios.post(
        "https://imagebackend-rk86.onrender.com/api/v1/image/generate-image",
        { prompt },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Sending token
          },
        }
      );

      if (response.data.success) {
        setImage(response.data.image);
      } else {
        alert(response.data.message || "Image generation failed.");
      }
    } catch (error) {
      console.error("Error generating image:", error);

      if (error.response?.status === 401) {
        alert("Unauthorized: Please login again.");
      } else {
        alert("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Generate AI Image</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your image prompt"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </form>

      {image && (
        <div style={{ marginTop: "20px" }}>
          <h3>Result:</h3>
          <img
            src={image}
            alt="Generated"
            width="512"
            height="512"
            style={{ borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.2)" }}
          />
        </div>
      )}
    </div>
  );
};

export default ResultPage;
