import React from 'react';
import { Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import estiloGlobal from '../../styles/estiloGlobal';
import { BtnRotas } from '../../components/containerRotas';
//Imagens///
import Finais from '../../assets/bg_finais.png'
import Titulos from '../../assets/bg_titulos.png'
import Artilheiros from '../../assets/bg_artilheiros.png'

type RootStackParamList = {
    Finais: undefined;
    Titulos: undefined;
    Artilheiros: undefined;
  };

type TelaInicioProps = {
    navigation: StackNavigationProp<RootStackParamList>;
  };

export function TelaInicio(props:TelaInicioProps) {
    const IrparaTelaFinal = () => {
        props.navigation.navigate('Finais');
    };

    const IrparaTelaTitulos = () => {
        props.navigation.navigate('Titulos');
    };

    const IrparaTelaArtilheiros = () => {
        props.navigation.navigate('Artilheiros');
    };

    return (
        <View style={estiloGlobal.container}>
            <Text style={estiloGlobal.titulo}>Brasil nas copas do mundo</Text>
            <BtnRotas acao={IrparaTelaFinal} titulo='Finais' imagem={Finais} />
            <BtnRotas acao={IrparaTelaTitulos} titulo='Titulos' imagem={Titulos} />
            <BtnRotas acao={IrparaTelaArtilheiros}  titulo='Artilheiros' imagem={Artilheiros} />
        </View>
    )
}