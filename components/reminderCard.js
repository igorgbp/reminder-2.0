import { Text, TouchableOpacity, StyleSheet, View, ImageBackground } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { authContext } from "../contexts/auth";
import Icon from 'react-native-vector-icons/Foundation';


export default function ReminderCard(props) {

    const { deleteReminder, setEditVisible, dateEnable } = useContext(authContext)


    let document = props.item

    let dateString
    if (document.date != null) {
        let dateDocument = new Date(document.date.seconds * 1000)
        dateString = dateDocument.getDate() + '/' + (dateDocument.getMonth() + 1) + '/' + dateDocument.getFullYear()
    }



    return (
        <TouchableOpacity style={styles.reminderContainer} onPress={() => { setEditVisible(true); props.selectedItem(document) }} >


            <Text style={styles.titulo} numberOfLines={2}>
                {document.name}
            </Text>
            <View style = {{height: '8%'}}/>
            <View style={styles.down}>
                {
                    dateString != null
                        ?
                        <Text numberOfLines={2} style={styles.textDate}>
                            {dateString}
                        </Text>
                        : <View style={{ height: '6%' }} />
                }
                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>

                    <TouchableOpacity
                        style={styles.iconTrash}>
                        <Text >
                            <Icon name="check" size={40} color="#4a4e69" />

                        </Text>
                    </TouchableOpacity>
                    <View style={{ width: '3%' }} />
                    <TouchableOpacity style={styles.iconTrash}
                        onPress={() => deleteReminder(document.id)}>
                        <Text >
                            <Icon name="trash" size={40} color="#4a4e69" />

                        </Text>


                    </TouchableOpacity>

                </View>
            </View>


        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    titulo: {
        color: '#f2e9e4',
        fontSize: 22,
        fontWeight: '600', 
        paddingLeft: 5
    },
    reminderContainer: {
        // marginBottom: 5,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#3F425A',
        borderRadius: 18,
        padding: 10,
        // borderWidth: 2
    },
    iconTrash: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        backgroundColor: '#c9ada7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    down: {
        // borderWidth: 2,
        borderColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textDate:{ 
        paddingVertical: 4, 
        color: '#f2e9e4' ,
        fontWeight: '700'


    }
})