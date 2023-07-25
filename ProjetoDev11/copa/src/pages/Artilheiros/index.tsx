import React from 'react';
import { Text, ScrollView } from 'react-native';
import estiloGlobal from '../../styles/estiloGlobal';
import { BoxArtilheiros } from '../../components/boxArtilheiros';
//Imagens//
import Ronaldo from './assets/artilheiros/ronaldo.png';
import Ademir from './assets/artilheiros/ademir.png';
import Jairzinho from './assets/artilheiros/jairzinho.png';
import Pele from './assets/artilheiros/pele.png';
import Vava from './assets/artilheiros/vava.png'



export function TelaArtilheiros() {
    return (
        <ScrollView style={estiloGlobal.container}>

            <Text style={estiloGlobal.titulo}>Artilheiros</Text>
            <BoxArtilheiros fundo={Ronaldo} nome='Ronaldo' gols='15 gols' anos='1994 - 1998 - 2002 - 2006'/>

            <BoxArtilheiros fundo={Pele} nome='Pelé' gols='12 gols' anos='1958 - 1962 - 1966 - 1970'/>

            <BoxArtilheiros fundo={Ademir} nome='Ademir' gols='9 gols' anos='1950' />

            <BoxArtilheiros fundo={Vava} nome='Vava' gols='9 gols' anos='1958 - 1962' />

            <BoxArtilheiros fundo={Jairzinho} nome='jairzinho' gols='9 gols' anos='1966 - 1970 - 1974' />

        </ScrollView>
    )
}