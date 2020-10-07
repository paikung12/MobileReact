import React from 'react';
import { NavigatorIOS, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeChallenge from './views/app/home/homeChalleng';

const Stack = createStackNavigator();
const Navigation = () =>(
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:'white'
      },
      headerTintColor:'#e1b12c'
    }}>
      <Stack.Screen
        name="HomeChallenge"
        component={HomeChallenge}
        options = {{
            title:'HomeChallenge'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent:'center'
  },
});
