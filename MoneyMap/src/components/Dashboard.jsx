import React from 'react'
import { Link } from 'react-router-dom'
import income from './Images/income.jpg'
import expense from './Images/expense.jpg'


export default function Dashboard() {
  return (
    <div className='dashboard-container'>
      <h2>Take control of your money</h2>

      <div className="dashboard-links">
        <Link to='/income' className="dashboard-link">
          <span>My Income</span>
          <img src={income} alt='income' className='dashboard-icon' />
        </Link>

        <Link to='/expenses' className="dashboard-link">
          <span>My Expenses</span>
          <img src={expense} alt='expense' className='dashboard-icon' />
        </Link>

    
      </div>
    </div>
  )
}
