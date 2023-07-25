import React from "react";
import { Text, View, Image } from "react-native";
//Estilos
import estilo from './estilos/textos'
//imagem
import XboxImagem from './assets/console-xbox.png';

const  Historia = ()=> {
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}>Historia do Xbox</Text>
         <Image style={estilo.img} source={ XboxImagem } />
         
         <Text style={estilo.texto}>
             A Microsoft começou sua história com o público gamer em 2001, com o lançamento do Xbox. Lançado na época para concorrer com o PS2 da Sony e o Game Cube da Nintendo. O Xbox oferecia um hardware mais poderoso que o dos seus concorrentes.
         </Text>

         <Text style={estilo.texto}>
             E para mostrar a capacidade desse novo console super poderoso a Microsoft precisava de um jogo que usasse todo esse potencial, e foi aí que surgiu Halo, que fez um enorme sucesso atingindo uma imensa base de fãs, principalmente nos Estados Unidos.
         </Text>
    </View>
  )
};

export default Historia

