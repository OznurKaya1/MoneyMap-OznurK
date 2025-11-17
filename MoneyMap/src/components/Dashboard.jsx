import React from 'react'
import { Link } from 'react-router-dom'
import income from './Images/income.jpg'
import expense from './Images/expense.jpg'
import report from './Images/report.jpg'
import savingpiggy from './Images/savingpiggy.jpg'

export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <h2>Take control of your money</h2>

      <div className="dashboard-links">
        <Link to='/Income' className="dashboard-link">
          <span>My Income</span>
          <img src={income} alt='income' className='dashboard-icon' />
        </Link>

        <Link to='/Expenses' className="dashboard-link">
          <span>My Expenses</span>
          <img src={expense} alt='expense' className='dashboard-icon' />
        </Link>

        <Link to='/Savings' className="dashboard-link">
          <span>My Savings</span>
          <img src={savingpiggy} alt='savingpiggy' className='dashboard-icon' />
        </Link>

        <Link to='/Reports' className="dashboard-link">
          <span>Reports</span>
          <img src={report} alt='report' className='dashboard-icon' />
        </Link>
      </div>
    </div>
  )
}
