import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpenses from './screen/ManageExpenses';
import RecentExpenses from './screen/RecentExpenses';

const Stack=createNativeStackNavigator()
const BottomTabs=createBottomTabNavigator()

function ExpensesOverview(){
  return(
    <BottomTabs.Navigator>
   <BottomTabs.Screen name='RecentExpenses'
    options={{
      title:'Recent Expenses'
    }}
     component={RecentExpenses}/>
    <BottomTabs.Screen name='AllExpenses'
    options={{
      title:'All Expenses'
    }}
     component={RecentExpenses}/>
     </BottomTabs.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview' component={ExpensesOverview}/>
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


