import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import estiloGlobal from '../style/estiloGlobal';

export function Input(props) {
    


    return (
        <View style={estiloGlobal.box}>
            <Text style={estiloGlobal.titulo}>
                {props.titulo}
            </Text>
            <View style={estiloGlobal.boxInput}>
                <View style={estiloGlobal.boxDescricao}>
                    <Text>{props.descricao}</Text>
                </View>
                <TextInput
                    style={estiloGlobal.textoInput}
                    keyboardType="numeric"
                    defaultValue='0'
                    onChangeText={props.valorAlterado}
                />
            </View>
        </View>
    )
}