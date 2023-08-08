import { View, TouchableOpacity, Text } from "react-native";
import estiloGlobal from "../style/estilo";


export function Botao(props){
     return(
      <View>
      <TouchableOpacity 
      style={[estiloGlobal.botão]}
      onPress={() => props.acao()}
      >
        <Text style={estiloGlobal.textoBotão}>{props.texto}</Text>
      </TouchableOpacity>
    </View>
     )
}