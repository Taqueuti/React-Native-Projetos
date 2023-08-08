import { StyleSheet } from "react-native";


const estiloGlobal = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 50,
  },
  botão: {
    borderWidth: 0.25,
    borderColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',


    padding: 15,

    shadowColor: '#fff',
    shadowOpacity: .5,
    shadowRadius: 15,
    backgroundColor: 'rgba(234,234,234,.2)',
    bottom: 30,
  },

  quadro: {
    alignItems: 'center',
    justifyContent: 'center',

    padding: 40,
    height: 220,
  },
  modal: {
    top: 50,
    left: 20,
    width: 330,
  },

  textoBotão: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'ChakraPetch_400Regular'
  },

  textoQuadro: {
    fontSize: 40,
    fontFamily: 'ChakraPetch_400Regular',
    color: '#ffffff',

  },

  botaoFechar: {
    position: 'absolute',
    top: -59,
    right: -155,

    fontFamily: 'ChakraPetch_600SemiBold',
    
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});

export default estiloGlobal;