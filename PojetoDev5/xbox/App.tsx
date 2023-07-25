import { StatusBar } from 'expo-status-bar';
import { FontAwesome5,  Ionicons  } from '@expo/vector-icons';
//Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TelaXbox } from './src/pages/xbox';
import { TelaPlay } from './src/pages/play';
import { TelaNitendo } from './src/pages/nitendo';
const Abas = createBottomTabNavigator();

export default function App() {
  return (
       <NavigationContainer>
          <Abas.Navigator
            screenOptions={{
               headerStyle:{
                  height: 80,
                  backgroundColor: '#fff'
               },
               headerTitleAlign:'left',
               headerTitleStyle:{
                fontWeight: '300',
                fontSize: 20,
               },

            }}
          >
              <Abas.Screen 
              name='Xbox' 
              component={ TelaXbox } 
              options={{
                   tabBarIcon: () => (
                    <FontAwesome5 name="xbox" size={24} color="#b6b5b3" />
                   )
              }}
              />
              <Abas.Screen 
              name='Play' 
              component={ TelaPlay } 
               options={{
                tabBarIcon: () => (
                  <Ionicons name="logo-playstation" size={27} color="#b6b5b3" />
                )
               }}
               />
              <Abas.Screen 
              name='Nitendo' 
              component={ TelaNitendo } 
                options={{
                tabBarIcon: () => (
                 <FontAwesome5 name="xbox" size={24} color="#b6b5b3" />
                )
               }}
              />
             
          </Abas.Navigator>
          <StatusBar style='auto'/>
       </NavigationContainer>
  );
}

