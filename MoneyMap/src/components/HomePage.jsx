import React from 'react'
import './homePage.css'
import background from './Images/background.jpg'
import IconImage from './Images/IconImage.jpeg'
import Logo from './Images/Logo.png'

export default function HomePage() {
  return (
    <div className="home-page"

      style={{ backgroundImage: `url(${background})` }}
      
    >
      <img src={Logo} className='home-icon' alt='icon' />
      <h1>MoneyMap</h1>
      <h3>Map Your Wealth</h3>
      <button className='Start'>Get Started ➜ </button>
    </div>
  )
}
