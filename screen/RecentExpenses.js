import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { getDateMinusDays } from "../util/Date";
import { fetchExpenses } from "../util/Http";
import { ExpenseContext } from "../store/ExpenseContext";
function RecentExpenses() {
   const ExpenseCtx=useContext(ExpenseContext)
  useEffect(() => {
    async function getExpense() {
      const expenses = await fetchExpenses();
      ExpenseCtx.setExpenses(expenses);
      
    }
    getExpense();
  }, []);

  const recentExpenses = ExpenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallback="There is no expense register for the last 7 days"
    />
  );
}
export default RecentExpenses;
