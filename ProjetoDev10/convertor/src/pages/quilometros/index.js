import React, {useState} from 'react'
import { ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Fundo from '../../assets/background.jpg';
import { Input } from '../../components/input';
import estilo from './estilo';
import { Contador } from '../../components/contador';

export default function TelaQuilometros() {
    const [milhas, setMilhas] = useState(0);
    
    function converterKmParaMil (km) {
        const valorConvertido = km / 1.60;
        
        return setMilhas(valorConvertido.toFixed(2))

    }

    return (
       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        source={Fundo}
        blurRadius={85}
        style={estilo.container}
      >
        <Input
          titulo="Conversor de quilômetros para milhas"
          descricao="Quilômetros"
          valorAlterado={valorInput => converterKmParaMil(valorInput)}
        />

        <Contador
          count={milhas}
          texto="Milhas"
        />
      </ImageBackground>
    </TouchableWithoutFeedback>
    )
}
