import { StyleSheet } from "react-native";

const estiloGlobal = StyleSheet.create({
    box: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        paddingVertical: 35,
        borderRadius: 15,
        shadowColor: 'black',
        shadowRadius: 2,
        gap: 20,
        shadowOpacity: 1
    },
    titulo:{
        color: '#fff',
        fontWeight: '300',
        fontSize: 18,
    },
    boxInput: {
        flexDirection: 'row',
        gap: 8,
    },
    boxDescricao:{
        backgroundColor: "#9bd69c",
        padding: 11,
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 2,
        shadowOpacity: .4
        
   },
   textoInput:{
    backgroundColor: '#fff',
    borderRadius: 7,
    paddingHorizontal: 5,
    width: '45%',
    shadowColor: 'black',
    shadowRadius: 0.6,
    shadowOpacity: .2
   },

   /// Contador ///
   boxCount: {
   width: '90%',
   height: '35%'
},
   count:{
       color: "#fff",
       fontSize: 80,
       textAlign: 'center'  
   },
   tipo: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '300'
   }

});


export default estiloGlobal