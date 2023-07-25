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
        <Text style={estilo.titulo}>O Final Fantasy VII</Text>
        <Text style={estilo.texto}>
           Um dos jogos mais aclamados do PS1 sem dúvida é Final Fantasy VII. Desenvolvido pela Square e Lançado em 1997 Final Fantasy VII foi um sucesso comercial absoluto, além de ter sido muito bem recebido pelo público e pela crítica especializada.

        </Text>

        <Text style={estilo.texto}>
            Final Fantasy VII foi um lançamento muito importante para a Sony, isso porque semanas antes do lançamento os consoles PlayStation estavam esgotados por todo Japão, tamanho era o interesse dos jogadores pelo novo título da franquia. Alcançando marcas incríveis, como podem ser vistas a seguir: 
        </Text>
        
             {/* Cartões de técnicas */}
        <View style={estiloCards.cards}>
             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Sales }/>
                <Text style={estiloCards.textoCard}>
                  2 milhões de cópias
                   Em 2 dias no Japão
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Dinheiro } />
                <Text style={estiloCards.textoCard}>
                  US$ 115 milhões
                   Em 2 dias no Japão
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Ranking  } />
                <Text style={estiloCards.textoCard}>
                 92% de Aprovação
                 Metacritic
                </Text>
             </View>

             <View style={estiloCards.card}>
                <Image style={estiloCards.img} source={ Disc } />
                <Text style={estiloCards.textoCard}>
                  Remake em 2020
                  Para o PS4
                </Text>
             </View>

        </View>

    </View> 
  )
};

export default Jogo

