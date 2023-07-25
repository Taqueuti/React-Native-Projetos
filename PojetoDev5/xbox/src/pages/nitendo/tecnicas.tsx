import React from "react";
import { Text, View, Image } from "react-native";
//Imagem
import Cpu from './assets/cpu.png';
import Gpu from './assets/gpu.png';
import Hdd from './assets/hdd.png';
import Ram from './assets/ram.png';
//Estilos
import estilo from './estilos/textos'
import estiloCards from "./estilos/cards";

const  Tecnicas = ()=> {
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}>Especificações Técnicas</Text>
        <Text style={estilo.texto}>
           Confira a seguir as especificações técnicas do NES, lançado em 1983
        </Text>
        
             {/* Cartões de técnicas */}
        <View style={estiloCards.cards}>
             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Cpu }/>
                <Text style={estiloCards.textoCard}>
                  Ricoh 2A03  Processador 8-bit
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Gpu } />
                <Text style={estiloCards.textoCard}>
                   52 Cores  256 x 240
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Ram } />
                <Text style={estiloCards.textoCard}>
                    2KB RAM  - Memória
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Hdd } />
                <Text style={estiloCards.textoCard}>
                   Cartucho  Proprietário
                </Text>
             </View>

        </View>

    </View> 
  )
};

export default Tecnicas

