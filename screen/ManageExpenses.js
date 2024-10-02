import { useLayoutEffect } from "react";
import { View,Text, StyleSheet } from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
function ManageExpenses({route , navigation}){
    const editedExpenseId= route.params?.expenseId
    const isEditing= !!editedExpenseId
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    },[navigation,isEditing])
    function expenseDeleteHandler(){
        console.log('delete')
    }
    return(
        <View style={styles.container}>
           {isEditing &&
           <View style={styles.deleteContainer}>
            <IconButton size={36} name="trash" 
            color={GlobalStyles.colors.error500}
            onPress={expenseDeleteHandler}
            />
           </View>
           }
        </View>
    )
}
export default ManageExpenses;
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:GlobalStyles.colors.primary800
    },
    deleteContainer:{
       alignItems:'center',
       marginTop:16,
       paddingTop:8,
       borderTopWidth:2,
       borderTopColor:GlobalStyles.colors.primary200
    }
})