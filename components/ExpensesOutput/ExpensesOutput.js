import { View,StyleSheet } from "react-native"
import ExpensesSummary from "./ExpensesSumary"
import ExpensesList from "./ExpensesList"
import { GlobalStyles } from "../../constants/styles"
const Dummy_Expenses=[
    {
        id:'e1',
        description:'some banana',
        amount:12.34,
        date:new Date('2023-12-23')
    },
    {
        id:'e2',
        description:'some aple',
        amount:12,
        date:new Date('2023-12-23')
    },
    {
        id:'e3',
        description:'some banana',
        amount:17,
        date:new Date('2023-14-23')
    },
    {
        id:'e4',
        description:'some grpes',
        amount:12.34,
        date:new Date('2024-01-23')
    },
    {
        id:'e5',
        description:'some pair of soacks',
        amount:15,
        date:new Date('2024-02-23')
    },
    {
        id:'e6',
        description:'some banana',
        amount:6,
        date:new Date('2023-12-24')
    },
    {
        id:'e7',
        description:'some banana',
        amount:6,
        date:new Date('2023-12-24')
    },
    {
        id:'e8',
        description:'some banana',
        amount:6,
        date:new Date('2023-12-24')
    }
]
function ExpensesOutput({expenses,expensesPeriod}){
     return(
        <View style={styles.container}>
            <ExpensesSummary periodName={expensesPeriod} expenses={Dummy_Expenses}/>
            <ExpensesList expenses={Dummy_Expenses}/>
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