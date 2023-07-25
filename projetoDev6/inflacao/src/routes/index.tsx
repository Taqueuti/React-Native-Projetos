import React from "react";
//Navegação
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tabs = createBottomTabNavigator();
///Componentes
import TelaSalario from "../pages/salario";
import TelaInflacao from "../pages/inflacao";
import TelaComparacao from "../pages/comparacao";
//icones 
import { MaterialIcons, FontAwesome, } from '@expo/vector-icons';

export default function Rotas() {
   return (
      <NavigationContainer>
         <Tabs.Navigator
            screenOptions={{
               headerTitleAlign: 'left',
               headerStyle: {
                  height: 90,
               },
               headerTitleStyle: {
                  fontSize: 20,
                  fontWeight: '300'
               }
            }}
         >
            <Tabs.Screen
               name="Salário"
               component={TelaSalario}
               options={{
                  tabBarIcon: ({color}) => (
                     <MaterialIcons name="attach-money" size={24} color={color} />
                  )
               }}
            />
            <Tabs.Screen
               name="Inflação"
               component={TelaInflacao}
               options={{
                  tabBarIcon: ({color}) => (
                     <MaterialIcons name="trending-up" size={24} color={color} />
                  )
               }}
            />
            <Tabs.Screen
               name="Salário x Inflação"
               component={TelaComparacao}
               options={{
                  tabBarIcon: ({color}) => (
                     <MaterialIcons name="compare-arrows" size={24} color={color} />
                  )
               }}
            />
         </Tabs.Navigator>
      </NavigationContainer>
   )
}