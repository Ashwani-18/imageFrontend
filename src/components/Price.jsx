import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    price: 50,
    credits: 100,
    label: "Basic",
    highlight: false,
  },
  {
    price: 70,
    credits: 150,
    label: "Standard",
    highlight: true,
  },
  {
    price: 100,
    credits: 210,
    label: "Premium",
    highlight: false,
  },
];

const Price = () => {
  const navigate = useNavigate();
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex justify-center items-center min-h-[400px]">
      <div className="max-w-5xl w-full mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12 drop-shadow-lg">
          Choose Your Plan
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative flex-1 max-w-xs bg-gray-800 rounded-3xl shadow-2xl border ${
                plan.highlight
                  ? "border-blue-500 scale-105 z-10"
                  : "border-gray-700"
              } px-8 py-10 flex flex-col items-center transition-transform duration-200`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </span>
              )}
              <div className="text-3xl font-bold text-white mb-2">{plan.label}</div>
              <div className="text-5xl font-extrabold text-blue-400 mb-4">
                ₹{plan.price}
              </div>
              <div className="text-lg text-gray-300 mb-6">
                {plan.credits} Credits
              </div>
              {/* Removed Buy Now button */}
              {/* Decorative gradient bar */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-md opacity-60"></span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/buy-credits')}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xl font-bold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            Buy Credits
          </button>
        </div>
      </div>
    </section>
  );
};

export default Price;
