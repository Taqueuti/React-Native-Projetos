import Rotas from './src/routes/rotas';

import {
  useFonts,
  ChakraPetch_400Regular,
  ChakraPetch_600SemiBold,
} from '@expo-google-fonts/chakra-petch';


export default function App() {

  const [loaded] = useFonts({
    ChakraPetch_400Regular,
    ChakraPetch_600SemiBold,
  })

  if (loaded) {
    return (

      <Rotas />
    );
  }

}
