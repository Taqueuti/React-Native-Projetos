import React from "react";
import { ImageBackground, Text} from "react-native";

import Fundo from '../../assets/fundo.jpg';
import Lousa from '../../assets/lousa.png';

import estiloGlobal from "../../style/estilo";
import estilos from "./estilo";
import { Botao } from "../../components/botao";


export default function TelaInicio(props) {
   const IniciarQuiz = ()  => {
         props.navigation.navigate('Quiz');
   }

  return (
    <ImageBackground
      style={estiloGlobal.container}
      source={Fundo} >

      <ImageBackground
        style={estiloGlobal.quadro}
        source={Lousa}
      >
        <Text style={estilos.textoQuadro}>
            Quiz de Matemática
        </Text>

      </ImageBackground>

       <Botao texto= 'Iniciar' acao={IniciarQuiz} />
    </ImageBackground>
  )
}