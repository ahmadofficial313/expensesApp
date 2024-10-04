import { useContext, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconButton from "../components/ExpensesOutput/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ExpensesOutput/UI/Button";
import { ExpenseContext } from "../store/ExpenseContext";
import ExpenseForm from "../components/ExpensesOutput/ExpenseForm";

function ManageExpenses({ route, navigation }) {
    const expenseCtx = useContext(ExpenseContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        });
    }, [navigation, isEditing]);

    function expenseDeleteHandler() {
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            expenseCtx.updateExpense(editedExpenseId, {
                description: 'Updated Text',
                amount: 99.99,
                date: new Date('2024-10-04'),
            });
        } else {
            expenseCtx.addExpense({
                description: 'some pair of socks',
                amount: 15.00,
                date: new Date('2024-02-23'),
            });
        }
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.container}>
                <ExpenseForm onCancel={cancelHandler} onSubmit={confirmHandler} isEditing={isEditing}/>
               
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
