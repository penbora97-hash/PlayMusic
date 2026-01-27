import React, { useState, useEffect, useMemo, useRef } from "react";
import img from "../assets/image/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";
import { BiLogInCircle } from "react-icons/bi";
import { BsPersonPlus } from "react-icons/bs";

// Import data
import { musicData } from "../data";
import { artistsData } from "../artistsData";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef(null);
  const mobileSearchRef = useRef(null);
  const navigate = useNavigate();

  // Merge music and artist data
  const allSongs = useMemo(() => {
    const artistSongs = artistsData.flatMap((artist) =>
      artist.albums.flatMap((album) =>
        album.songs.map((song) => ({
          id: `${artist.id}-${song.id}`,
          title: song.title,
          artist: artist.name,
          image: song.image,
          audio: song.audio,
        })),
      ),
    );

    const musicSongs = musicData.map((song) => ({
      id: `music-${song.id}`,
      title: song.title,
      artist: song.artist,
      image: song.artistImage,
      audio: song.audioSrc,
    }));

    return [...musicSongs, ...artistSongs];
  }, []);

  const filteredSongs = allSongs.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target)
      ) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      open || showLogin || showSignUp || showCart ? "hidden" : "auto";
  }, [open, showLogin, showSignUp, showCart]);

  useEffect(() => {
    setShowResults(query ? true : false);
  }, [query]);

  const handleSearchClick = (song) => {
    setQuery("");
    setShowResults(false);
    navigate(`/song/${song.id}`, { state: { song } });
    setOpen(false);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowResults(false), 200);
  };

  // Simple alert for login/signup
  const handleLogin = () => {
    alert("Login successful!");
    setShowLogin(false);
  };

  const handleSignUp = () => {
    alert("Sign Up successful!");
    setShowSignUp(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <NavLink to="/" className="font-bold text-3xl text-white">
              Music
            </NavLink>
            <img src={img} alt="logo" className="w-12 h-12" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {["Home", "Artist", "Playlist", "About Us"].map((item) => (
              <li key={item} className="relative group">
                <NavLink
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-white font-semibold hover:text-blue-400  text-lg transition-colors duration-300"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Search & Icons */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setShowResults(true)}
                onBlur={handleSearchBlur}
                placeholder="Search songs..."
                className="rounded-full px-4 py-2 w-64 backdrop-blur-2xl text-white placeholder-white/80 shadow-lg border-none focus:outline-none focus:ring-2 focus:w-72 transition-all duration-300"
              />
              {query && showResults && (
                <div className="absolute top-full mt-2 w-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-purple-500/30 max-h-96 overflow-y-auto z-50 backdrop-blur-xl">
                  {filteredSongs.length ? (
                    <div className="p-2">
                      {filteredSongs.map((song) => (
                        <div
                          key={song.id}
                          className="relative overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-3 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer mb-2"
                          onClick={() => handleSearchClick(song)}
                        >
                          <div className="flex gap-3 items-center">
                            <img
                              src={song.image}
                              alt={song.title}
                              className="w-16 h-16 rounded-lg object-cover shadow-lg group-hover:shadow-purple-500/50 transition-shadow duration-200"
                              onError={(e) => {
                                e.target.src =
                                  "https://via.placeholder.com/64x64/8B5CF6/FFFFFF?text=Music";
                              }}
                            />
                            <div className="flex flex-col justify-center flex-1 min-w-0">
                              <p className="text-white text-sm font-bold line-clamp-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                                {song.title}
                              </p>
                              <p className="text-gray-400 text-xs line-clamp-1 group-hover:text-gray-300 transition-colors mt-0.5">
                                {song.artist}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-400">
                      No songs found. Try different keywords.
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <BiLogInCircle
                size={22}
                onClick={() => setShowLogin(true)}
                className="text-white cursor-pointer hover:text-purple-400 transition-colors hover:scale-110 duration-200"
              />
              <BsPersonPlus
                size={20}
                onClick={() => setShowSignUp(true)}
                className="text-white cursor-pointer hover:text-purple-400 transition-colors hover:scale-110 duration-200"
              />
              <IoIosCart
                size={22}
                onClick={() => setShowCart(true)}
                className="text-white cursor-pointer hover:text-purple-400 transition-colors hover:scale-110 duration-200"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <RiCloseCircleLine size={30} /> : <IoMenuSharp size={30} />}
          </button>
        </div>

        {/* Mobile menu & search */}
        {open && (
          <div className="md:hidden bg-white/10 p-4 flex flex-col gap-3">
            <div ref={mobileSearchRef}>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setShowResults(true)}
                onBlur={handleSearchBlur}
                placeholder="Search songs..."
                className="w-full rounded-full px-4 py-2 backdrop-blur-2xl text-white placeholder-white/80 shadow-lg border-none focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <ul className="flex flex-col gap-3 mt-3 text-white">
              {["Home", "Artist", "Playlist", "About Us"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="font-semibold hover:text-blue-400"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setShowLogin(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowLogin(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors"
            >
              ×
            </button>
            <h2 className="text-white text-2xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleLogin}
                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 mt-2"
              >
                Login
              </button>
              <p className="text-gray-400 text-sm text-center mt-2">
                Don't have an account?{" "}
                <span
                  className="text-purple-400 hover:text-purple-300 cursor-pointer ml-1"
                  onClick={() => {
                    setShowLogin(false);
                    setShowSignUp(true);
                  }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setShowSignUp(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignUp(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors"
            >
              ×
            </button>
            <h2 className="text-white text-2xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Create Account
            </h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSignUp}
                className="px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 mt-2"
              >
                Sign Up
              </button>
              <p className="text-gray-400 text-sm text-center mt-2">
                Already have an account?{" "}
                <span
                  className="text-purple-400 hover:text-purple-300 cursor-pointer ml-1"
                  onClick={() => {
                    setShowSignUp(false);
                    setShowLogin(true);
                  }}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
          onClick={() => setShowCart(false)}
        >
          <div
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl w-full max-w-md relative shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-500 transition-colors"
            >
              ×
            </button>
            <h2 className="text-white text-2xl mb-6 font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shopping Cart
            </h2>
            <div className="flex flex-col gap-4 text-center py-12">
              <IoIosCart size={64} className="mx-auto text-gray-600 mb-4" />
              <button
                onClick={() => {
                  setShowCart(false);
                  navigate("/premium");
                }}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 mt-6"
              >
                Get Premium
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;