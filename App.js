import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./Screen/MovieList";
import LoginScreen from "./Screen/Login";

        const Stack = createNativeStackNavigator();

export default function App()
{
    return(

        <NavigationContainer>
                <Stack.Navigator initialRouteName="Login">
                      <Stack.Screen  name="Movie" component={MovieList}/>
                      <Stack.Screen  options={{headesShown: false}} name="Login" component={LoginScreen}/>
                 </Stack.Navigator>
         </NavigationContainer>
    );
}