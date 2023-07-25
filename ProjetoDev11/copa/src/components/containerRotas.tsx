import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import estilos from '../pages/Inicio/style';

interface propsRotas {
    titulo: string;
    imagem: object;
    acao: (() => void) ;
}
export function BtnRotas(props: propsRotas) {
    return (
        <View onTouchEnd={props.acao} style={estilos.box}>
            <ImageBackground  borderRadius={20} source={props.imagem} blurRadius={5} style={estilos.container}>
                <View style={estilos.fundoColor}>
                <Text style={estilos.textoMenu}>{props.titulo}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}