import React from "react";
import { StyleSheet,Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screen/Home";
import LoginScreen from "./Screen/Login";

        const Stack = createNativeStackNavigator();

export default functionApp()
{
    return(

        <NavigationContainer>
                <Stack.Navigator>
                      <Stack.Screen  name="Home" component={HomeScreen}/>
                      <Stack.Screen  options={{headesShown: false}} name="Login" component={LoginScreen}/>
                 </Stack.Navigator>
         </NavigationContainer>
    );
}