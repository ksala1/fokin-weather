import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.yellowView}>
       <Txet>hello</Text>
       </View>
     <View style={{flex: 1, backgroundColor: "blue"}>
     <Text>hello</Text> 
    /View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yellowview: {
    flax:1 
    backgroundColor: "yellow"
  },
  blueview: {
    flax:1
    backgroundColor: "blue"
  },
});
