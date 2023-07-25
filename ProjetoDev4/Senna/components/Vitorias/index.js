import React from "react";
import {Text, View, ScrollView, Image, ImageBackground} from  'react-native';
//Imagens
import Capa from './assets/capa.jpg'
import Vitoria from './assets/vitoria1.jpg';
import Vitoria2 from './assets/vitoria2.jpg';
import Vitoria3 from './assets/vitoria3.jpg';
///Icones
import { Entypo } from '@expo/vector-icons';
//Estilos
import estilos from './style'

export default function TelaVitoria (){
    return(
    <ImageBackground 
    source={ Capa } 
    style={estilos.container}
    blurRadius= { 8 }
    >
           <ScrollView>
        
            <View style ={estilos.cardNum}>

                <Text style={estilos.tituloNum}>
                    Senna em Números
                </Text>
                <Text style={estilos.textoNum}>
                    Ele conquistou três campeonatos mundiais em 1988, 1990 e 1991. e ganhou 41 Grandes Prêmios e 65 pole positions.
                </Text>

                <View style={estilos.containerCanecos}>

                    <View style={estilos.caneco}>
                      <Entypo name="trophy" size={30} color="#ceb105" />
                      <Text style={estilos.numero}>161</Text>
                      <Text style={estilos.nome}>GPS Disputados</Text>
                   </View>
                       
                   <View style={estilos.caneco}>
                      <Entypo name="trophy" size={30} color="#ceb105" />
                      <Text style={estilos.numero}>161</Text>
                      <Text style={estilos.nome}>GPS Disputados</Text>
                   </View>
                     
                   <View style={estilos.caneco}>
                      <Entypo name="trophy" size={30} color="#ceb105" />
                      <Text style={estilos.numero}>161</Text>
                      <Text style={estilos.nome}>GPS Disputados</Text>
                   </View>

                   <View style={estilos.caneco}>
                      <Entypo name="trophy" size={30} color="#ceb105" />
                      <Text style={estilos.numero}>161</Text>
                      <Text style={estilos.nome}>GPS Disputados</Text>
                   </View>

                </View>
                 
              </View>
            
            <View style={estilos.cards}>

                     <View style={estilos.card}>
                        <Text style={estilos.tituloCard}>Campeonato Mundial - 1988</Text>
                         <Image style={estilos.imageCard} source={ Vitoria }/>

                     </View>

                     <View style={estilos.card}>
                        <Text style={estilos.tituloCard}> Campeonato Mundial - 1990</Text>
                        <Image style={estilos.imageCard} source={ Vitoria2} />
                     </View>

                     <View style={estilos.card}>
                        <Text style={estilos.tituloCard}>Campeonato Mundial - 1991</Text>
                        <Image style={estilos.imageCard} source={ Vitoria3} />
                     </View>

                 </View>

          </ScrollView>
    </ImageBackground>
        );
}