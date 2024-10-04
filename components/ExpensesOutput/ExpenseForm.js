import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import Input from "./Input";
import { Text, View, StyleSheet } from "react-native";
import Button from "../ExpensesOutput/UI/Button"

function ExpenseForm({onCancel,onSubmit,isEditing}) {
    const [inputValues, setInputValue] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValue((currentValue) => {
            return {
                ...currentValue,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler(){

    }

    return (
      <View style={styles.form}>
        <Text style={styles.label}>Your Expense</Text>
        <View style={styles.innerContainer}>
          <Input
            style={styles.input}
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: inputChangeHandler.bind(this, "amount"),
              value: inputValues.amount,
            }}
          />
          <Input
            style={styles.input}
            label="Date"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLength: 10,
              onChangeText: inputChangeHandler.bind(this, "date"),
              value: inputValues.date,
            }}
          />
        </View>
        <Input
          label="Description"
          textInputConfig={{
            placeholder: "About Expense",
            multiline: true,
            maxLength: 100,
            onChangeText: inputChangeHandler.bind(this, "description"),
            value: inputValues.description,
          }}
        />
        <View style={styles.buttons}>
          <Button style={styles.button} mode="flat" onPress={onCancel}>
            Cancel
          </Button>
          <Button style={styles.button} onPress={onSubmit}>
            {isEditing ? "Update" : "Add"}
          </Button>
        </View>
      </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  input: {
    flex: 1,
  },
  form: {
    marginTop: 80,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    color: GlobalStyles.colors.primary100,
    textAlign: "center",
    marginBottom: 5,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
