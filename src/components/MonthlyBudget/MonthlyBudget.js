import './MonthlyBudget.css'

const MonthlyBudget = (props) => {

  const changeBudget = event => {
    props.onChangeBudget(event.target.value)
  }

  return (
    <div className="monthly-budget__controls">
      <label>Monthly Budget:</label>
      <input className="budget" type="number" onChange={changeBudget} value={props.budget} />
    </div>
  );
};

export default MonthlyBudget;
