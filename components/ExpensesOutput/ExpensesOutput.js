import { View,StyleSheet,Text } from "react-native"
import ExpensesSummary from "./ExpensesSumary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"

function ExpensesOutput({expenses,expensesPeriod,fallback}){
    let content = <View style={{marginTop:30}}>
                         <Text style={styles.infotext}>Oops!</Text>
                       <Text style={styles.infotext}>{fallback}</Text>
                    </View>
    if(expenses.length>0){
        content=<ExpensesList expenses={expenses}/>
    }
     return(
        <View style={styles.container}>
            <ExpensesSummary periodName={expensesPeriod} expenses={expenses}/>
            {content}
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
    },
    infotext:{
        color:'white',
        textAlign:'center',
        fontSize:16
    }
})