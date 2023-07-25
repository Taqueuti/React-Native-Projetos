import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    foto:{
        width: 200,
        height: 200,
        borderRadius: 180,
        borderWidth: 2.5,
        marginBottom: 50,
    },
    card:{
        backgroundColor: '#1c1c1c',
        opacity: 0.98, 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        paddingVertical: 25,
        paddingHorizontal: 30,
        gap: 15, 
    },
    titulo:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16.8,
    },
    texto:{
        color: '#fff',      
        fontWeight: 100,
        fontSize: 13.5,
    }
});

export default estilos;