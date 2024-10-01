import { View,Text,StyleSheet,FlatList } from "react-native"
import ExpensesSummary from "./ExpensesSumary"
import ExpensesList from "./ExpensesList"

function ExpensesOutput({expenses,expensesPeriod}){
     return(
        <View>
            <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
            <ExpensesList/>
        </View>
     )
}
export default ExpensesOutput