import { Text, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Agenda } from "react-native-calendars";
import { DatesContext } from "../../contexts/date";
import { useContext } from "react";
import CalendarComponent from "../../components/calendar_file";


export default function CalendarScreen() {

    const {nomee} = useContext(DatesContext)




    return (

            <View style = {styles.background}>
                {/* calendario */}
                <CalendarComponent></CalendarComponent>
            </View>


    )
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#2a2a2a',
        flex: 1
    }
})