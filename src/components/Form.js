import React from "react";

export default function Form({
  charge,
  amount,
  handleCharge,
  handleSubmit,
  handleAmount
}) {
  return (
    <React.Fragment>
      <div className="forms">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="charge">Charge</label>
          <input
            type="text"
            name="charge"
            id="charge"
            value={charge}
            onChange={handleCharge}
          />
        </form>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="charge">Amount</label>
          <input
            type="number"
            name="charge"
            id="charge"
            value={amount}
            onChange={handleAmount}
          />
        </form>
      </div>
    </React.Fragment>
  );
}
