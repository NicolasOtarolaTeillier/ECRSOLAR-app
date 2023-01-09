import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductivityScreen from '../screens/Productivity/ProductivityScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator()

// function Home() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={HomeScreen} />
//       <Tab.Screen name="Messages" component={ProductivityScreen} />
//     </Tab.Navigator>
//   );
// }



const AppStack = ()=> {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductivityScreen" component={ProductivityScreen}/>

    </Stack.Navigator>
  )
}
export default AppStack

