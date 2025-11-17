import React from 'react';
import saving from '../Images/saving.jpg'
export default function Home() {
    return (
        <main>
            <div className="main-content">
                <h2>Hello,</h2>
                <p>
                    Take control of your finances and see exactly where your money goes. MoneyMap
                    helps you organize your income, expenses, and savings in a simple, clear way,
                    so you can make smarter financial decisions every day.
                    Managing your finances shouldn’t be confusing or stressful. With MoneyMap, you
                    gain a clear overview of your financial life in one place. From tracking your
                    income to monitoring every expense, MoneyMap lays it all out in a way that makes
                    sense. Understand your spending habits, identify areas where you can save, and
                    make informed decisions without guessing. Whether you’re planning for short-term
                    needs or long-term goals, having a visual and organized map of your money
                    empowers you to stay in control and confident about your financial future.
                </p>

                <p>
                    Set goals, plan your budget, and stay on top of your money without
                    complicated spreadsheets or confusing charts. With MoneyMap, managing
                    your finances becomes simple, visual, and stress-free. Beyond just numbers, MoneyMap helps you take action. Set realistic savings
                    targets, create budgets that fit your lifestyle, and get gentle reminders
                    to keep you on track. See your progress over time, celebrate milestones, and
                    adjust your plan as life changes. It’s more than just an app — it’s a financial
                    companion that simplifies complex money matters, so you can focus on building
                    the life you want without the stress of uncertainty. With MoneyMap, managing
                    your finances becomes intuitive, insightful, and even enjoyable.
                </p>
                <img src={saving} alt='Saving' className='saving-image'></img>
            </div>
            
        </main>
    )
}