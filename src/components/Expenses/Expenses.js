import React, { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import MonthlyBudget from "../MonthlyBudget/MonthlyBudget";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2023");
  const [monthlyBudget, setMonthlyBudget] = useState("3500");

  const changeFilterHandler = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilter;
  });

  const changeBudgetHandler = (budget) => {
    setMonthlyBudget(budget);
  };

  return (
    <div>
      <Card className="expenses">
        <MonthlyBudget onChangeBudget={changeBudgetHandler} budget={monthlyBudget} />
        <ExpensesFilter
          selected={selectedFilter}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} budget={monthlyBudget} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
