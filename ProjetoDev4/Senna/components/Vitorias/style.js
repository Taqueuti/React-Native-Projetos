import { StyleSheet } from "react-native";

const estilos = StyleSheet.create ({
    container:{
        flex:1,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 28, 
    },
    cardNum:{
        paddingVertical: 25,
        paddingHorizontal: 20,
        backgroundColor: '#0d171f',
        opacity: 0.8,
        borderRadius: 20,
        borderWidth: 0.89,
        gap: 10,
    },
     tituloNum:{
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
     },
     textoNum:{
        color: '#fff',
        fontWeight: 300,
        fontSize: 12,
        textAlign: 'center'
     },
     containerCanecos:{
        marginTop: 25,
        gap: 10,
     },
     caneco:{
       flexDirection:'row',
       alignItems: 'center',
       gap: 5,
     },
     numero:{
        color: '#ceb105',
        fontWeight: '900',
     },
     nome:{
        color: '#fff',
        fontWeight: 200
     },
     cards:{
        alignItems: 'center',
         paddingVertical: 20,
         gap: 20,
     },
     card:{
         backgroundColor: '#0d171f',
         alignItems: 'center',
         justifyContent: 'center',
         opacity: 0.8,
         paddingTop: 10,
         gap: 10
     },
     tituloCard:{
        color: '#fff',
        fontSize: 11.8,
        fontWeight: '300',
        paddingHorizontal: 25,
        marginBottom: 5,
        textAlign: "center"
     },
     imageCard:{
        width: 230,
        height: 150
     }

});

export default estilos;