import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Artist from "./components/Artist";
import PlayList from "./components/PlayList";
import AboutUs from "./components/AboutUs";
import Card from "./components/Card";
import Footer from "./components/Footer";
 
const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/artist" element={<Artist />} />
          <Route path="/playlist" element={<PlayList />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
