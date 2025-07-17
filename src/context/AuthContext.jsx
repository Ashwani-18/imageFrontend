import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    if (token) {
      setUser({ token });
      // Fetch credits if token exists
      const fetchCredits = async () => {
        try {
          const API_BASE = process.env.REACT_APP_API;
          const res = await axios.get(`${API_BASE}/api/v1/auth/credits`, {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true
          });
          if (res.data.success) {
            setCredits(res.data.credits);
          } else {
            setCredits(null);
          }
        } catch (err) {
          setCredits(null);
        }
      };
      fetchCredits();
    } else {
      setUser(null);
      setCredits(null);
    }
  }, [token]);

  const login = (tokenValue, creditsValue) => {
    setToken(tokenValue);
    localStorage.setItem('token', tokenValue);
    setUser({ token: tokenValue });
    if (typeof creditsValue !== 'undefined') setCredits(creditsValue);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setCredits(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, credits, setCredits, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 