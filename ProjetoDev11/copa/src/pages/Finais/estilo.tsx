import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    box: {
        width: 300,
        height: 130,
    },
    titulo:{
       color: '#fff',
       fontWeight: 'bold',
       textAlign: 'left',
    },
    fundo: {
        backgroundColor: 'rgba(0,0,0,0.19)',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 5
    },
    boxPlacar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    bandeira: {
        width: 100,
        resizeMode: 'contain',
    },
    placar: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '400'
    },
   
})

export default estilos