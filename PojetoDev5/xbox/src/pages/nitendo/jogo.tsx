import React from "react";
import { Text, View, Image } from "react-native";
//Imagem
import Sales from './assets/sales.png';
import Dinheiro from './assets/money.png';
import Ranking from './assets/ranking.png';
import Disc from './assets/disc.png';
//Estilos
import estilo from './estilos/textos'
import estiloCards from "./estilos/cards";

const  Jogo = ()=> {
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}>Super Mario bros</Text>
        <Text style={estilo.texto}>
           Apesar de não estar disponível no lançamento do console, Super Mario Bros foi o jogo mais vendido do NES e é uma das franquias de jogos mais populares até os dias de hoje.
        </Text>

        <Text style={estilo.texto}>
           A franquia foi tão popular na época, que 3 jogos da série Super Mario ocupam o top 4 de jogos mais vendidos do NES, com Super Mario Bros em primeiro, Super Mario Bros 3 em segundo e Super Mario Bros 2 em quarto lugar. Confira mais informações sobre o primeiro jogo da franquia Super Mario Bros:
        </Text>
        
             {/* Cartões de técnicas */}
        <View style={estiloCards.cards}>
             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Sales }/>
                <Text style={estiloCards.textoCard}>
                  40 milhões de cópias
                  Até 1994
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Dinheiro } />
                <Text style={estiloCards.textoCard}>
                   US$ 72 milhões
                  Primeiros 4 meses
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Ranking  } />
                <Text style={estiloCards.textoCard}>
                    95% de Aprovação
                    Revista CVG
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Disc } />
                <Text style={estiloCards.textoCard}>
                  Remake em 1993
                  Para o SNES
                </Text>
             </View>

        </View>

    </View> 
  )
};

export default Jogo

