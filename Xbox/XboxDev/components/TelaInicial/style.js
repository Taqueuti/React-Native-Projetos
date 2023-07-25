import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#0d1117',
  },

  logo:{
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5
  },

  titulo:{
    fontSize: 23,
    fontWeight: 'bold',
      color: '#107b10',
  },

  texto:{
   fontSize: 12,
   color: '#fff',
   textAlign: 'center',
   marginBottom: 30,
  },
   btn:{
    flexDirection: 'row',
    width: 208,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#107b10'
   },

   textobtn:{
    fontSize: 15,
    width: 90,
    color: '#fff',
    right: 10,
    textAlign: 'center'
   },

   imageConsole:{
     width: 100,
     height: 70,
     resizeMode: 'contain'
   },

   
   imageJogos:{
    width: 100,
    height: 70,
    resizeMode: 'contain'
  },

  imageNuvem:{
    width: 100,
    height: 70,
    resizeMode: 'contain'
  },
  


});

export default estilos;