import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DailyPicScreen from "./screens/DailyPic"
import SpaceCraftsScreen from "./screens/SpaceCrafts"
import StarMap from "./screens/StarMap";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

const Stack = createStackNavigator()

export default class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName = "Daily Pic" screenOptions = {{headerShown:false}}>
          <Stack.Screen name = "Daily Pic" component = {DailyPicScreen}/>
          <Stack.Screen name = "Space Craft" component = {SpaceCraftsScreen}/>
          <Stack.Screen name = "Star Map" component = {StarMap}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}