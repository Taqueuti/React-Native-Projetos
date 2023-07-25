import React from "react";
import { View, Text } from 'react-native';
//estilos
import globalEstilo from "../styles/global";
import valoresEstilos from '../styles/valores'
import statusEstilos from "../styles/status";
//PropsTipos

interface propsComparacao {
   ano: string,
   salario: string,
   inflacao: string,
   cresc?: string,
   estilo?: object,
   status?: React.ReactElement,
}

export function ItemComparacao(props: propsComparacao) {
   return (
      <View style={[globalEstilo.container, props.estilo]}>
         <Text style={valoresEstilos.textoComparacao}>{props.ano}</Text>
         <Text style={valoresEstilos.textoComparacao}>{props.salario}</Text>
         <Text style={valoresEstilos.textoComparacao}>{props.inflacao}</Text>
         <Text style={valoresEstilos.textoComparacao}>{props.cresc}</Text>
         <View style={statusEstilos.seta}>{props.status}</View>

      </View>
   )
}