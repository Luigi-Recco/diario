import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MovieList from "./Screen/MovieList";
import CadScreen from "./Screen/CadFMovie";

        const Stack = createNativeStackNavigator();

export default function App()
{
    return(

        <NavigationContainer>
                <Stack.Navigator initialRouteName="Cadastre o filme">
                      <Stack.Screen  name="Seus Filmes" component={MovieList}/>
                      <Stack.Screen  options={{headesShown: false}} name="Cadastre o filme" component={CadScreen}/>
                 </Stack.Navigator>
         </NavigationContainer>
    );
}