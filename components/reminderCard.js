import {Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function ReminderCard(props){
    let document = props.item
    return (
        <TouchableOpacity style = {styles.reminderContainer}>
            <Text style = {styles.titulo}>
                {document.name}
            </Text>
             <Text style = {styles.titulo}>
                açldkfjaçlkdjfçalkj
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titulo:{
        color:'#FFF'
    },
    reminderContainer:{
        backgroundColor:'#5a5a5a',
        padding:10,
        marginBottom: 5,
        borderRadius: 14,
        width: '95%', 
        alignSelf: 'center'
    }
})