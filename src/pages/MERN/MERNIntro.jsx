import React from 'react';

export default function MERNIntro() {
  return (
    <div className=" bg-white text-gray-900 dark:bg-[#060A16] dark:text-white px-6 py-20 font-sans overflow-hidden  ">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-0 mt-10">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase">Stack</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">MERN Architecture Breakdown</h1>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
          Understanding the synergy of frontend, backend, and database that builds modern web applications.
        </p>
      </div>

      {/* Glowing Image Circle */}
      <div className="flex justify-center -mt-4 mb-20">
        <div className="  flex items-center justify-center px-4 py-16">
          <div className="relative w-[520px] h-[530px] sm:w-[520px] sm:h-[530px] md:w-[520px] md:h-[579px]">
            {/* Circle 1: React */}
            <div className="absolute rotate-180 top-0 left-1/2 -translate-x-1/2 w-[360px] h-[360px] bg-gradient-to-b from-blue-800 to-transparent opacity-80 rounded-full flex items-center justify-center text-center text-white">
              <div className="-rotate-180">
                <p className="text-sm sm:text-base text-gray-300 dark:text-gray-300">Frontend</p>
                <p className="text-md sm:text-lg font-semibold text-white">React.js</p>
              </div>
            </div>

            {/* Circle 2: Node + Express */}
            <div className="absolute rotate-55 bottom-0 left-0 translate-x-[-15%] w-[360px] h-[360px] bg-gradient-to-b from-blue-800 to-transparent opacity-80 rounded-full flex items-center justify-center text-center text-white">
              <div className="-rotate-55">
                <p className="text-sm sm:text-base text-gray-300 dark:text-gray-300">Backend</p>
                <p className="text-md sm:text-lg font-semibold text-white">NODE.js + Express.js</p>
              </div>
            </div>

            {/* Circle 3: MongoDB */}
            <div className="absolute rotate-290 bottom-0 right-0 translate-x-[15%] w-[360px] h-[360px] bg-gradient-to-b from-blue-800 to-transparent opacity-80 rounded-full flex items-center justify-center text-center text-white">
              <div className="-rotate-290">
                <p className="text-sm sm:text-base text-gray-300 dark:text-gray-300">Database</p>
                <p className="text-md sm:text-lg font-semibold text-white">MongoDB</p>
              </div>
            </div>

            {/* Center Label: MERN */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white font-bold pt-12 text-lg sm:text-xl">MERN</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="max-w-6xl mx-auto text-center mb-2">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm tracking-widest uppercase">Stack</h3>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
          Discover how every component of the MERN stack connects — guiding your path from user interaction to data persistence with clarity and purpose.
        </p>
      </div>
    </div>
  );
}
