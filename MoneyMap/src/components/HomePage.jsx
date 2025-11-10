import React from 'react'
import './homePage.css'
import background from './Images/background.jpg'

import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <div className="home-page"

        style={{ backgroundImage: `url(${background})` }}

      >

        <h1>MoneyMap</h1>
        <h3>Map Your Wealth</h3>
        <Link to='/login'>
          <button className='round-button'> Get Started</button>
        </Link>
      </div>
      </main>
      )
}