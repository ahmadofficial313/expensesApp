import { createContext, useReducer } from "react";
const Dummy_Expenses=[
   {
    id:'e1',
    description:'helo',
    amount:12,
    date: new Date('2023-09-01')
   },
    
]
export const ExpenseContext= createContext({
    expenses:[],
    addExpense:({description,amount,date})=>{},
    deleteExpense:(id)=>{},
    updateExpense:(id,{description,amount,date})=>{},


})
function expenseReducer(state,action){
    switch(action.type){
        case 'ADD':
           
            const id= new Date().toString() + Math.random().toString();
           
            return [{...action.payload,id:id},...state]
        case 'UPDATE':
            const updateableExpenseIndex=state.findIndex((expense)=> expense.id ===action.payload.id);
            const updateableExpense= state[updateableExpenseIndex]
            const updateItem= {...updateableExpense, ...action.payload.data}
            const updatedExpense=[...state];
            updatedExpense[updateableExpenseIndex]= updateItem;
            return updatedExpense;
          
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
                default:
                return state;
    }

}
function ExpenseContextProvider({children}){
    const[expensesState,dispatch]=useReducer(expenseReducer,Dummy_Expenses);
     function addExpense(expenseData){
        dispatch({type:'ADD', payload: expenseData})
     }
     function deleteExpense(id){
        dispatch({type:'DELETE',payload:id})
     }

     function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
      }
 
 const value={
    expenses:expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
 };
    return <ExpenseContext.Provider value={value}>
                   {children}
            </ExpenseContext.Provider>
}

export default ExpenseContextProvider