// components are just javaScript functions
import React, { useState } from "react"; // used for changing values
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // one parameter: object has all the properties of the element in App.js

  // const [title, setTitle] = useState(props.title); this is a react Hook! (all start with word 'use') only called inside component, and not nested in other function
  // first array destructuring is the props.title 'initial' value, and second is the function to call to set different value
  // setTitle is a naming convention
  // each time useState(value) is called, a new state is created for this instance.
  // using const on destructuring because the variable changed is within useState() function and managed by React
  // once useState is initialized, only grabs latest state instead of re-executed

  // const clickHandler = () => {
  //     setTitle('Updated!')   this is because it assigns a value, AND re-executes the jsx component function
  //     console.log(title)   see old value because setTitle is scheduled later
  //   }

  return (
    // have to add attribute support on custom elements (tweak code)
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <li className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </li>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
