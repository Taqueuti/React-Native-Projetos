import React, { useState } from 'react'
import { ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Fundo from '../../assets/background_b.jpeg';
import { Input } from '../../components/input';
import estilo from './estilo';
import { Contador } from '../../components/contador';

export default function TelaQuilometros() {
    const [kms, setKms] = useState(0);

    function converterKmParaMil(milhas) {
        const valorConvertido = milhas * 1.60;

        setKms(valorConvertido.toFixed(2))

    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
                source={Fundo}
                blurRadius={85}
                style={estilo.container}
            >


                <Input
                    titulo=" Conversor de milhas para quilômetros "
                    descricao="Milhas"
                    valorAlterado={valorInput => converterKmParaMil(valorInput)}
                />

                <Contador
                    count={kms}
                    texto='Quilômetros'
                />

            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}
