import { StyleSheet } from 'react-native';

const estiloHistoria = StyleSheet.create ({
    
   container:{
     alignItems:  'center',
     padding: 20,
     gap: 25,
   },
   img:{
    height: 200,
    width: 280,
   },
   titulo:{
    fontSize: 20,
    fontWeight: '600'
   },
   texto:{
    fontSize: 12,
    width: 280,
    fontWeight: 400
   },
});

export default estiloHistoria;