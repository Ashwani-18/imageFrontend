import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const plans = [
  { id: '100', credits: 100, price: 50 },
  { id: '150', credits: 150, price: 70 },
  { id: '210', credits: 210, price: 100 },
];

const BuyCredits = () => {
  const { token, setCredits } = useAuth();
  const navigate = useNavigate();
  const [redirecting, setRedirecting] = useState(false);

  const handleBuy = async (planId) => {
    try {
      console.log('Token being sent:', token); // Debug log
      const res = await fetch(`${process.env.REACT_APP_API}/api/v1/transaction/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan: planId }),
        credentials: 'include',
      });
      const data = await res.json();
      if (!data.success) throw new Error(data.message);
      const { order, credits } = data;
      const options = {
        key: 'rzp_test_t4xctPkFQfISQg', // Test key
        amount: order.amount,
        currency: order.currency,
        name: 'AI Image Producer',
        description: `${credits} Credits`,
        order_id: order.id,
        handler: async function (response) {
          try {
            const verifyRes = await fetch(`${process.env.REACT_APP_API}/api/v1/transaction/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                plan: planId,
              }),
              credentials: 'include',
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              setCredits(verifyData.credits);
              toast.success('Payment successful! Credits added.');
              setRedirecting(true);
              setTimeout(() => navigate('/'), 1500);
            } else {
              toast.error(verifyData.message || 'Payment verification failed.');
            }
          } catch (err) {
            toast.error('Payment verification failed.');
          }
        },
        prefill: {},
        theme: { color: '#ec4899' },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error(err.message || 'Payment failed.');
    }
  };

  return (
    <Layout>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-pink-900 py-8 px-4">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-200 dark:border-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Buy Credits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {plans.map(plan => (
            <div key={plan.id} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex flex-col items-center border border-pink-200 dark:border-pink-800">
              <div className="text-3xl font-bold text-pink-600 mb-2">{plan.credits} Credits</div>
              <div className="text-lg text-gray-700 dark:text-gray-200 mb-4">₹{plan.price}</div>
              <button
                className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-semibold shadow transition"
                onClick={() => handleBuy(plan.id)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-sm mt-8 text-center">Payments are powered by Razorpay. Test payments only.</p>
        {redirecting && (
          <Layout>
            <div className="mt-4 text-blue-600 font-semibold text-center animate-pulse">Redirecting to home...</div>
          </Layout>
        )}
      </div>
    </div>
    </Layout>
  );
};

export default BuyCredits; 