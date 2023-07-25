import React from "react";
import { Text, View, Image } from "react-native";
//Estilos
import estilo from './estilos/textos'


const  Conclusao = ()=> {
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}>Conclusão</Text>        
         <Text style={estilo.texto}>
            A Nintendo é uma das empresas mais icônicas da indústria de jogos eletrônicos e até hoje atrai milhares de fãs com seus consoles e franquias como Super Mario, The Legend of Zelda, Pokémon, dentre muitas outras séries adoradas pelos fãs. A Nintendo conseguiu crescer em meio a crise dos vídeo games de 1983 e transformar o que parecia ser o fim da indústria em um recomeço extremamente lucrativo. 
         </Text>
    </View>
  )
};

export default Conclusao

