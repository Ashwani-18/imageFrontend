import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Layout from '../components/Layout';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill in all fields.');
      return;
    }
    toast.success('Message sent! (Demo only)');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 p-4">
      <div className="w-full max-w-md bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 dark:text-white">Contact Us</h1>
        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">Have questions or feedback? We'd love to hear from you!</p>
        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <div>
            <label className="block text-gray-700 dark:text-gray-200 text-sm mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 text-sm mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 text-sm mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              placeholder="Your Message"
              rows={4}
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-md transition-all text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default ContactUs; 