import React from "react"
import { FaTelegram } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
 

  FaYoutube,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-4">
            i<span className="text-orange-500">Music</span>
          </h1>
          <p className="text-sm leading-relaxed mb-6">
            Music connects emotions, tells stories, and brings people together.
            Discover new sounds, playlists, and artists that move your soul.
          </p>

          {/* Social Icons */}
        
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              <a href="/">
                About Our Music
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/artist">
                Artists
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/playlist ">
                Albums
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">Privacy & Policy</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-white font-semibold mb-4">Music Hub</h2>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">
              <a href="/about-us">
                About Us
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <a href="/premium">
                Get Premium
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">Latest Releases</li>
            <li className="hover:text-white cursor-pointer">Submit Your Music</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-sm">
           
            <li>musicworld@gmail.com</li>
            <li>+880 1747 348 731</li>
              <div className="flex gap-4">
          <a href="https://www.facebook.com/share/1BiEPheJN2/">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-700 cursor-pointer">
              <FaFacebookF />
            </span>
          </a>
         
          <a href=" https://www.instagram.com/panharajame?igsh=MXFoaDhwbzFidWI0dA%3D%3D&utm_source=qr">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-800 cursor-pointer">
              <FaInstagram />
            </span>
          </a>
            <a href="https://t.me/Hangpanharajame">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 cursor-pointer">
             <FaTelegram />
            </span></a>
         
           <a href= "https://github.com/jakma911">
             <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700  hover:bg-gray-900 cursor-pointer">
             <FaGithub />
            </span>
           </a>
          </div>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} iMusic. Feel the rhythm.
      </div>
    </footer>
  );
};

export default Footer;