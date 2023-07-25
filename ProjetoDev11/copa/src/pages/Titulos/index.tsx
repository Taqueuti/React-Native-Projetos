import React from 'react';
import { ScrollView, Text } from 'react-native';
import estiloGlobal from '../../styles/estiloGlobal';
import { BoxTitulos } from '../../components/boxTitulos';
//Estrelas//
import UmaEstrela from './assets/1.png';
import DuasEstrela from './assets/2.png';
import TresEstrela from './assets/3.png';
import QuatroEstrela from './assets/4.png';
import CincoEstrela from './assets/5.png';

//Cidades
import Suecia from './assets/cidades/solna.png';
import Mexico from './assets/cidades/cidademexico.png';
import Chile from './assets/cidades/santiago.png';
import Eua from './assets/cidades/pasadena.png';
import Japao from './assets/cidades/yokohama.png';
export function TelaTitulos() {
    return (
        <ScrollView style={estiloGlobal.container}>

            <Text style={estiloGlobal.titulo}> Títulos</Text>

            <BoxTitulos fundo={Suecia} pais='Suécia' estrelas={UmaEstrela} ano='1958' />

            <BoxTitulos fundo={Chile} pais='Chile' estrelas={DuasEstrela} ano='1962' />

            <BoxTitulos fundo={Mexico} pais='Mexico' estrelas={TresEstrela} ano='1970' />

            <BoxTitulos fundo={Eua} pais='EUA' estrelas={QuatroEstrela} ano='1994' />

            <BoxTitulos fundo={Japao} pais='Japão' estrelas={CincoEstrela} ano='2002' estrelaEstilo = 'estrela' />
        </ScrollView>
    )
}