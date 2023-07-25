import React from "react";
import {View, Text} from  'react-native';
//estilos
import globalEstilo from "../styles/global";
import valoresEstilos from '../styles/valores'
//PropsTipos
interface propsItemValor {
    ano: string,
    valor: string,
    estilo?: object,
}

export function ItemValor (props: propsItemValor) {
   return (
      <View style={[globalEstilo.container, props.estilo]}>
         <Text style={ valoresEstilos.valores }>{props.ano}</Text>
         <Text style={ valoresEstilos.valores }>{props.valor}</Text>
      </View>
   )
}