import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-br from-gray-600  to-gray-800 0 backdrop-blur-3xl border-t border-white/20 text-gray-600 ">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className="text-2xl font-bold text-purple-400">Music App</h1>
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Music App. All rights reserved.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
          <a href="/" className="hover:text-purple-400 transition text-xl font-bold text-white">Home</a>
          <a href="/artist" className="hover:text-purple-400 transition text-xl font-bold text-white">Artist</a>
          <a href="/playlist" className="hover:text-purple-400 transition  text-xl font-bold text-white">Playlist</a>
          <a href="/about-us" className="hover:text-purple-400 transition text-xl font-bold text-white">About Us</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
            <FaFacebookF size={16} className="text-white hover:text-blue-600" />
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
            <FaTwitter size={16} className="text-white hover:text-blue-600" />
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
            <FaInstagram size={16}  className="text-white hover:text-red-500"/>
          </a>
          <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
            <FaYoutube size={16} className="text-white hover:text-red-500" />
          </a>
        </div>
      </div>

      {/* Bottom copyright for mobile */}
      <div className="text-center text-gray-400 text-xs py-2 md:hidden">
        © {new Date().getFullYear()} Music App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
