import React from "react";

export default function ExpenseItem({
  charge,
  amount,
  id,
  handleDelete,
  handleEdit
}) {
  return (
    <React.Fragment>
      <div className="expenses">
        <div className="expense">
          <h3>{charge}</h3>
          <h3>{amount}</h3>
          <div className="btns">
            <button className="btn" onClick={() => handleDelete(id)}>
              Delete
            </button>
            <button
              className="btn"
              onClick={() => {
                handleEdit(id, charge, amount);
              }}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
