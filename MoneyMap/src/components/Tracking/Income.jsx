import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import './Tracking.css';

export default function Income({ incomeList, setIncomeList }) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [editingIndex, setEditingIndex] = useState(null); // Track row being edited
const navigate = useNavigate();

  const handleAddBtn = (e) => {
    e.preventDefault();
    setError("");

    if (!date) { setError("Please enter date."); return; }
    if (!amount) { setError("Please enter an amount."); return; }
    if (Number(amount) < 0) { setError("Amount can't be less than zero."); return; }

    const newIncome = { date, amount: Number(amount), description };

    if (editingIndex === null) {
      // Add new row
      setIncomeList([...incomeList, newIncome]);
    } else {
      // Update existing row
      const updatedList = incomeList.map((item, idx) => idx === editingIndex ? newIncome : item);
      setIncomeList(updatedList);
      setEditingIndex(null); // Reset editing state
    }

    // Clear form fields
    setDate("");
    setAmount("");
    setDescription("");
  };

  const handleRemove = (index) => {
    setIncomeList(incomeList.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const item = incomeList[index];
    setDate(item.date);
    setAmount(item.amount);
    setDescription(item.description);
    setEditingIndex(index); // Mark row for updating
  };

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

          {/* Always says "Add" */}
          <button type="button" className="btn" onClick={handleAddBtn}>
            Add
          </button>

           <button type="button" className="btn" onClick={() => navigate('/expenses')}>
           Go to Expenses
          </button>

        </form>
      </section>

      <table id='income-board'>
        <caption>My monthly income</caption>
        <thead>
          <tr>
            <th className="date">Date</th>
            <th className="amount">Amount</th>
            <th className='expand'>Description</th>
            <th className="action">Action</th>
          </tr>
        </thead>
        <tbody>
          {incomeList.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
              <td>{item.description}</td>
              <td>
                <span className="action-buttons">
                  <BsFillTrashFill
                    onClick={() => handleRemove(index)}
                    style={{ cursor: 'pointer', marginRight: '8px' }}
                  />
                  <BsFillPencilFill
                    onClick={() => handleEdit(index)}
                    style={{ cursor: 'pointer' }}
                  />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Balance</th>
            <th>{totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
