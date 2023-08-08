import { Modal, View, Text, Pressable, ImageBackground } from 'react-native';
import estiloGlobal from '../style/estilo';

import Lousa from '../assets/lousa.png'

export default function ModalResposta({ mensagem, modalVisibilidade, setModalVisibilidade }) {

  return (
    <Modal animationType='slide' transparent={true} visible={modalVisibilidade} onRequestClose={() => setModalVisibilidade(false)}>
        
        <ImageBackground
        style={[estiloGlobal.quadro, estiloGlobal.modal]}
        source={Lousa}
       > 

          <Pressable onPress={() => setModalVisibilidade(false)}>
             <Text style={estiloGlobal.botaoFechar}>X</Text>
          </Pressable>
          <View>
               <Text style={estiloGlobal.textoQuadro}>{mensagem}</Text>
          </View>
        </ImageBackground>
    </Modal>
  )
}