import React, { useState } from 'react';
import Label from "../components/Layout";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!name || !email || !password || !confirm) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (password !== confirm) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      const API_BASE = process.env.REACT_APP_API;
      const response = await axios.post(`${API_BASE}/api/v1/auth/signup`, {
        name,
        email,
        password,
        role: 0 // default role
      });
      if (response.data.success) {
        setMessage('Signup successful! You can now log in.');
        toast.success('Signup successful! Please log in.');
        setName('');
        setEmail('');
        setPassword('');
        setConfirm('');
        setTimeout(() => navigate('/login'), 1500); // Redirect after 1.5s
      } else {
        setMessage(response.data.message || 'Signup failed.');
        toast.error(response.data.message || 'Signup failed.');
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Signup failed.');
      toast.error(error.response?.data?.message || 'Signup failed.');
    }
  };

  return (
    <Label>
      <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-indigo-900 via-gray-900 to-pink-900">
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-700 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-600 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col items-center mb-6">
            <div className="bg-gradient-to-tr from-pink-500 to-indigo-500 rounded-full p-2 mb-2 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-1 tracking-tight">Create Account</h2>
            <p className="text-gray-400 text-base">Sign up to get started</p>
          </div>
          {message && (
            <div className="mb-4 text-center text-sm text-pink-400 font-medium">{message}</div>
          )}
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                placeholder="Enter your password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <div>
              <label className="block text-gray-300 text-sm mb-1" htmlFor="confirm">Confirm Password</label>
              <input
                id="confirm"
                type="password"
                className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
                placeholder="Confirm your password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                autoComplete="new-password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-pink-500 to-indigo-600 hover:from-pink-600 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-md transition-all text-lg"
            >
              Signup
            </button>
          </form>
          <div className="flex justify-between items-center mt-6">
            <a
              href="/login"
              className="text-indigo-400 hover:text-pink-400 transition-colors text-sm font-semibold"
            >
              Already have an account? Login
            </a>
          </div>
        </div>
      </div>
    </Label>
  );
};

export default Signup;

