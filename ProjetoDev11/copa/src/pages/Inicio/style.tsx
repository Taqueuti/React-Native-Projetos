import { StyleSheet } from 'react-native'

const estilos = StyleSheet.create({
    box: {
        alignItems: 'center',
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    container: {
        width: 350,
        height: 180,
    },
    textoMenu: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffffff',
        textTransform: 'uppercase',
        textAlign: 'center',
        textAlignVertical: 'center',

    },
    fundoColor: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default estilos