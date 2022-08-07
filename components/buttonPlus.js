import {  StyleSheet,  Text, TouchableOpacity } from "react-native";
import React from "react";
import { useContext } from "react";
import { authContext } from "../contexts/auth";

export default function ButtonPlus() {
    const {setModalVisible} = useContext(authContext)
    return (
        <TouchableOpacity style={styles.buttonPlus}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.8}
            >
            <Text style={styles.textPlus}>+</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({

    buttonPlus:{
        position:  'absolute', 
        borderWidth: 2, 
        borderColor: '#22223b', 
        width: 80, 
        height: 80,
        alignItems: 'center', 
        justifyContent:'center',
        borderRadius: 100, 
        backgroundColor: '#4a4e69',
        right: 28,
        bottom: 40
    },
    textPlus:{
        color:'#c9ada7', 
        fontWeight: '700', 
        fontSize: 50,
        // fontFamily: 'Arial'
    }
})