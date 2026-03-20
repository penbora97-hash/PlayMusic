import React, { useState } from "react";
import { BsPersonCheckFill } from "react-icons/bs";
import { GiLoveSong } from "react-icons/gi";
import { MdAlbum } from "react-icons/md";
import img from '../assets/image/vannda.png'; 
import Card from "./Card";

  
const Home = () => {
   const [showSignUp, setShowSignUp] = useState(false);
  const handleSignUp = () => {
    alert("Sign Up successful!");
    setShowSignUp(false);
  };
  return (
   <div>
     <div className="min-h-screen scroll-smooth bg-gray-900 selection:bg-violet-500/30">
      {/* Hero Section - ប្តូរ h-[800px] ទៅជា min-h-screen ឬ h-auto សម្រាប់ Mobile */}
      <div className="w-full lg:h-[800px] min-h-screen bg-gray-800 relative overflow-hidden flex items-center">
        
        {/* Container - ប្តូរ flex-row ទៅជា flex-col-reverse នៅលើ Mobile */}
        <div className="flex flex-col-reverse lg:flex-row h-full max-w-7xl mx-auto w-full px-6 py-10 lg:py-0">
          
          {/* Left Content - រៀបចំអក្សរឱ្យនៅកណ្តាលពេលលើ Mobile */}
          <div className="w-full lg:w-[50%] h-full flex flex-col items-center lg:items-start justify-center gap-6 lg:gap-8 z-10 text-center lg:text-left mt-10 lg:mt-0">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400 leading-tight">
              Welcome to <br /> Music World
            </h1>
            
            <p className="text-gray-400 text-base md:text-xl max-w-md leading-relaxed">
              Discover, Stream, and Share a World of Music at Your Fingertips. 
              Experience the vibe of the next generation.
            </p>

            {/* Stats Section - ប្រើ grid ឬ flex-wrap សម្រាប់ Mobile */}
            <div className="flex flex-wrap justify-center lg:justify-start mt-4 gap-6 md:gap-8">
              {/* Stat 1 */}
              <div className="flex flex-col items-center lg:items-start gap-2 group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center group-hover:bg-pink-500/20 group-hover:scale-110 transition-all duration-300 border border-pink-500/20">
                  <GiLoveSong className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-3xl font-bold text-white">2000+</p>
                  <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Songs</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col items-center lg:items-start gap-2 group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 border border-blue-500/20">
                  <BsPersonCheckFill className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-3xl font-bold text-white">800+</p>
                  <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Artists</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col items-center lg:items-start gap-2 group cursor-pointer">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 border border-cyan-500/20">
                  <MdAlbum className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xl md:text-3xl font-bold text-white">500+</p>
                  <p className="text-[10px] md:text-sm text-gray-500 uppercase tracking-wider font-semibold">Albums</p>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button className="relative group px-8 py-3 md:px-10 md:py-4 bg-red-600 text-white text-lg md:text-xl font-bold rounded-full overflow-hidden transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                <span className="relative z-10">Listen Now</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Image Section - Mobile */}
          <div className="w-full lg:w-[50%] h-[350px] md:h-[500px] lg:h-full flex items-center justify-center relative group">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-sky-500/20 rounded-full blur-[80px] lg:blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Gradient Overlay for bottom */}
            <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-gray-800 to-transparent z-20"></div>

            {/* Vannda Image */}
            <img 
              src={img} 
              className="relative z-10 w-full h-full object-contain transition-all duration-500 ease-out 
                         group-hover:scale-102 
                         group-hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.5)]" 
              alt="Vannda" 
            />

            {/* Decorative Borders - */}
            <div className="hidden lg:block absolute top-20 right-10 w-32 h-32 border-r-4 border-t-4 border-violet-500/20 rounded-tr-3xl group-hover:border-violet-500/50 transition-colors duration-500"></div>
            <div className="hidden lg:block absolute bottom-20 left-10 w-24 h-24 border-l-4 border-b-4 border-sky-500/20 rounded-bl-3xl group-hover:border-sky-500/50 transition-colors duration-500"></div>
          </div>

        </div>
      </div>
    </div>
       <Card />
          <nav className="fixed bottom-0 left-0 w-full backdrop-blur-3xl text-white p-4 md:px-8 shadow-2xl z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <p className="text-xs  tracking-widest font-semibold mb-1">
            Preview of i<span className="text-orange-500
             ">Music</span>
          </p>
          <p className="text-sm md:text-base font-medium">
            Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.
          </p>
        </div>

        {/*Action Button */}
     
         <button   onClick={() => setShowSignUp(true)}   className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform active:scale-95 whitespace-nowrap">
          Sign up free
        </button>
    
        
      </div>
    </nav>
    {/* Signip */}
   {showSignUp && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4"
          onClick={() => setShowSignUp(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white text-3xl hover:text-red-500 transition-colors"
            >
              
            </button>
            <h2 className="text-white text-xl sm:text-2xl mb-4 sm:mb-6 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Create Account
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-2.5 sm:py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
              />
              <button
                onClick={handleSignUp}
                className="px-4 py-2.5 sm:py-3 bg-gradient-to-br from-white via-gray-500 to-gray-100 text-white rounded-lg font-semibold hover:from-gray-100 hover:via-blue-500 hover:to-gray-200 mt-2 text-sm sm:text-base"
              >
                Sign Up
              </button>
              
            </div>
          </div>
        </div>
      )}
   </div>
  );
};

export default Home;