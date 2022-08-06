import React, { useState } from "react";
import { TextInput,StyleSheet } from "react-native";
import { useContext } from "react";
import { authContext } from "../contexts/auth";

export default function InputUser(props){

   
    const {setError} =  useContext(authContext)

    return (
        <TextInput style = {styles.input}
            placeholder= {props.placeHolder}
            placeholderTextColor= {'#767676'}
            onChangeText = {(text)=>{props.onChangeText(text); setError(false)}}
            secureTextEntry = {props.pass}
        >

        </TextInput>
    )
}
const styles = StyleSheet.create({
    input: {
        paddingVertical: '4%',
        borderRadius: 26,
        width: '70%',
        backgroundColor: '#504d4d',
        color: '#FFF',
        fontSize: 18,
        textAlign:'center',
        marginBottom: 7
    }

})