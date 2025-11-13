import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer'
import './components/layout/layout.css';
import './components/layout/Footer';
import Home from './components/Pages/Home'
import './components/Pages/pages.css'
import About from './components/Pages/About'
import Contact from "./components/Pages/Contact";
import Dashboard from "./components/Dashboard";
import './components/Dashboard.css'


export default function App() {
  
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/dashboard" element={<Dashboard />} />





    </Routes>
   
    <Footer />
    </div>
  );
}
