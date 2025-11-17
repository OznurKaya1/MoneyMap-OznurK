import React from 'react';
import { useState } from 'react'

export default function Income({ incomeList, setIncomeList }) {
    const [date, setDate] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")

    const handleAddBtn = (e) => {
        e.preventDefault()
        setError("")
        if (!date) {
            setError("Please enter date.")
            return
        }

        if (!amount) {
            setError("Please enter an amount.")
            return
        }

        if (Number(amount) < 0) {
            setError("Amount can't be less than zero.")
            return
        }
     

        const newIncome = {

            date: date,
            amount: Number(amount),
            description: description
        }
        setIncomeList([...incomeList, newIncome])

        setDate("")
        setAmount("")
        setDescription("")

    }
    const totalAmount = incomeList.reduce((sum, item) => sum + item.amount, 0);
    


    return (
        <div className='main-container'>
            <section>
                <form>
                       {error && <p className="error">{error}</p>}
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type="button" className="btn" onClick={handleAddBtn}>Add</button>
                </form>
            </section>

            <table id='income-board'>
                <caption>My monthly income</caption>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>{incomeList.map((item, index) => (
                    <tr key={index}>
                        <td>{item.date}</td>
                        <td>{item.amount.toLocaleString('en-US',{style:'currency', currency:'USD'})}</td>
                        <td>{item.description}</td>

                    </tr>
                ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th>{totalAmount.toLocaleString('en-US',{style:'currency', currency:'USD'})}</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

