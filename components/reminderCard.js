import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { authContext } from "../contexts/auth";

export default function ReminderCard(props) {
    
    const {deleteReminder, setEditVisible} = useContext(authContext)
    
    
    let document = props.item
    let d = new Date(document.date.seconds)
    let data = d.toString()
    // const [docDateReminder, setDocDateReminder] = useState(d.getFullYear())
    // setdatetest(new Date(document.date).getDate())

    // const DateReminderCard = () =>{
    //     let dateConverted = new Date(document.date.seconds)
    //     console.log('j      j       j       j       j       j       j')
    //     console.log(dateConverted.getDate())
    //     // return (
    //     //     dateConverted
    //     // )
    // }
    return (
        <TouchableOpacity style={styles.reminderContainer} onPress= {()=>{setEditVisible(true); props.selectedItem(document)}} >
            <View >
                <Text style={styles.titulo} numberOfLines={2}>
                    {document.name}
                </Text>
                <Text numberOfLines={2}>
                    {document.note}
                </Text>
                <Text numberOfLines={2}>
                    {data}
                </Text>
                <TouchableOpacity style = {{borderWidth: 2, borderColor: 'blue', width: '20%'}}
                onPress={()=>deleteReminder(document.id)}>
                    <Text style = {{fontSize:20, color: '#2f28'}}>
                        excluir
                    </Text>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: '#FFF',
        fontSize: 20
    },
    reminderContainer: {
        backgroundColor: '#5a5a5a',
        padding: 10,
        marginBottom: 5,
        borderRadius: 14,
        width: '95%',
        alignSelf: 'center',
        borderWidth: 2, 
        borderColor: '#3a3a3a',
    }
})