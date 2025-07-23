import React from 'react';
import { motion } from 'framer-motion';

const KeshavDocsLandingPage = () => {
  return (
    <div className=' flex h-screen w-screen justify-center items-center bg-white'>
         <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/10 backdrop-blur-sm">
        <h1 className="text-lg md:text-xl font-semibold text-black drop-shadow-md">CodeWorld</h1>
        <div className="space-x-6 text-black font-medium hidden md:flex">
          <a href="#" className="hover:text-blue-600">Courses</a>
          <a href="#" className="hover:text-blue-600">Playground</a>
          <a href="#" className="hover:text-blue-600">About</a>
        </div>
        <div className="space-x-4 hidden md:flex">
          <a href="#" className="text-black hover:text-blue-600">Register</a>
          <button className="bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition duration-300">
            Log in
          </button>
        </div>
      </div>
                 <div className="relative w-[95%] h-[90%] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <img
        src="./az.png" // Replace with your image path
        alt="Campfire Coding"
        className="w-full h-screen object-cover"
      />

      {/* Overlay Blur Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 flex flex-col items-center justify-center px-4"
      >
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg max-w-3xl text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Learn Coding by{' '}
            <span className="text-blue-400">Exploring Concepts</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-4 text-lg text-gray-200"
          >
            A computer science learning platform that keeps studying fun, relevant, and exciting for students everywhere!
          </motion.p>

          <motion.button
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors duration-300 text-white font-semibold rounded-md shadow-md"
          >
            Start Learning →
          </motion.button>
        </div>
      </motion.div>

      {/* Top Navbar */}
     
    </div>
    </div>
   
  );
};

export default KeshavDocsLandingPage;
