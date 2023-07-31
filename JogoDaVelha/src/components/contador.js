import React from "react";
import {View, Text} from 'react-native';

import estilos from "../style/estilos";

export function Contador(props){
    return(
        <View style={estilos.boxContador}>
            <Text style={estilos.textoContador}>{props.texto}</Text>
        </View>
    )
}