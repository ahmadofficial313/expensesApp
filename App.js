import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpenses from './screen/ManageExpenses';
import RecentExpenses from './screen/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons'
import IconButton from './components/ExpensesOutput/UI/IconButton';
import AllExpenses from './screen/AllExpenses';
import ExpenseContextProvider from './store/ExpenseContext';

const Stack=createNativeStackNavigator()
const BottomTabs=createBottomTabNavigator()

function ExpensesOverview(){
  return(
    <BottomTabs.Navigator screenOptions={({navigation})=>({
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
      headerRight:()=>{
        return <IconButton size={24} color='white' name="add" 
        onPress={()=>{
          navigation.navigate('ManageExpenses')
        }}/>
      }
    })}>
          
      <BottomTabs.Screen name='RecentExpenses'
        options={{
          title:'Recent Expenses',
          tabBarIcon:({color,size})=><Ionicons name="hourglass" color={color} size={size}/>
        }}
        component={RecentExpenses}/>

        <BottomTabs.Screen name='AllExpenses'
        options={{
          title:'All Expenses',
          tabBarIcon:({color,size})=><Ionicons name="calendar" color={color} size={size}/>
        }}
        component={AllExpenses}/>
        </BottomTabs.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpenseContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
              headerTintColor:'white',
        }}>
          <Stack.Screen name='ExpensesOverview' 
          options={{
            headerShown:false
          }}
          component={ExpensesOverview}/>
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}
         options={{
      
          presentation:'modal'

         }}
         />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContextProvider>
    </>
  );
}


