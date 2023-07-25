import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { Pontos } from './src/components/pontos';
///Imagens
import Blue from './src/assets/blue.jpg';
import Green from './src/assets/green.jpg'
export default function App() {
  return (
   <SafeAreaView>
      <View>
      <Pontos fundo = {Blue} rotacao = {180} />
      <Pontos fundo = {Green} rotacao = {0}/>
      <StatusBar style='ligth' />
      </View>
   </SafeAreaView>
  );
}

