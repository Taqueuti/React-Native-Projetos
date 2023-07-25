import { StyleSheet } from "react-native";

const estilo = StyleSheet.create ({
   rotacao: {
      transform: [
          { rotate: "180deg" },
        ]
  },
   container:{
      width: '100%',
      height: '50%',  
   },
   fundo:{
      display: 'flex',
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-around',
       flex: 1,
   },
   boxContador:{
       alignItems: 'center',
        bottom: -20
   },
   num:{
      color: '#fff',
      fontSize: 70,
      marginBottom: 20,
      paddingHorizontal: 28
   }
});

export default estilo;