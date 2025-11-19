import React from 'react'
import {useState} from'react'
import { useNavigate } from 'react-router-dom'
import Dollar from '../Images/dollar.jpg'

export default function About() {
    const navigate = useNavigate();
    return (


        <div>
            <p>At MoneyMap, we believe that understanding your finances shouldn’t require a finance degree.
                Too often, managing money feels overwhelming — juggling bills, tracking expenses, and trying
                to figure out where your paycheck really goes. That’s why we built MoneyMap: a simple, intuitive
                tool that brings clarity to your financial life.MoneyMap gives you a complete picture of your income, expenses, and savings in one easy-to-use
                dashboard. Our mission is to help you see patterns, spot opportunities, and take control of your
                financial future. Whether you want to pay off debt, grow your savings, or just understand your spending habits,
                MoneyMap gives you the tools to make smarter decisions every day.</p>

            <p>We know that everyone’s financial journey is unique. That’s why we designed MoneyMap to be flexible
                you can customize categories, set goals that fit your lifestyle, and visualize progress at your own pace.
                No confusing charts or hidden fees, just clear insights that make sense.</p>

            <p>Behind MoneyMap is a small team of people who care deeply about making finance simple and accessible for
                everyone. We believe that when people have the right tools, they can make powerful changes in their lives.
                Our goal is to remove the stress from budgeting and turn it into something empowering — a habit that helps
                you grow, not something that holds you back.</p>
            <p>MoneyMap is more than just a budgeting app — it’s your guide to financial confidence. We’re here to help
                you make informed choices, stay organized, and build the financial foundation for the life you want. Your
                journey toward better money management starts here. </p>

            <img src={Dollar} alt='dollar' className='dollar-image'></img>
            <button type="button" className="btn" onClick={() => navigate('/Dashboard')}>
           Dashboard
          </button>
        </div>


    )
}