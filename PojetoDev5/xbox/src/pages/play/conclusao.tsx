import React from "react";
import { Text, View } from "react-native";
//Estilos
import estilo from './estilos/textos'


const  Conclusao = ()=> {
  return(
    <View style={estilo.container}>
        <Text style={estilo.titulo}>Conclusão</Text>        
         <Text style={estilo.texto}>
            A Sony construiu com o PlayStation algo que para muita gente era impensável, não apenas por mostrar que era possível construir um produto barato e de qualidade, mas também por ter conseguido vencer uma das líderes de mercado na época de seu lançamento na briga pela fidelidade dos consumidores.
         </Text>
    </View>
  )
};

export default Conclusao

