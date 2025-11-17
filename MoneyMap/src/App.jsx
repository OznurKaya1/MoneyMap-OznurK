import React from "react";
import { useState } from "react";
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
import Income from './components/Tracking/Income'
import Expenses from './components/Tracking/Expenses'
import Savings from './components/Tracking/Savings'
import Reports from './components/Tracking/Reports'

export default function App() {
 
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [savingsList, setSavingsList] = useState([]);

  const totalIncome = incomeList.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalExpense = expenseList.reduce((sum, item) => sum + Number(item.amount), 0);
  const totalSavings = savingsList.reduce((sum, item) => sum + Number(item.amount), 0);

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

        {/* Pass props into dashboard children */}
        <Route
          path="/dashboard"
          element={
            <Dashboard
              incomeList={incomeList}
              expenseList={expenseList}
              savingsList={savingsList}
            />
          }
        />

        <Route
          path="/income"
          element={
            <Income
              incomeList={incomeList}
              setIncomeList={setIncomeList}
              totalIncome={totalIncome}
            />
          }
        />

        <Route
          path="/expenses"
          element={
            <Expenses
              expenseList={expenseList}
              setExpenseList={setExpenseList}
              totalExpense={totalExpense}
            />
          }
        />

        <Route
          path="/savings"
          element={
            <Savings
              savingsList={savingsList}
              setSavingsList={setSavingsList}
              totalSavings={totalSavings}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
