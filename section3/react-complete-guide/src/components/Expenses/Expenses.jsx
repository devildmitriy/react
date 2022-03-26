import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses({ expenses }) {
  const [filteredYear, setfilteredYear] = useState("2021");

  const filterExpenseHandler = (year) => {
    setfilteredYear(year);
  };

  const filteredExpense = expenses.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterExpense={filterExpenseHandler}
      />
      <ExpensesChart expenses={filteredExpense} />
      <ExpensesList expenses={filteredExpense} />
    </Card>
  );
}

export default Expenses;
