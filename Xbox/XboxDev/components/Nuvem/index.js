import React from "react";
import {View, ImageBackground, Text, Image} from 'react-native';

//imagens
import Fundo from './assets/fundo.png';
import Xcloud from './assets/xcloud.png'
//estilo
import estilos from './style'

export default function Nuvem (props){
    return(
     <ImageBackground 
     source={ Fundo }
     style={estilos.container}
     >
        <Text style={estilos.titulo}>
            Xbox Cloud Gaming
        </Text>

        <Text style={estilos.subTitulo}>
            Serviços de streaming de jogos
        </Text>

        <Text style={estilos.texto}>
            Jogue mais de 100 jogos de console de alta qualidade no seu dispositivo favorito.
        </Text>

        <Text style={estilos.texto}>
           Desktop, Notebook, console ou até mesmo celular pode se tornar um XBOX.
        </Text>

        <Text style={estilos.texto}>
            Através de uma assinatura você terá um XBOX virtual sempre que precisar.
        </Text>

        <Image 
         source={ Xcloud }
         style={estilos.imagem}
        />
     </ImageBackground>
    )
}