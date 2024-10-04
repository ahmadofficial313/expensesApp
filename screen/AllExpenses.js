import { View,Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import {ExpenseContext} from '../store/ExpenseContext'
function AllExpenses(){
    const expenseContext=useContext(ExpenseContext)
    return(
        <ExpensesOutput expenses={expenseContext.expenses} 
        fallback="There is no registered expense"
        expensesPeriod='Total Expenses'/>
    )
}
export default AllExpenses;