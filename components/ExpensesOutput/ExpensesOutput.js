import { View,StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSumary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

function ExpensesOutput({expenses,expensesPeriod}){
    
     return(
        <View style={styles.container}>
            <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
            <ExpensesList expenses={expenses}/>
        </View>
     )
}
export default ExpensesOutput
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:GlobalStyles.colors.primary700,
        paddingHorizontal:20,
        paddingTop:20,
        paddingBottom:0
    }
})