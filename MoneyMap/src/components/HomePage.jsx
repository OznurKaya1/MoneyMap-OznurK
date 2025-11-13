import React from 'react'
import './homePage.css'
import background from './Images/background.jpg'
import { Link } from 'react-router-dom'
import Login from './Login'

export default function HomePage() {
  return (
    <main>
      <div className="home-page"

        style={{ backgroundImage: `url(${background})` }}

      >

        <h1>MoneyMap</h1>
        <h3>Map Your Wealth</h3>

        <Login />
      </div>
    </main>
  )
}
