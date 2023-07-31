import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
    colunas: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: 110,
        height: 110,
        backgroundColor: "rgba( 255, 255, 255, 0.1 );",
        shadowRadius: 3,
        shadowOpacity: .8,
        shadowColor: 'black'
        
    },

    jogador: {
        fontSize: 40,
        fontWeight: 'bold',
    },

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        gap: 15,
        padding: 35,
    },

    linha: {
        display: 'flex',
        flexDirection: 'row',
    },
    tabuleiro: {
        marginTop: 24,
    },
    areaReinicio: {
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    status: {
        fontSize: 20,
        fontWeight: '800',
        textTransform: "uppercase",
        color: '#843847',
        textShadowRadius: 4,
        textShadowColor: 'black'
    },

    titulo: {
        fontSize: 35,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        marginBottom: 20,
        textShadowRadius: 4,
        textShadowColor: 'black',
        color: '#fff'
    },
    jogadorAtual:{
        fontSize: 15,
        fontWeight: '700',

    },

    botaoReiniciar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,

        backgroundColor: 'rgba(35,100,158, .8)',
        borderRadius: 15,
        padding: 8,
        shadowColor: 'black',
        shadowOpacity: 2,
        shadowRadius: 4,
    
    },
    textoBotao:{
        fontSize: 15,
        color: '#FFF',
        fontWeight: 'bold',
        letterSpacing: 1.7
    },


    boxPlacar:{
        flexDirection: "row",
        marginTop: 20,
        gap: 20,
        
    },
    placar:{
        borderWidth: .9,
        borderRadius: 20,

        width: 100,
        padding: 7,
        
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(204,204,204, 0.2)',
        shadowColor: '#CCCCCC',
        shadowOpacity: 0.7,
        shadowRadius: 12,
        
    },
    textoPLacar:{
        fontSize: 18,
        fontWeight: '600'
    },

    textoBotaoPlacar:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff'
    },

    botaoPlacar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(35,100,158, .8)',
        borderRadius: 20,
        padding: 10,
        width: '30%', 
        shadowColor: 'black',
        shadowOpacity: 2,
        shadowRadius: 3,
        
    }
});


export default estilos