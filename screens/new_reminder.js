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

    const { userId, setButtonSaveEnabled, setModalVisible } = useContext(authContext)
    const database = firebase.firestore()


    function Save() {
        return (
            dateEnable?
            database.collection(userId).add({
                name: inputName,
                note: inputNote,
                date: datePicked
            })
            :
            database.collection(userId).add({
                name: inputName,
                note: inputNote
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
                        <Text style={{ color: '#f2e9e4', fontSize: 16 }}>Date</Text>
                        <Switch style={styles.switch} value={dateEnable}
                            onValueChange={() => setDateEnable(!dateEnable)}
                            trackColor={{ true: '#9a8c98' }} />
                    </View>

                    <DateSelect onChangeDate={setDatePicked} disabled={dateEnable} />

                </View>

            </View>
            <View style={{ height: '5%' }} />
            <View style={styles.saveCancelButton}>

                <TouchableOpacity style = {{padding: 10}} onPress= {()=>setModalVisible(false)}>
                    <Text style = {{color:'#c9ada7', fontWeight: '600', fontSize: 14}}>Cancelar</Text>
                </TouchableOpacity>
            
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
        backgroundColor: '#22223b',
        alignItems: 'stretch',
    },
    avoidingview: {

        paddingHorizontal: '5%',
        alignSelf: 'center',
        paddingVertical: '0%',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#3F425A',
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
    },
    dateSwitch: {
        flexDirection: 'row',
        alignItems: 'center',

    }

})