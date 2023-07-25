import { StyleSheet } from "react-native";

const estilos = StyleSheet.create ({
   container:{
       flex: 1,
       alignItems: "center",
       justifyContent: 'center',
       paddingHorizontal: 35,
   },

   titulo:{
     color: '#107b10',
     fontSize: 23,
     fontWeight: 'bold',
     marginBottom: 10,
   },

   subTitulo:{
     color: '#fff',
     fontWeight: 500,
     marginBottom: 15,
   },

   texto:{
    color: '#fff',
    fontWeight: 300,
    fontSize: 12,
    marginBottom: 10,
    textAlign: 'center'
   },

    imagem:{
        width: 250,
        height: 150,
        resizeMode: 'contain'
    }
});

export default estilos