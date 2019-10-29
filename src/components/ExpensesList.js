import React from "react";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ expenses, handleDelete, handleEdit }) {
  return (
    <div className="expenses">
      {expenses.map(item => {
        return (
          <ExpenseItem
            key={item.id}
            id={item.id}
            charge={item.charge}
            amount={item.amount}
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}
