import { StyleSheet } from "react-native";

const globalEstilo = StyleSheet.create({
   container: {
      alignItems: 'center',
      flexDirection: 'row',
      width: '100%',
      paddingVertical: 20,
      paddingLeft: 30,
      borderBottomWidth: 0.25,
      borderBottomColor: '#d5d5d5'
   },

   odd: {
      backgroundColor: '#c5c5c5',
   }
});

export default globalEstilo;