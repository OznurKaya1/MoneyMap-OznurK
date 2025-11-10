import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer'
import './components/layout/layout.css';
import './components/layout/Footer';


export default function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
    <Footer />
    </div>
  );
}