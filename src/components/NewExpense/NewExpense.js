import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // used to get info from child ExpenseForm (passing data up)
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [activatedForm, setActivatedForm] = useState(false);

  const formActivateHandler = (activatedBool) => {
    setActivatedForm(activatedBool);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onActivatedForm={formActivateHandler}
        activated={activatedForm}
      />
    </div>
  );
};

export default NewExpense;
