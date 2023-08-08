import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
  containerBtn:{
      gap: 40,
  },
  titulo:{
     fontFamily: 'ChakraPetch_600SemiBold',
     color: '#ffffff',
     fontSize: 25,
     marginBottom: 10,     
  },
  questao:{
    fontFamily: 'ChakraPetch_400Regular',
     color: '#ffffff',
     fontSize: 25,
     marginBottom: 35, 
  },
  resposta:{
    fontFamily: 'ChakraPetch_400Regular',
     color: '#ffffff',
     fontSize: 20,
  },
  linha:{
    borderColor: '#fff',
    borderWidth: 1,
    width: 200,
    borderRadius: 20
  }
});

export default estilos;