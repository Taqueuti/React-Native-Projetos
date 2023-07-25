import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
    box: {
        width: 300,
        height: 150,
        
    },
    titulo:{
       color: '#fff',
       fontWeight: 'bold',
       textAlign: 'left',
    },
    fundo: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        paddingVertical: 14,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
       
    },
    nome:{
        color:'#fff',
        textTransform: 'uppercase',
        fontSize: 20,
    },
    gols:{
        color: '#fff',
        fontWeight: '400',
        textTransform: "uppercase"
    },
    boxGols:{
        backgroundColor: '#0c144a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: 65,
        height: 28,
    },
    boxAnos:{
        backgroundColor: '#00915a',
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        bottom: 15,  
    },
    anos:{
        color: '#fff',
        fontWeight: '600',
        fontSize: 12
    }

   
})

export default estilos