import { StatusBar } from 'expo-status-bar';


//Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Abas = createBottomTabNavigator();

//Componentes
import TelaInicio from './components/inicio';
import TelaSobre from './components/sobre';
import TelaVitorias from './components/Vitorias';

//Icones
import { FontAwesome5, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
         screenOptions={{
            headerTitleAlign: 'left',
            headerStyle:{
              backgroundColor: '#d6ba18',
              height: 90,
            },
            headerTitleStyle:{
              fontSize: 16.5,
              fontWeight: 'bold'
            },

            tabBarStyle:{
              height: 80,
              backgroundColor: '#fff'
            },

            tabBarLabelStyle:{
               fontSize: 12,
            },
            tabBarActiveTintColor: '#ff5b40',
            tabBarInactiveTintColor: '#111111',
            tabBarInactiveBackgroundColor: '#d6ba18',
            tabBarActiveBackgroundColor: '#f5f5f5'




         }}
      >
         <Abas.Screen
          name='Início' 
          component={ TelaInicio }
           options={{
               tabBarIcon: ({color}) => (
                <FontAwesome5 name="home" size={24} color={color}  /> 
               )
           }}
          />
         <Abas.Screen
          name='Sobre'
          component={ TelaSobre }
          options={{
            tabBarIcon: ({color}) => (
          <AntDesign name="questioncircleo" size={24} color={color}  />
            )
           }}
          />
         <Abas.Screen 
         name='Vitorias' 
         component={ TelaVitorias }
         options={{
          tabBarIcon: ({color}) => (
            <AntDesign name="Trophy" size={24} color={color}  />
          )
         }}
         />
      </Abas.Navigator>
      <StatusBar style='auto'/>
    </NavigationContainer>
  );
}

