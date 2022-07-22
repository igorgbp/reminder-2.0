import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Modal, TouchableOpacity, Switch } from "react-native"
import ButtonSave from "../components/content_reminder"
import InputReminder, { InputReminderLarger } from "../components/inputReminder"
import { DateSelect } from "../components/dateTimePicker"
import { authContext } from "../contexts/auth"
import firebase from "../firebase/config"


export default function NewReminder(props) {
    const [inputName, setInputName] = useState('')
    const [inputNote, setInputNote] = useState('')
    const [datePicked, setDatePicked] = useState(new Date())

    const [dateEnable, setDateEnable] = useState(false)

    const { userId } = useContext(authContext)
    const database = firebase.firestore()

    function Save() {
        return (
            database.collection(userId).add({
                name: inputName,
                note: inputNote,
                date: datePicked
            })
        )
    }

    return (
        <View style={styles.avoidingview}>

            <StatusBar barStyle='light-content' backgroundColor={'#2a2a2a'} />

            <View style={styles.view}>
                <InputReminder onChangeText={setInputName} />
                <InputReminderLarger onChangeText={setInputNote} />
                <View style={{ height: '8%' }} />
                <View style={styles.pickerAndDate}>
                    <Switch value={dateEnable} onValueChange={()=>setDateEnable(!dateEnable)} trackColor={{true:'#7DC8DA'}} />
                    <DateSelect onChangeDate={setDatePicked} disabled = {dateEnable}/>
                </View>

            </View>
            <View style={styles.saveCancelButton}>
                <ButtonSave text='Salvar' press={Save} />
            </View>





        </View>
    )
}
const styles = StyleSheet.create({
    view: {

        borderRadius: 20,
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#4E8390',
        alignItems: 'stretch',
    },
    avoidingview: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        // flex: 1,
        alignSelf: 'center',
        borderRadius: 20,
        width: '100%',
        // marginTop: 200,
        justifyContent: 'space-around',
        backgroundColor: '#2a2a2a',
        alignItems: 'center'
    },
    pickerAndDate: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    modal: {
        width: 50,
        borderWidth: 2,
        borderColor: 'blue'

    },
    saveCancelButton: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%',
        alignItems: 'center'
    }

})