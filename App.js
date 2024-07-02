import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CadScreen from "./Screen/CadItens";
import CadImage from "./Screen/CadImage";       
      
        const Stack = createNativeStackNavigator();
        const Tab = createMaterialTopTabNavigator();
function TabNavigator()
{
    return(

        <TabNavigator>
                <Tab.Screen name ="Cadastre suas compras" component={ StackNavigator}/>
                <Tab.Screen name ="Cadastre as imagens das suas compras" component={CadImage}/>
        </TabNavigator>

    );
}

function StackNavigator(){
        return(
                <Stack.Navigator>
                        <Stack.Screen name ='Cadastre suas compras' component={CadScreen}/>
                        <Stack.Screen  name ="Cadastre as imagens das suas compras" component={CadImage}/>
                </Stack.Navigator>
        )
}

export default function App(){
        return(
                <NavigationContainer>
                        <TabNavigator/>
                </NavigationContainer>
        )
}