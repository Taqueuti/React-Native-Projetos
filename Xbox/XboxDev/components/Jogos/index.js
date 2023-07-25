import React from "react";
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';

//imagens
import Cyber from './assets/cyber.png';
import Forza from './assets/forza.png';
import Hallo from './assets/halo.png';
//estilo
import estilos from './style'

export default function Jogos (props){
    return(
        <ScrollView style={estilos.container}>
          <Text style={estilos.titulo}>
              Jogos em 4K
          </Text>

          <Text style={estilos.subTitulo}>
             Os principais jogos estão aqui. Veja abaixo três exemplos de grande sucesso.
          </Text>

          <View style={estilos.cards}>

            <ImageBackground
             source={ Forza }
             style={estilos.card}
             resizeMode="cover"
             >

                <Text style={estilos.nameCard}>Forza Horizon 5</Text>
               
            </ImageBackground>
            <Text style={estilos.texto}>
                Foza Horizon 5 é um jogo de corrida. é o quinto jogo de série FOrza Horizon e o décimo segundo título principal da franquia Forza. O jogo se passa em uma representação ficcional do México.
            </Text>

            <ImageBackground
             source={ Cyber }
             style={estilos.card}
             resizeMode="cover"
             >
               <Text style={estilos.nameCard}>Cyberpunk 2077</Text> 
            </ImageBackground>
            <Text style={estilos.texto}>
              CyberPunk 2077 é um jogo eletrônico e publicado pelo cd Projekt.
            </Text>

            <ImageBackground 
            source={ Hallo }
            style={estilos.card}
            resizeMode="cover"
            >
               <Text style={estilos.nameCard}>Halo5: Guardians</Text> 
            </ImageBackground>
            <Text style={estilos.texto}>
                Halo 5: Guardians é um videojogo de tiro em primeira pessoa, parte da franquia Halo e sequência de Halo 4.
            </Text>
          </View>
        </ScrollView>
    )
}