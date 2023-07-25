import React from "react";
import {Text, Image, View, ScrollView} from  'react-native';
//Imagens
import Perfil from './assets/foto-capa.jpg';
import Preparacao from './assets/preparacao.png';
import Chuva from './assets/rei-da-chuva.png';
import Monoco from './assets/rei-de-monaco.png'
import Silva from './assets/silvastone.png'
//Estilos
import estilos from './style'
export default function TelaSobre (){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Ayrton Senna</Text>
             <Image style={estilos.imagem} source={ Perfil } />
             <Text style={estilos.texto}>
                No esporte mais global e veloz do mundo, um piloto é considerado o mais rápido de todos os tempos: Ayrton Senna. Seus expressivos números ajudam a explicar poque o piloto ganhou status de mito do esporte. Mas Senna é mais do que isso: o Brasileiro foi o responsável por alguns dos momentos mais mágicos da principal categoria do automobilismo mundial
             </Text>

             <ScrollView>
      
            <View style={estilos.card}>
                    <Image 
                      style={estilos.cardFoto}
                      source={ Monoco }
                    />

             <View style={estilos.containerTexto}>
                    <Text style={estilos.tituloCard}>Rei da chuva</Text>
                    <Text style={estilos.cardTexto}>
                        Aprimorou a pilotagem no asfalto molhado e mostrou ser um piloto de determinação, garra e persistência.
                    </Text>
                </View>
            </View>

                <View style={estilos.card}>
                   <Image 
                      style={estilos.cardFoto}
                      source={ Chuva }
                    />

                 <View style={estilos.containerTexto}>
                    <Text style={estilos.tituloCard}>Rei de Mônaco</Text>
                    <Text style={estilos.cardTexto}>
                       Conquistou o posto por ser o maior recordista de vitórias, com seis conquistas.
                    </Text>
                 </View>
                    
                </View>

                <View style={estilos.card}>
                   <Image 
                      style={estilos.cardFoto}
                      source={ Silva }
                    />

                 <View style={estilos.containerTexto}>
                    <Text style={estilos.tituloCard}>Silvastone</Text>
                    <Text style={estilos.cardTexto}>
                        Por seu currículo impressionante em Silverstone, Ayrton recebeu o apelido de 'Silvastone' pela imprensa inglesa.
                    </Text>
                 </View>
                </View>

                <View style={estilos.card}>
                  <Image 
                      style={estilos.cardFoto}
                      source={ Preparacao }
                    />

                  <View style={estilos.containerTexto}>
                    <Text style={estilos.tituloCard}>Preparaçãoa</Text>
                    <Text style={estilos.cardTexto}>
                        Para vencer corridas e campeonatos o piloto precisava ter uma preparação física de atleta.
                    </Text>
                  </View>
                </View>
             </ScrollView>
        </View>
        );
}