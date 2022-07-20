import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Modal } from "react-native"
import ButtonSave from "../components/content_reminder"
import InputReminder, { InputReminderLarger } from "../components/inputReminder"
import { DateSelect } from "../components/dateTimePicker"
import { authContext } from "../contexts/auth"
import firebase from "../firebase/config"


export default function NewReminder() {
    const [inputName, setInputName] = useState('')
    const [inputNote, setInputNote] = useState('')
    const [datePicked, setDatePicked] = useState(new Date())

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
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.avoidingview}>

            <StatusBar barStyle='light-content' backgroundColor={'#2a2a2a'} />
            
                <View style={styles.view}>

                    <InputReminder onChangeText={setInputName} />
                    <InputReminderLarger onChangeText={setInputNote} />
                    <View style={styles.pickerAndDate}>
                        <DateSelect onChangeDate={setDatePicked} />
                    </View>

                </View>
                <ButtonSave text='Salvar' press={Save} />
            

            

        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    view: {
        borderWidth: 2,
        borderColor: '#222222',
        borderRadius: 20,
        // flex: 1,,
        width: '90%',
        // height:'40%',

        // justifyContent: 'center',
        paddingTop: '6%',
        paddingBottom: '6%',
        backgroundColor: '#262626',
    },
    avoidingview: {
        // borderWidth: 2,
        // borderColor: 'red',
        // flex: 1,
        borderWidth: 2, 
        borderColor: 'blue',
        width: '90%',
        marginTop:200,
        justifyContent: 'center',
        backgroundColor: '#2a2a2a',
        alignItems: 'center'
    },
    pickerAndDate: {
        borderWidth: 2,
        borderColor: 'red',
        alignItems: 'center',
    },
    modal:{
        width: 50,
        borderWidth: 2, 
        borderColor:'blue'

    }

})