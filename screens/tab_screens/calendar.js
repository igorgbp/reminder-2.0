import {View, StyleSheet } from "react-native";
import React from "react";

import CalendarComponent from "../../components/calendar_file";


export default function CalendarScreen() {
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