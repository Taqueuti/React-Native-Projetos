import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 3,
        paddingHorizontal: 20
    },
    main:{
        alignItems: "center",
        justifyContent: 'center'
    },
    imagem:{
        height: 280,
        resizeMode: 'contain'
    },

    titulo:{
        color: '#107b10',
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 35,
    },

    subTiutlo:{
        fontSize: 16,
        marginBottom: 10,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    texto:{
        fontSize: 12,
        marginBottom: 50,
        fontWeight: 400,
        textAlign: 'center'
    }

});

export default estilos;