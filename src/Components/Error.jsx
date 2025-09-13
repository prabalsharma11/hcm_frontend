import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-100 to-rose-200 flex items-center justify-center px-6 py-12">
    <section className="max-w-xl text-center">
      <div className="text-rose-500 text-7xl font-black drop-shadow-sm mb-2 select-none">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-semibold text-rose-700 mb-4">
        No spark here...
      </h1>
      <p className="text-rose-600 text-base sm:text-lg mb-8">
        Looks like this page is still looking for its perfect match.
        Maybe try again or head back to somewhere warmer 💕
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/home"
          className="inline-block rounded-full border border-rose-300 bg-white px-6 py-2 text-rose-700 text-sm font-medium shadow-sm hover:bg-rose-50 transition"
        >
          ← Back to Home
        </Link>

      </div>
    </section>
  </main>
  </>

  );
};



export default Error