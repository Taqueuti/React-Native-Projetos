import React, { useState } from "react";
import { Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import estilo from "./style";
//icones
import { AntDesign, Entypo } from '@expo/vector-icons';

export function Pontos(props) {
   const [count, setCount] = useState('0')

   let adicionarPontos = () => {
      let somaPontos = count;
      somaPontos++;
      setCount(somaPontos)
   };

   let removerPontos = () => {
      let diminuirPontos = count;
      diminuirPontos--;
      setCount(diminuirPontos)
   };


   let resetarPontos = () => {
      setCount('0')
   }

   const rotacao = (props.rotacao === 180) ? estilo.rotacao : '';

   return (
      <View style={[estilo.container, rotacao]}>
         <ImageBackground blurRadius={10} style={estilo.fundo} source={props.fundo}>
            <TouchableOpacity
               onPress={removerPontos}
            >
               <AntDesign name="minuscircleo" size={40} color="#fff" />
            </TouchableOpacity>

            <View style={estilo.boxContador}>
               <Text style={estilo.num}>{count}</Text>
               <TouchableOpacity
                  onPress={resetarPontos}
               >
                  <Entypo name="ccw" size={35} color="#fff" />
               </TouchableOpacity>
            </View>
            <TouchableOpacity
               onPress={adicionarPontos}
            >
               <AntDesign name="pluscircleo" size={40} color="#fff" />
            </TouchableOpacity>
         </ImageBackground>
      </View>
   )
}