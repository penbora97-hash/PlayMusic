import React, { useState, useEffect } from "react";
import img from "../assets/image/logo.png";
import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { RiCloseCircleLine } from "react-icons/ri";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // disable scroll when modal open
  useEffect(() => {
    if (showLogin || showSignUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLogin, showSignUp]);

  const handleInputChange = (e) => setQuery(e.target.value);
  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleSignUpChange = (e) =>
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });

  const handleLoginSubmit = () => {
    console.log("Login:", loginData);
    alert(`Login submitted! Email: ${loginData.email}`);
    setShowLogin(false);
    setLoginData({ email: "", password: "" });
  };

  const handleSignUpSubmit = () => {
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log("Sign up:", signUpData);
    alert(`Sign up submitted! Username: ${signUpData.username}`);
    setShowSignUp(false);
    setSignUpData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-3xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <NavLink
              to={"/"}
              className="font-bold text-3xl text-white hover:text-purple-400 transition"
            >
              Music
            </NavLink>
            <img src={img} alt="logo" className="w-12 h-12" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10">
            {["Home", "Artist", "Playlist", "About Us"].map((item) => (
              <li key={item}>
                <NavLink
                  to={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-white text-xl font-bold hover:text-purple-400 transition"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop Search & Buttons */}
            <div className="hidden md:flex gap-3 items-center">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search songs..."
                className="rounded-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                className=" px-5 py-2 rounded-full text-white text-xl hover:text-blue-600 font-semibold transition"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
              <button
                className="hover:text-pink-400 px-5 text-xl py-2 rounded-full text-white font-semibold transition"
                onClick={() => setShowSignUp(true)}
              >
                Sign up
              </button>
               
              <button  className="text-white px-5 py-2 rounded-full text-2xl hover:text-blue-500 font-semibold transition">
                <IoIosCart />
              </button>
            </div>

            {/* Hamburger for mobile */}
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <RiCloseCircleLine size={30} />
              ) : (
                <IoMenuSharp size={30} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 p-4 flex flex-col gap-4">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Search songs..."
              className="rounded-full px-4 py-2 border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />

            <ul className="flex flex-col gap-3 text-center">
              {["Home", "Artist", "Playlist", "About Us"].map((item) => (
                <li key={item}>
                  <NavLink
                    to={
                      item === "Home"
                        ? "/"
                        : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                    }
                    className="text-white text-lg font-semibold hover:text-purple-300 transition"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3 mt-2">
              <button
                className=" py-2 rounded-full  text-white font-semibold transition"
                onClick={() => {
                  setShowLogin(true);
                  setOpen(false);
                }}
              >
                Login
              </button>
              <button
                className=" py-2 rounded-full text-white font-semibold transition"
                onClick={() => {
                  setShowSignUp(true);
                  setOpen(false);
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 w-full max-w-md text-white relative shadow-2xl border border-purple-500/30 my-8">
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-purple-400 transition"
              onClick={() => {
                setShowLogin(false);
                setLoginData({ email: "", password: "" });
              }}
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-400 mb-6">Login to continue to Music</p>

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  placeholder="you@example.com"
                  className="w-full rounded-lg p-3 bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  placeholder="••••••••"
                  className="w-full rounded-lg p-3 bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
              </div>

              <button
                onClick={handleLoginSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition font-semibold text-lg shadow-lg"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 w-full max-w-md text-white relative shadow-2xl border border-pink-500/30 my-8">
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-pink-400 transition"
              onClick={() => {
                setShowSignUp(false);
                setSignUpData({
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                });
              }}
            >
              ×
            </button>

            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Create Account
            </h2>
            <p className="text-gray-400 mb-6">Join Music today</p>

            <div className="space-y-4">
              <input
                type="text"
                name="username"
                value={signUpData.username}
                onChange={handleSignUpChange}
                placeholder="Username"
                className="w-full rounded-lg p-3 bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleSignUpChange}
                placeholder="Email"
                className="w-full rounded-lg p-3 bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="password"
                name="password"
                value={signUpData.password}
                onChange={handleSignUpChange}
                placeholder="Password"
                className="w-full rounded-lg p-3 bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="password"
                name="confirmPassword"
                value={signUpData.confirmPassword}
                onChange={handleSignUpChange}
                placeholder="Confirm Password"
                className="w-full rounded-lg p-3 bg-gray-700/50 placeholder-gray-400 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />

              <button
                onClick={handleSignUpSubmit}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 py-3 rounded-lg hover:from-pink-500 hover:to-purple-500 transition font-semibold text-lg shadow-lg"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
