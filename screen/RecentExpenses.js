import { View, Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { getDateMinusDays } from "../util/Date";
import { fetchExpenses } from "../util/Http";
import { ExpenseContext } from "../store/ExpenseContext";
import LoadingOverlay from '../components/ExpensesOutput/UI/LoadingOverlay'
import ErrorOverlay from "../components/ExpensesOutput/UI/ErrorOverlay";
function RecentExpenses() {
  const[isFetching,setIsFetching]=useState(true)
  const [error,setError]=useState(false)
   const ExpenseCtx=useContext(ExpenseContext)
  useEffect(() => {
    async function getExpense() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses();
        ExpenseCtx.setExpenses(expenses);

      } catch (error) {
        setError('Could not fetch expenses!')
      }
      
      setIsFetching(false)
      
    }
    getExpense();
  }, []);

  const recentExpenses = ExpenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });

  function errorHandler(){
    setError(null)
  }
  if (error && !isFetching) {
    return <ErrorOverlay message={error} onPress={errorHandler}/>;
  }

  
  
  if(isFetching){
    return <LoadingOverlay/>
  }
 
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallback="There is no expense register for the last 7 days"
    />
  );
}
export default RecentExpenses;
