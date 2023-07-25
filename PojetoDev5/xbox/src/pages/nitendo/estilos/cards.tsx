import { StyleSheet } from 'react-native';

const estiloTecnica = StyleSheet.create ({
    cards:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 25,
    },
    card:{
        backgroundColor: '#fe0000db',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        gap: 10,
    },
    img:{
       tintColor: '#fff',

    },
    textoCard:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '300',
        width: 110,
    },
  
});

export default estiloTecnica;