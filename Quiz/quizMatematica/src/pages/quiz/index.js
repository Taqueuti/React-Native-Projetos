import React, { useState } from "react";
import { ImageBackground, Text, View, TextInput, KeyboardAvoidingView } from "react-native";
import { gerarPergunta, validarResposta } from '../../funcoes/gerador'
import Fundo from '../../assets/fundo.jpg';
import Lousa from '../../assets/lousa.png';


import estilos from "./estilos";
import estiloGlobal from "../../style/estilo";
import { Botao } from "../../components/botao";
import ModalResposta from "../../components/modal";


export default function TelaInicio() {

  const [mensagem, setMensagem] = useState();
  const [modalVisibilidade, setModalVisibilidade] = useState(false);

  const [questao, setQuestao] = useState(gerarPergunta());
  const [resposta, setResposta] = useState();


  function exibeMensagemAcerto() {
    setMensagem("Parabéns!\nVocê acertou!");
    setModalVisibilidade(true);
  };

  function exibeMensagemErro() {
    setMensagem("Poxa\nVocê errou.");
    setModalVisibilidade(true);
  }


  function respondeQuestao() {
    const respondeuCerto = validarResposta(resposta, questao.Resultado);
     
    if(respondeuCerto){
      exibeMensagemAcerto()
    }else{
      exibeMensagemErro()
    }


    ProximaQuestao()

  };


  function ProximaQuestao() {
    const proximaQuestao = gerarPergunta();

    setQuestao(proximaQuestao);
    setResposta();
  }

  return (

    <ImageBackground
      style={estiloGlobal.container}
      source={Fundo} >

      <ImageBackground
        style={estiloGlobal.quadro}
        source={Lousa}
      >
        <Text style={estilos.titulo}>
          Pergunta
        </Text>

        <Text style={estilos.questao}>
          {questao.Pergunta}
        </Text>

        <TextInput
          style={estilos.resposta}
          defaultValue=''
          keyboardType="numeric"
          placeholder="Responder Aqui!"
          onChangeText={valor => setResposta(valor.replace(/[^0-9]/g, ''))}
          value={resposta}
        />


        <View style={estilos.linha}></View>

      </ImageBackground>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={estilos.containerBtn}>

        <Botao texto='Responder' acao={respondeQuestao} />

        <Botao texto='Próxima Pergunta' acao={ProximaQuestao} />

      </KeyboardAvoidingView>
       <ModalResposta mensagem={mensagem} modalVisibilidade={modalVisibilidade} setModalVisibilidade={setModalVisibilidade} />
    </ImageBackground>


  )
}