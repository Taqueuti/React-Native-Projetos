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
            Confira a seguir as especificações técnicas do Xbox de 2001.
        </Text>
        
             {/* Cartões de técnicas */}
        <View style={estiloCards.cards}>
             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Cpu }/>
                <Text style={estiloCards.textoCard}>
                Intel Pentium 3  733 MHz
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Gpu } />
                <Text style={estiloCards.textoCard}>
                   nVidia NV2A  233 MHz
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Ram } />
                <Text style={estiloCards.textoCard}>
                    64 MB DDR SDRAM  200 MHz
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Hdd } />
                <Text style={estiloCards.textoCard}>
                    HD 8GB  5400 RPM
                </Text>
             </View>

        </View>

    </View> 
  )
};

export default Tecnicas

