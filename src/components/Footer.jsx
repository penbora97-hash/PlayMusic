import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-700 to-gray-900 backdrop-blur-3xl border-t border-white/20 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-12">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h1 className="text-4xl font-extrabold text-purple-400">Music App</h1>

          <p className="text-lg text-gray-300 text-center md:text-left max-w-md leading-relaxed">
            Stream your favorite songs, discover top artists, and enjoy
            high-quality music anytime, anywhere.
          </p>

          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Music App. All rights reserved.
          </p>
        </div>

        {/* Center: Links */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <a
            href="/"
            className="text-2xl font-bold text-white hover:text-purple-400 transition"
          >
            Home
          </a>

          <a
            href="/artist"
            className="text-2xl font-bold text-white hover:text-purple-400 transition"
          >
            Artist
          </a>

          <a
            href="/playlist"
            className="text-2xl font-bold text-white hover:text-purple-400 transition"
          >
            Playlist
          </a>

          <a
            href="/about-us"
            className="text-2xl font-bold text-white hover:text-purple-400 transition"
          >
            About Us
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex flex-col items-center gap-5">
          <p className="text-lg text-gray-400 font-semibold">Follow us</p>

          <div className="flex gap-6">
            <a href="https://www.facebook.com/share/1JqMrE32ao/" className="bg-white/10 hover:bg-white/20 p-5 rounded-full transition">
              <FaFacebookF
                size={20}
                className="text-white hover:text-blue-500"
              />
            </a>
           
            <a className="bg-white/10 hover:bg-white/20 p-5 rounded-full transition">
              <FaInstagram
                size={20}
                className="text-white hover:text-pink-500"
              />
            </a>
            <a href="https://t.me/Hangpanharajame"  className="bg-white/10 hover:bg-white/20 p-5 rounded-full transition">
             <FaTelegram   size={20} className="text-white hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
