import React from 'react';
import { Text, View, TextInput } from 'react-native';
import estiloGlobal from '../style/estiloGlobal';

export function Contador(props) {
    return (
        
        <View style={[estiloGlobal.box, estiloGlobal.boxCount]}>
                <Text style={estiloGlobal.count}>{props.count}</Text>
                <Text style={estiloGlobal.tipo}>{props.texto}</Text>
            
        </View>
    )
 }