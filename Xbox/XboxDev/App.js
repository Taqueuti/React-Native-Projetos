import { StatusBar } from 'expo-status-bar';

//Navegacao
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
//Componentes
import TelaInicial from './components/TelaInicial';
import TelaConsoles from './components/Console';
import TelaJogos from './components/Jogos';
import TelaNuvem from './components/Nuvem';


export default function App() {
  return (

      <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen 
           name='Inicio'
           component={ TelaInicial }
           />
          <Stack.Screen 
           name='Consoles'
           component={ TelaConsoles }
           />
          <Stack.Screen
          name='Jogos'
          component={ TelaJogos }
          />
          <Stack.Screen
          name='Nuvem'
          component={ TelaNuvem }
          />
        </Stack.Navigator>
         
      <StatusBar style="auto" />
      </NavigationContainer>
      
  );
}



