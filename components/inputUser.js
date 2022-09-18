import React from "react";
import { TextInput,StyleSheet } from "react-native";
import { useContext } from "react";
import { authContext } from "../contexts/auth";

export default function InputUser(props){
   
    const {setError} =  useContext(authContext)

    return (
        <TextInput style = {styles.input}
            placeholder= {props.placeHolder}
            placeholderTextColor= {'#333549'}
            onChangeText = {(text)=>{props.onChangeText(text); setError(false)}}
            secureTextEntry = {props.pass}
        />

    )
}
const styles = StyleSheet.create({
    input: {
        paddingVertical: '4%',
        borderRadius: 26,
        width: '70%',
        backgroundColor: '#4a4e69',
        color: '#FFF',
        fontSize: 18,
        textAlign:'center',
        marginBottom: 7
    }

})