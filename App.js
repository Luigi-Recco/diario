import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CadScreen from "./Screen/CadItens";

        const Stack = createNativeStackNavigator();

export default function App()
{
    return(

        <NavigationContainer>
                <Stack.Navigator initialRouteName="Cadastre suas compras">
                      <Stack.Screen  name="Cadastre as imagens de suas compras" component={CadImage}/>
                      <Stack.Screen  name="Cadastre suas compras" component={CadScreen}/>
                 </Stack.Navigator>
         </NavigationContainer>
    );
}