import { Text, TouchableOpacity, StyleSheet, View, ImageBackground } from "react-native";
import React, { useState } from "react";
import { useContext } from "react";
import { authContext } from "../contexts/auth";
import Icon from 'react-native-vector-icons/Foundation';
import { DatesContext } from "../contexts/date";


export function ReminderCardCalendar(props) {

    const { deleteReminder, setEditVisible, dateEnable, } = useContext(authContext)
    // const { pressedDay, pressedFormat } = useContext(DatesContext)

    let document = props.item

    let dateString
    if (document.date != null) {
        let dateDocument = new Date(document.date.seconds * 1000)
        dateString = dateDocument.getDate() + '/' + (dateDocument.getMonth() + 1) + '/' + dateDocument.getFullYear()
    }

    return (


        <TouchableOpacity style={[styles.reminderContainer, { width: props.wid, }]} onPress={() => { setEditVisible(true); props.selectedItem(document) }} >



            {/* <View style = {{height: '8%'}}/> */}
            <View style={styles.down}>

                <Text style={styles.titulo} numberOfLines={2}>
                    {document.name}
                </Text>

            </View>


        </TouchableOpacity >

    )
}

export default function ReminderCard(props) {
    
    const { deleteReminder, setEditVisible } = useContext(authContext)


    let document = props.item

    let dateString
    if (document.date != null) {
        let dateDocument = new Date(document.date.seconds * 1000)
        dateString = dateDocument.getDate() + '/' + (dateDocument.getMonth() + 1) + '/' + dateDocument.getFullYear()
    }




    return (
        <TouchableOpacity style={[styles.reminderContainer, { width: props.wid, }]} onPress={() => { setEditVisible(true); props.selectedItem(document) }} >


            <Text style={styles.titulo} numberOfLines={2}>
                {document.name}
            </Text>
            {/* <View style = {{height: '8%'}}/> */}
            <View style={styles.down}>
                {
                    dateString != null
                        ?
                        <Text numberOfLines={2} style={styles.textDate}>
                            {dateString}
                        </Text>
                        : <View style={{ height: '6%', width: 70 }} />
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
        paddingLeft: 5,
        marginBottom: 8
    },
    reminderContainer: {
        marginBottom: 8,
        // width: '95%',
        alignSelf: 'center',
        backgroundColor: '#3F425A',
        justifyContent: 'space-around',
        borderRadius: 18,
        padding: 10,
        height: '100%'
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textDate: {
        paddingVertical: 4,
        color: '#f2e9e4',
        fontWeight: '700',
    },
    checkAndTrash: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },

})