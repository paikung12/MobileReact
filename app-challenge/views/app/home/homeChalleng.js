import React from "react";
import { View, Text ,StyleSheet } from "react-native";
export default function Home() {
  return (
    <View  style={{display :"flex",height :"100%"}}>
      <View  style={styles.Detailcard}>
        <Text>cat</Text>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
    Detailcard: {
        width: "100%",
          height:140,
          borderRadius: 30,
          borderWidth: 0,
          padding :30,
          backgroundColor : 'white'
    }
    
})

