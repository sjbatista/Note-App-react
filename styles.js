import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import constants from 'expo-constants';

export default StyleSheet.create(
{
    textTitle:{
        fontSize:20,
        color:'white',
        textAlign:'center',
    },

    viewTitle:{
        //marginTop:(constants.statusBarHeight+10),
        padding:20,
        backgroundColor:'#069',
        width:'100%'
    },

    mainComponent:{ 
        //marginTop:10
        //marginTop:(constants.statusBarHeight+25)
    },

    touchableOpView:{ 
        position:'absolute',
        right:20,
        bottom:20,
        width:50,
        height:50,
        backgroundColor:'#069',
        borderRadius:25
    },

    textBody:{
        padding:10,
        textAlign:'justify',
        alignItems:'center'
    },

    textTouch:{
        color:'white',
        textAlign:'center',
        position:'relative',
        top:-4,
        fontSize:40
    },

    touchableSave:{ 
        position:'absolute',
        right:20,
        bottom:20,
        width:80,
        height:40,
        backgroundColor:'#069',
        borderRadius:5
    },
    textTouchSave:{
        color:'white',
        textAlign:'center',
        position:'relative',
        top:-3,
        fontSize:30
    },

    textImput:{
        textAlign:'justify',
        alignItems:'center',
        padding:10,
        textAlignVertical:'top',
        height:300,
    },
}

);
