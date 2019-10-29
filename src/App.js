import React, { useState, useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import ExpensesList from "./components/ExpensesList";
import uuid from "uuid/v4";

const InitialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "gym", amount: 200 },
  { id: uuid(), charge: "shoes", amount: 120 }
];

function App() {
  const [expenses, setExpenses] = useState(InitialExpenses);

  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");

  const handleCharge = e => {
    setCharge(e.target.value);
  };

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (charge.length > 0 && amount.length > 0) {
      setExpenses([
        ...expenses,
        {
          id: uuid(),
          charge,
          amount
        }
      ]);
      setCharge("");
      setAmount("");
    } else {
      setCharge("");
      setAmount("");
    }
  };

  const handleDelete = id => {
    const newExpenses = expenses.filter(item => item.id !== id);
    setExpenses(newExpenses);
  };

  const handleEdit = (id, charge, amount) => {
    const newExpenses = expenses.filter(item => item.id !== id);
    setExpenses(newExpenses);
    setCharge(charge);
    setAmount(amount);
  };

  const clearExpenses = () => {
    setExpenses([]);
  };

  return (
    <React.Fragment>
      <div className="container">
        <h2>Budget App</h2>
        <Form
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
        />
        <ExpensesList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />

        <button className="clear-btn" onClick={() => clearExpenses()}>
          Clear All
        </button>
        <h3>
          Total Ampount:{" "}
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </h3>
      </div>
    </React.Fragment>
  );
}

export default App;
