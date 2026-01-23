import React from "react";
import img from "../assets/image/photo_2026-01-20_20-14-44.jpg";
import img1 from "../assets/image/photo_2026-01-22_12-21-42.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full bg-gray-700 selection:bg-violet-500/30">
        {/* Hero Section */}
        <div className="w-full h-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-b-3xl flex items-center justify-center relative overflow-hidden">
          <div className="text-center relative z-10">
            <h1 className="relative text-4xl font-bold text-white group cursor-pointer">
              <span className="block transition-opacity duration-300 group-hover:opacity-0">
                Welcome to My Website
              </span>

              <span className="absolute inset-0 flex items-center  flex-col justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Thank you for your Listening!!
                <h1 className="">Enjoys with Music ❤️</h1>
              </span>
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side (Blank Boxes instead of images) */}
          <div className="grid grid-cols-2 gap-6">
            {/* Image 1 */}
            <div className="rounded-2xl h-64 overflow-hidden group">
              <img
                src="https://umusic.my/cdn/shop/files/Music_Banner_Mobile.jpg?v=1729596633&width=800"
                alt="Music Studio"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* Image 2 */}
            <div className="rounded-2xl h-64 overflow-hidden group">
              <img
                src="https://img.freepik.com/free-vector/speaker-with-music-notes-melody-background_1017-36830.jpg"
                alt="Live Concert"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>

            {/* Stats Box */}
            <div className="col-span-2 bg-black text-white rounded-2xl h-24 flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold">10+</h2>
              <p className="text-sm opacity-80">Years with Music</p>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="bg-orange-50 rounded-3xl p-8">
            <p className="text-sm font-semibold text-red-600 uppercase">
              About Music
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-3 leading-snug">
              Music That Inspires <br /> Emotions & Creativity
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Music is a universal language that connects hearts, expresses
              emotions, and inspires creativity. From calm melodies to powerful
              rhythms, music plays an important role in our daily lives.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="text-red-600">✔</span>
                Emotional expression
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-600">✔</span>
                Creative inspiration
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-600">✔</span>
                Stress relief
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-600">✔</span>
                Cultural connection
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 selection:bg-violet-500/30  py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
            <div>
              <p className="text-sm font-semibold text-red-600 uppercase mb-2">
                Our Team
              </p>
              <h2 className="text-4xl font-bold text-white">
                Meet Our Music Team
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-gray-600 mb-4">
                Our team is made up of passionate musicians, producers, and
                creators who live and breathe music.
              </p>
              <button className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition">
                View More
              </button>
            </div>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-300 rounded-2xl h-130 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <div className="rounded-2xl  hover:scale-125 transform transition duration-200 ">
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h3 className="text-lg font-semibold opacity-80  text-white hover:text-blue-600">
                  Pen Bora
                </h3>
                <p className="text-sm opacity-80 font-bold">Team Leader</p>

                <div className="flex gap-3 mt-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                    <a href="https://www.facebook.com/share/1JqMrE32ao/">
                      <FaFacebook className="hover:text-blue-600 hover:scale-110 transform transition duration-150 text-xl" />{" "}
                    </a>
                  </span>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                    <a href="https://t.me/pen_bora">
                      <FaTelegramPlane className="hover:text-blue-600 hover:scale-110 transform transition duration-150 text-xl" />
                    </a>
                  </span>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                    <a href="#">
                      <FaLinkedin className="hover:text-yellow-500 hover:scale-110 transform transition duration-150 text-xl" />
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-300 rounded-2xl h-130 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <div className="hover:scale-125 transform transition duration-150">
                  <img
                    src={img1}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <h3 className="text-lg font-bold opacity-80 hover:text-gray-900 text-white">
                  Hang panharajame
                </h3>
                <p className="text-sm opacity-80 font-bold">Number</p>

                <div className="flex gap-3 mt-2">
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                    <a
                      href="https://www.facebook.com/share/1BiEPheJN2/"
                      className="hover:scale-110 transform transition duration-150"
                    >
                      <FaFacebook className="hover:text-blue-600 text-xl" />
                    </a>
                  </span>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                    <a href="https://t.me./Hangpanharajame">
                      <FaTelegramPlane className="hover:text-blue-600 hover:scale-110 transform transition duration-150 text-xl" />
                    </a>
                  </span>
                  <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm">
                    <a href="#">
                      <FaLinkedin className="hover:text-yellow-500 hover:scale-110 transform transition duration-150 text-xl" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
