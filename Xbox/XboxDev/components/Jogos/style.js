import { StyleSheet } from "react-native";


const estilos = StyleSheet.create({
  container:{
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 35,
    backgroundColor: '#0d1117'
  },
  titulo:{
    fontSize: 22,
    color: "#107b10",
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  
  subTitulo:{
   color: '#fff',
   fontSize: 12,
   marginBottom: 25,
   textAlign: "center",
   fontWeight: 200,
},

cards:{
    alignItems: 'center',
    gap: 15,
},

card:{
    
    width: 290,
    height: 160,
},

nameCard:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 8,
    color: '#fff',
    backgroundColor: '#3a383a87'
},

texto:{
    color: '#fff',
    fontWeight: 300,
    fontSize: 12,
    marginBottom: 30,

}


});


export default estilos