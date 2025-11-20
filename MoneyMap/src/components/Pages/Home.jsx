import React from 'react';
import saving from '../Images/saving.jpg'
import { useNavigate } from 'react-router';


export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-page">
      
     
      <section className="hero">
        <h1 className="hero-title">MoneyMap</h1>
        <h3 className="hero-subtitle">Visualize. Plan. Grow.</h3>
        <p className="hero-text">
          Take control of your finances and see exactly where your money goes. MoneyMap
          helps you organize your income, expenses, and savings in a simple, clear way.
        </p>
      </section>

   
      <section className="features">
        <div className="feature-card">
          <h4>Track Income & Expenses</h4>
          <p>See every transaction in one place and understand your spending habits.</p>
        </div>
        <div className="feature-card">
          <h4>Set Savings Goals</h4>
          <p>Create goals and monitor your progress to reach them faster.</p>
        </div>
        <div className="feature-card">
          <h4>Plan Your Budget</h4>
          <p>Build realistic budgets that fit your lifestyle without stress.</p>
        </div>
      </section>

      
      <section className="visuals">
        <img src={saving} alt="Saving" className="saving-image" />
        <p className="visual-text">
          Understand your finances visually. Track your income, expenses, and savings over time.
        </p>
      </section>

 
      <section className="cta">
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/Dashboard')}
        >
          Go to Dashboard
        </button>
      </section>

    </main>
  );
}
