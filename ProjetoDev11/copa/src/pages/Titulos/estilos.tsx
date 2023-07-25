import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    box: {
        width: 350,
        height: 150,

    },
    fundo: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        gap: 25,
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 10,

    },
    pais: {
        color: '#fff',
        fontSize: 20,
    },
    boxInfos:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    ano:{
        fontSize: 40,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    estrela:{
     width: 150,
     height: 20
    }

})

export default estilos