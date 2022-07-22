import React, { useState, useContext } from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, Modal, TouchableOpacity, Switch } from "react-native"
import ButtonSave from "../components/reminderSave"
import InputReminder, { InputReminderLarger } from "../components/inputReminder"
import { DateSelect } from "../components/dateTimePicker"
import { authContext } from "../contexts/auth"
import firebase from "../firebase/config"


export default function NewReminder() {
    const [inputName, setInputName] = useState('')
    const [inputNote, setInputNote] = useState('')
    const [datePicked, setDatePicked] = useState(new Date())

    const [dateEnable, setDateEnable] = useState(false)

    const { userId, setButtonSaveEnabled } = useContext(authContext)
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

    if (inputName==='') setButtonSaveEnabled(false)
    if (inputName==='') setButtonSaveEnabled(false)
    else setButtonSaveEnabled(true)



    return (
        <View style={styles.avoidingview}>

            <StatusBar barStyle='light-content' backgroundColor={'#2a2a2a'} />
            <View style={styles.view}>

                <InputReminder onChangeText={setInputName} />
                <View style={{ height: '2%' }} />
                <InputReminderLarger onChangeText={setInputNote} />

                <View style={{ height: '8%' }} />

                <View style={styles.pickerAndDate}>

                    <View style={styles.dateSwitch}>
                        <Text style={{ color: '#FFF', fontSize: 16 }}>Date</Text>
                        <Switch style={styles.switch} value={dateEnable}
                            onValueChange={() => setDateEnable(!dateEnable)}
                            trackColor={{ true: '#7DC8DA' }} />
                    </View>

                    <DateSelect onChangeDate={setDatePicked} disabled={dateEnable} />

                </View>

            </View>
            <View style={{ height: '2%' }} />
            <View style={styles.saveCancelButton}>
                {/* {
                    inputName || inputNote === ''
                        ? <ButtonSave text='Salvar' press={Save} disabled={false} />
                        : <ButtonSave text='Salvar' press={Save} disabled={true} />
                } */}

                <ButtonSave text='Salvar' press={Save}/>
            </View>





        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        justifyContent: 'center',
        paddingVertical: '2%',
        borderRadius: 20,
        width: '100%',
        backgroundColor: '#495359',
        alignItems: 'stretch',
        borderWidth: 2,
        borderColor: '#2a2a2a'
    },
    avoidingview: {

        paddingHorizontal: '5%',
        // flex: 1,
        alignSelf: 'center',
        paddingVertical: '0%',
        borderWidth: 2, 
        borderColor:'#1a1a1a',
        borderRadius: 20,
        width: '90%',
        // marginTop: 200,
        justifyContent: 'center',
        backgroundColor: '#4a4a4a',
        alignItems: 'center'
    },
    pickerAndDate: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    modal: {
        width: 50,

    },
    saveCancelButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    switch: {
        marginLeft: 5,
        borderWidth: 2.2,
        borderRadius: 15,
        borderColor: '#2a2a2a'
    },
    dateSwitch: {
        flexDirection: 'row',
        alignItems: 'center',

    }

})