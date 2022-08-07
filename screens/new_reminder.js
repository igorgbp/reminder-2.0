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

    const [showCalendarAndroid, setShowCalenarAndroid] = useState(false)
    const [dateEnable, setDateEnable] = useState(false)

    const { userId, setButtonSaveEnabled, setModalVisible } = useContext(authContext)
    const database = firebase.firestore()


    function Save() {
        return (
            dateEnable?
            database.collection(userId).add({
                name: inputName,
                note: inputNote,
                date: datePicked,
                done: false
            })
            :
            database.collection(userId).add({
                name: inputName,
                note: inputNote,
                date: null,
                done: false

            })


        )
    }

    if (inputName=='') setButtonSaveEnabled(false)
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
                            onValueChange={(value) => {setDateEnable(!dateEnable), 
                                 value==true? setShowCalenarAndroid(true):null
                                }}
                            trackColor={{ true: '#9a8c98' }} thumbColor={'#f2e9e4'}
                            
                            />
                    </View>

                    <DateSelect previousDate = {null} onChangeDate={setDatePicked} disabled={dateEnable} showCalendar={showCalendarAndroid} setShowCalendar={setShowCalenarAndroid} />

                </View>

            </View>
            <View style={{ height: '5%' }} />
            <View style={styles.saveCancelButton}>

                <TouchableOpacity style = {{padding: 10}} onPress= {()=>setModalVisible(false)}>
                    <Text style = {{color:'#c9ada7', fontWeight: '600', fontSize: 14}}>Cancel</Text>
                </TouchableOpacity>
            
                <ButtonSave text='Save' press={Save}/>
            
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
        // alignItems: 'stretch',
        // borderWidth:2, 
        // borderColor:'blue'
    },
    avoidingview: {

        paddingHorizontal: '5%',
        // paddingBottom: 0,
        alignSelf: 'center',
        paddingVertical: '1%',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        // height: 20,
        backgroundColor: '#3F425A',
        alignItems: 'center',
        // borderWidth: 2, 
        // borderColor: 'blue'
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
        // borderWidth: 2, 
        // borderColor: 'blue'
    },
    switch: {
        marginLeft: 5,
    },
    dateSwitch: {
        flexDirection: 'row',
        alignItems: 'center',

    }

})