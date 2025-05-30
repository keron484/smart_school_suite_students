import { StyleSheet, Text, View } from "react-native";
function app(){
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Hello World</Text>
        </View>
    )
}
export default app;

const styles = StyleSheet.create({
   container:{
      flex:1,
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#fff"
   },
   text:{
      fontSize:42,
      fontWeight:"bold"
   }
});