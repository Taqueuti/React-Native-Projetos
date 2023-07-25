import React from 'react';
import { Text, ScrollView } from 'react-native';
import estiloGlobal from '../../styles/estiloGlobal';
import { BoxFinais } from '../../components/boxFinais';
///Imagens///
import Maracana from '../../assets/estadios/estadio_brasil.png';
import Rasunda from '../../assets/estadios/estadio_suecia.png';
import Nacional from '../../assets/estadios/estadio_chile.png';
import Azteca from '../../assets/estadios/estadio_mexico.png';
import France from '../../assets/estadios/estadio_franca.png';
import Bowl from '../../assets/estadios/estadio_eua.png';
import Yokohama from '../../assets/estadios/estadio_japao.png';
///Bandeiras
import Brasil from './assets/bandeiras/brasil.png';
import Uruguai from './assets/bandeiras/uruguai.png';
import Franca from './assets/bandeiras/franca.png';
import Alemanha from './assets/bandeiras/alemanha.png';
import Italia from './assets/bandeiras/italia.png';
import Tchecos from './assets/bandeiras/tchecoslovaquia.png'
import Suecia from './assets/bandeiras/suecia.png'

export function TelaFinais() {
    return (
        <ScrollView style={estiloGlobal.container}>

            <Text style={estiloGlobal.titulo}>Finais</Text>

            <BoxFinais titulo='1950 - Maracanã, Brasil' fundo={Maracana} bandeira1={Brasil} bandeira2={Uruguai} placar='2x1' />

            <BoxFinais titulo='1958 - Rasunda, Suécia' fundo= {Rasunda} bandeira1={Brasil} bandeira2={Suecia} placar='5x2' />

            <BoxFinais titulo='1962 - Estadio Nacional, Chile' fundo= {Nacional} bandeira1={Brasil} bandeira2={Tchecos} placar='3x1' />
             
            <BoxFinais titulo='1970 - Estadio Azteca, México' fundo= {Azteca} bandeira1={Brasil} bandeira2={Tchecos} placar='4x1' />

            <BoxFinais titulo='1994 - Rose Bowl, EUA' fundo= {Bowl} bandeira1={Brasil} bandeira2={Italia} placar='4x1' />

            <BoxFinais titulo='1998 - Stade de France, França' fundo= {Bowl} bandeira1={Franca} bandeira2={Brasil} placar='3x0' />

            <BoxFinais titulo='2002 - Yokohama, Japão' fundo= {Yokohama} bandeira1={Brasil} bandeira2={Alemanha} placar='2x0' />

        </ScrollView>
    )
}