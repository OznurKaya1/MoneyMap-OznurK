import React, { useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Tracking.css";

export default function Expenses({ expenseList, setExpenseList }) {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");

  const handleAddBtn = (e) => {
    e.preventDefault();
    setError("");

    if (!date) { setError("Please enter date."); return; }
    if (!amount) { setError("Please enter amount."); return; }
    if (Number(amount) < 0) { setError("Amount can't be negative."); return; }

    const newExpense = { date, amount: Number(amount), description };

    if (editingIndex === null) {
      setExpenseList([...expenseList, newExpense]);
    } else {
      const updatedList = expenseList.map((item, idx) =>
        idx === editingIndex ? newExpense : item
      );
      setExpenseList(updatedList);
      setEditingIndex(null);
    }

    setDate("");
    setAmount("");
    setDescription("");
  };

  const handleRemove = (index) => {
    setExpenseList(expenseList.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const item = expenseList[index];
    setDate(item.date);
    setAmount(item.amount);
    setDescription(item.description);
    setEditingIndex(index);
  };

  const totalExpense = expenseList.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="main-container">
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

      <table id="expense-board">
        <caption>My monthly expenses</caption>
        <thead>
          <tr>
            <th className="date">Date</th>
            <th className="amount">Amount</th>
            <th className="expand">Description</th>
            <th className="action">Action</th>
          </tr>
        </thead>

        <tbody>
          {expenseList.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.amount.toLocaleString("en-US", { style: "currency", currency: "USD" })}</td>
              <td>{item.description}</td>
              <td>
                <span>
                  <BsFillTrashFill onClick={() => handleRemove(index)} />
                  <BsFillPencilFill onClick={() => handleEdit(index)} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th>Total</th>
            <th>{totalExpense.toLocaleString("en-US", { style: "currency", currency: "USD" })}</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
