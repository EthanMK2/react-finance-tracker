import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); // empty initial string in input (.value is always string)
  const [enteredAmount, setEnteredAmount] = useState(""); // multiple states for this single component
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // UPDATE BASED ON PREVIOUS STATE: use this syntax for reliable results, where setUserInput is from the destructuring of useState(object)
    // setUserInput((previousState) => {
    //     return { ...previousState, enteredTitle: event.target.value}
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent the request and reloading of page

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // pattern that is used often. How to communicate UP the ladder of components
    props.onActivatedForm(false)

    setEnteredTitle(""); // two way binding to clear input. notice value={enteredTitle} in input so that the state is put into the input after submitting
    setEnteredAmount(""); // two way binding is used primarily with form submissions
    setEnteredDate(""); // now how do we pass data up? (child to parent?) cannot skip intermediate components
  };

  const clickedAddBtn = () => {
    props.onActivatedForm(true);
  };

  const cancelAddExpense = () => {
    props.onActivatedForm(false);
  };

  if (props.activated === false) {
    return (
      <div>
        <button onClick={clickedAddBtn}>Add Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelAddExpense}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
