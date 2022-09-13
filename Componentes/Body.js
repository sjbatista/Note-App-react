import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Button, __spread } from 'react-native';
import React from 'react';
import styles from '../styles';

var Body = (props) => {

  function test(){
    return(<Text>lulu</Text>);
  }

  return (
      
        <View style={{alignItems:'center'}}>
        {test()}  
        <Button title={props.titulo}></Button>
        <Text>{props.texto}</Text>  
        </View>
    );


  
}

export default Body;