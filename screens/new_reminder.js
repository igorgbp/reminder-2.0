import React from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, StatusBar, TouchableOpacity } from "react-native"
import ButtonSave from "../components/content_reminder"
import InputReminder, {  InputReminderLarger } from "../components/inputReminder"

export default function NewReminder() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.avoidingview}>
            <StatusBar
                barStyle='light-content'
                backgroundColor={'#2a2a2a'}
            />
            <View behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.view}>
                <InputReminder>
                </InputReminder>
                <InputReminderLarger>
                </InputReminderLarger>
            </View>
            <ButtonSave text= 'Salvar'/>
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
        paddingTop:'6%',
        paddingBottom:'6%',
        backgroundColor: '#262626',

        

    },
    avoidingview:{
        // borderWidth: 2,
        // borderColor: 'red',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#2a2a2a',
        alignItems: 'center'
    }

})