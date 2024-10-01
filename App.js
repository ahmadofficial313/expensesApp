import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpenses from './screen/ManageExpenses';
import RecentExpenses from './screen/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import {Ionicons} from '@expo/vector-icons'

const Stack=createNativeStackNavigator()
const BottomTabs=createBottomTabNavigator()

function ExpensesOverview(){
  return(
    <BottomTabs.Navigator screenOptions={{
      headerStyle:{backgroundColor:GlobalStyles.colors.primary500},
      headerTintColor:'white',
      tabBarStyle:{backgroundColor:GlobalStyles.colors.primary500},
      tabBarActiveTintColor:GlobalStyles.colors.accent500,
    }}>
          
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
        component={RecentExpenses}/>
        </BottomTabs.Navigator>
  )
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='ExpensesOverview' 
          options={{
            headerShown:false
          }}
          component={ExpensesOverview}/>
        <Stack.Screen name="ManageExpenses" component={ManageExpenses}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


