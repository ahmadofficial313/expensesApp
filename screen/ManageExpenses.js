import { useContext, useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ExpensesOutput/UI/Button";
import { ExpenseContext } from "../store/ExpenseContext";
import ExpenseForm from "../components/ExpensesOutput/ExpenseForm";
import { storeExpense , updateExpense, deleteExpense } from "../util/Http";
import LoadingOverlay from "../components/ExpensesOutput/UI/LoadingOverlay";
import ErrorOverlay from "../components/ExpensesOutput/UI/ErrorOverlay";

function ManageExpenses({ route, navigation }) {
    const [isSubmitting,setIsSubmitting]=useState(false)
    const [error,setError]=useState(false)

    const expenseCtx = useContext(ExpenseContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;
    const selectedExpense= expenseCtx.expenses.find(expense => expense.id === editedExpenseId)
  
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    async function expenseDeleteHandler() {
        setIsSubmitting(true)
        try {
            await deleteExpense(editedExpenseId)
            expenseCtx.deleteExpense(editedExpenseId);
            navigation.goBack();
        } catch (error) {
            setError('Could not delete expense, please try again later')
        }
       
    }

    function cancelHandler() {
        navigation.goBack();
    }

    async function confirmHandler(expenseData) {
        setIsSubmitting(true)
        try {
            if (isEditing) {
                expenseCtx.updateExpense(editedExpenseId, expenseData);
                await updateExpense(editedExpenseId, expenseData);
    
                
            } else {
               const id= await storeExpense(expenseData);
                expenseCtx.addExpense({...expenseData,id:id});
               
            }  
            navigation.goBack();
   
        } catch (error) {
            setError('Could not save data, please try again later')
            setIsSubmitting(false)
        }
       
    }
    function errorHandler(){
        setError(null)
      }
    if (error && !isFetching) {
        return <ErrorOverlay message={error} onPress={errorHandler} />;
      }
    if(isSubmitting){
        return <LoadingOverlay/>
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <ExpenseForm 
                onCancel={cancelHandler}
                 onSubmit={confirmHandler}
                  isEditing={isEditing}
                  defaultValues={selectedExpense}
                  />
               
                {isEditing && (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            size={36}
                            name="trash"
                            color={GlobalStyles.colors.error500}
                            onPress={expenseDeleteHandler}
                        />
                    </View>
                )}
            </View>
        </ScrollView>
    );
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
    },
   
});
