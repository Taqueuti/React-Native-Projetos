import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaInicio from "../pages/inicio";
import TelaQuiz from '../pages/quiz';

const Stack = createStackNavigator();

export default function Rotas() {




  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Inicio" component={TelaInicio} />
        <Stack.Screen name="Quiz" component={TelaQuiz} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

