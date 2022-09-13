import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import React from 'react';
import styles from './styles.js';
import Body from './Componentes/Body.js';
import constants from 'expo-constants';
import {useEffect, useState} from 'react';


export default function App(){

  const [estado, setarEstado] = useState('leitura');
  const [anotacao, setarAnotacao] = useState('');
  
  useEffect(() => {
    //Quando iniciarmos o app queremos que leia a key anotacao

    (async () => {try{
      const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
      setarAnotacao(anotacaoLeitura);
    }catch(error)
    {
      alert(error);
    }alert('Saved !')})();


  },[])

  setData = async() => {
    try{
      await AsyncStorage.setItem('anotacao',anotacao)
    }catch(error){
      alert(error);
    }
      alert('Saved !')
  }

  atualizarTexto = () =>{
    setarEstado('leitura');
    setData(); 
  }

  if(estado == 'leitura'){

    return (
      <View style={{flex:1}}>
      <StatusBar hidden />

      <View style={styles.viewTitle}><Text style={styles.textTitle}>Note App</Text></View>  
      {
      (anotacao != '')?  
      <View><Text style={styles.textBody}>{anotacao}</Text></View>
      :
      <View><Text style={{opacity:0.5, fontSize:16}}> No annotation </Text></View>
      }
      {
        (anotacao == '')?
        <TouchableOpacity onPress={() => setarEstado('atualizando') } style={styles.touchableOpView}><Text style={styles.textTouch}>+</Text></TouchableOpacity>
        :
        <TouchableOpacity onPress={() => setarEstado('atualizando') } style={styles.touchableOpView}><Text style={styles.textTouch}>✎</Text></TouchableOpacity>
      }
      
      </View>
  )

  }else if(estado == 'atualizando'){

    return (
      <View style={{flex:1}}>
      <StatusBar hidden />

      <View style={styles.viewTitle}><Text style={styles.textTitle}>Note App</Text></View>

      <TextInput autoFocus={true} onChangeText={(text)=>setarAnotacao(text)} style={styles.textImput} multiline={true} numberOfLines={20} value={anotacao}></TextInput>
      
      <TouchableOpacity onPress={() => atualizarTexto() } style={styles.touchableSave}><Text style={styles.textTouchSave}>Save</Text></TouchableOpacity>
      </View>
  )

  }else{

  }
  


}

