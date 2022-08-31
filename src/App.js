import "./App.css";
import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Car Insurance",
    amount: 265.43,
    date: new Date(2022, 5, 2),
  },
  {
    id: 'e2',
    title: "Housing",
    amount: 2650.00,
    date: new Date(2022, 6, 2),
  },
  {
    id: 'e3',
    title: "Car",
    amount: 265.43,
    date: new Date(2021, 1, 3),
  },
  {
    id: 'e4',
    title: "Stuff",
    amount: 265.43,
    date: new Date(2021, 7, 6),
  },
  {
    id: 'e5',
    title: "Things",
    amount: 265.43,
    date: new Date(2020, 4, 9),
  },
  {
    id: 'e6',
    title: "Things",
    amount: 1000.00,
    date: new Date(2022, 4, 9),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {  // use a function to update based on previous data
      return [expense, ...prevExpenses]
    })
  }

  // we have to "lift the state up" using props and functions to communicate between siblings
  return (
    <div>
      <h1>Finance Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
