import { View, StyleSheet, Text } from "react-native";
import React from "react";

import CalendarComponent from "../../components/calendar_file";


export default function CalendarScreen() {
    return (

        <View style={{ flex: 1, backgroundColor: '#2a2a2a' }}>
            <View style={styles.textContainer}>
                <Text style={styles.textTitleReminders}>Calendar</Text>
            </View>
            <View style={styles.background}>
                {/* calendario */}

                <CalendarComponent />


            </View>
            <View style={{ flex: 1.6 }}>
                <Text>
                    igasdçfkj
                </Text>
            </View>
        </View>



    )
}


const styles = StyleSheet.create({
    background: {
        // padding: 20,
        borderWidth: 2,
        borderColor: '#3a3a3a',
        borderRadius: 19,
        flex: 1,
        justifyContent: 'flex-start',
        paddingBottom:7,
        width: '97%',
        alignSelf: 'center',
        backgroundColor: '#222222'
        

    },
     textContainer: {
        justifyContent: 'center',
        alignSelf: 'center', 
    },
    textTitleReminders: {
        fontSize: 18,
        color: '#f2e9e4',
        fontFamily: 'Arial',
        padding: 10,


    },
})