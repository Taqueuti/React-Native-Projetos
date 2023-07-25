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
        <Text style={estilo.titulo}>O fenômeno Halo</Text>
        <Text style={estilo.texto}>
          Halo: Combat Evolved foi desenvolvido pela Bungie e lançado para o Xbox no dia 15 de novembro de 2001. O game foi um sucesso e em dois meses já estava presente em 50% da base de consoles Xbox.
        </Text>

        <Text style={estilo.texto}>
           Halo é até hoje um dos jogos mais importantes do Xbox e da indústria como um tudo. Confira a seguir alguns dados sobre o primeiro título da principal franquia do Xbox.
        </Text>
        
             {/* Cartões de técnicas */}
        <View style={estiloCards.cards}>
             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Sales }/>
                <Text style={estiloCards.textoCard}>
                  4.7 milhões de cópias
                  Até Julho de 2006
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Dinheiro } />
                <Text style={estiloCards.textoCard}>
                  US$ 170 milhões
                  Apenas nos EUA
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Ranking  } />
                <Text style={estiloCards.textoCard}>
                  97% de Aprovação
                  Metacritic
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Disc } />
                <Text style={estiloCards.textoCard}>
                  Remake em 2014
                  Para o Xbox One
                </Text>
             </View>

        </View>

    </View> 
  )
};

export default Jogo

