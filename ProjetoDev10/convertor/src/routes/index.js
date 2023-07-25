import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaQuilometros from '../pages/quilometros';
import TelaMilhas from '../pages/milhas';
import { Entypo,FontAwesome5 } from '@expo/vector-icons';
const Tabs = createBottomTabNavigator();


export default function Rotas() {
    return (
        <NavigationContainer>
            <Tabs.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
                <Tabs.Screen 
                name='Quilômetros para Milhas' 
                component={TelaQuilometros}
                options={{
                    tabBarIcon: () => (
                        <Entypo name="ruler" size={24} color="black" />
                    )
                }}
                />
                <Tabs.Screen
                 name='Milhas para Quilômetros' 
                 component={TelaMilhas}
                 options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="ruler-combined" size={24} color="black" />
                    )
                }}
                />
                
            </Tabs.Navigator>
            <StatusBar style='auto' />
        </NavigationContainer>
    )
}