import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import News from "../src/Pages/News";
import Login from "../src/Pages/Login"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./Pages/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
