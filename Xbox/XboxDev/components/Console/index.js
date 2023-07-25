import React from "react";
import {ScrollView, View,  Text, Image} from 'react-native';

//imagens
import XboxS from './assets/xboxS.png'
import XboxX from './assets/xboxX.png'
//estilo
import estilos from './style'

export default function Console (props){
    return(
        <ScrollView style={estilos.container}>

    <View style={estilos.main}>


            <Image
               style={estilos.imagem}
               source={ XboxS }             
            />

    
            <Text style={estilos.titulo}>
                Xbox Series S
            </Text>

            <Text style={estilos.subTiutlo}>
                Desemprenho de última geração no menor Xbox de todos os tempos.
            </Text>

            <Text style={estilos.texto}>
                O Series S é pra quem busca jogos de nova geração gastando pouco. É o console mais barato da nova geração. Ele é o equilibrio entre gráficos e performance.
            </Text>
     



       <Image
               style={estilos.imagem}
               source={ XboxX}             
            />

      
            <Text style={estilos.titulo}>
                Xbox Series S
            </Text>

            <Text style={estilos.subTiutlo}>
                O Xbox mais rápido e poderoso de todos os tempos.
            </Text>

            <Text style={estilos.texto}>
               O Series X é pra quem poder absoluto. O console mais poderoso do mercado, excelência em gráficos e performance.
            </Text>
      </View>
      
      
      
   

    
            
        </ScrollView>
    )
}