import React, { useState } from 'react';
import Label from "../components/Layout";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const API_BASE = process.env.REACT_APP_API;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login: authLogin, setCredits } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE}/api/v1/auth/login`, { email, password });
      if (response.data.success && response.data.token) {
        localStorage.setItem('token', response.data.token);
        toast.success('Login successful!');
        // Fetch credits after login
        try {
          const creditsRes = await axios.get(`${API_BASE}/api/v1/auth/credits`, {
            headers: {
              Authorization: `Bearer ${response.data.token}`
            },
            withCredentials: true
          });
          if (creditsRes.data.success) {
            setCredits(creditsRes.data.credits);
            authLogin(response.data.token, creditsRes.data.credits);
          } else {
            authLogin(response.data.token);
          }
        } catch (err) {
          authLogin(response.data.token);
        }
        navigate('/'); // Redirect immediately after login
      } else {
        toast.error(response.data.message || 'Login failed.');
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed.');
    }
    setLoading(false);
  };

  const handleForgotPassword = () => {
    toast.info('Forgot password clicked (dummy logic).');
  };

  return (
    <Label>
      <div className="h-full w-full flex-1 flex flex-col justify-center items-center px-4" style={{ background: 'linear-gradient(135deg, #18181b 0%, #232946 100%)' }}>
        <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-700 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-600 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
          <div className="flex flex-col items-center mb-6">
            <div className="bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full p-2 mb-2 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-1 tracking-tight">Welcome Back</h2>
            <p className="text-gray-400 text-base">Sign in to your account</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-5">
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
                autoComplete="current-password"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-semibold rounded-lg shadow-md transition-all text-lg"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-indigo-400 hover:text-pink-400 transition-colors text-sm font-medium"
            >
              Forgot Password?
            </button>
            <a
              href="/signup"
              className="text-pink-400 hover:text-indigo-400 transition-colors text-sm font-semibold"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </Label>
  );
};

export default Login;








