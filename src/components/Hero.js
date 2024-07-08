import React from "react";

const Hero = () => {
  return (
    <div className="w-full py-8 gap-3 flex flex-col md:px-40 px-4">
      <div className="flex flex-row items-center gap-1 bg-gray-200 py-1 rounded w-max px-3">
        <div className="circle -mt-1" />
        <p className="text-[12px] text-gray-700">2 tools added this week</p>
      </div>
      <h1 className="text-4xl md:w-4/5 pb-2 w-full font-bold tracking-tight md:text-5xl bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent">
        Discover Your Path to Success with Leading Solutions
      </h1>
      <p className="md:md:w-4/5 text-lg tracking-tight text-gray-600 w-full">
        Explore our curated directory of essential SaaS solutions and startup
        tools, designed to empower your business with innovative and efficient
        alternatives for daily operations
      </p>
      <form className="flex flex-row gap-2">
        <input
          type="email"
          className="text-sm w-1/3 py-1 border border-gray-200 px-3 rounded"
          placeholder="Subscribe to our newsletter"
        />
        <button className="w-max text-sm py-2 transition-all text-white flex flex-row items-center gap-2 hover:opacity-80 bg-black px-3 rounded">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Hero;
