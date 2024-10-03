import { View,Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import {ExpenseContext} from '../store/ExpenseContext'
import { useContext } from "react";
import { getDateMinusDays } from "../util/Date";
function RecentExpenses(){
    const ExpenseCtx=useContext(ExpenseContext)
    const recentExpenses = ExpenseCtx.expenses.filter((expenses) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);
        return expenses.date > date7DaysAgo ;
      });
    return(
        <ExpensesOutput expenses={recentExpenses} expensesPeriod='Last 7 days'/>
    )
}
export default RecentExpenses;