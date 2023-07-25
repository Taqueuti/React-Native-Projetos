import React from "react";
import {Text, ImageBackground, View, Image} from  'react-native';
//Imagens
import Capa from './assets/capa.jpg';
import Perfil from './assets/perfil.jpg';
//Estilos
import estilos from './style'

export default function TelaInicio (){
    return(
    <ImageBackground 
    style={estilos.container} 
    source={ Capa }
    blurRadius= {5}
    >
         <Image style={estilos.foto} source={ Perfil } />

         <View style={estilos.card}>
            <Text style={estilos.titulo}>Ayrton Senna</Text>
            <Text style={estilos.texto}>
                Através desse App, Você vai conhecer um pouco sobre quem foi esse grande piloto
            </Text>
         </View>
    </ImageBackground>
    )
}