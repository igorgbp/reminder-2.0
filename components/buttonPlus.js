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
        borderColor: '#888', 
        width: 75, 
        height: 75,
        alignItems: 'center', 
        justifyContent:'center',
        borderRadius: 100, 
        backgroundColor: '#5a5a5a',
        right: 38,
        bottom: 85
    },
    textPlus:{
        color:'#FFF', 
        fontWeight: '700', 
        fontSize: 50,
        // fontFamily: 'Arial'
    }
})