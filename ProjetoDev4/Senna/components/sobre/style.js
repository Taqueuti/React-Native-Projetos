import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
     container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        gap: 15
     },
     titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5,
        alignSelf: 'flex-start'  
     },
     imagem:{
        height: 200,
        width: 320,
        borderRadius: 5,
     },
     texto:{
        fontSize: 13,
        fontWeight: 200,
     },
     card:{
            marginBottom: 25,
            flexDirection: 'row',
            borderBottomWidth: 0.25,
            borderTopWidth: 0.25,
            height: 80,
            borderColor: '#e4e2e2',
            gap: 10,
            backgroundColor: '#f5f5f5'
     },
    
     cardFoto:{
        width: 120,
        height: 80,
     },
     containerTexto:{
        justifyContent: 'center',
        paddingVertical: 20,
        gap: 5,
        width: 200,
     },
     tituloCard:{
      fontWeight:'bold',
      fontSize: 14,
     },
     cardTexto:{
      fontSize: 10.5,
      fontWeight: 500
     }

     
});

export default estilos;