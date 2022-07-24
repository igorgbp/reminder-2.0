import { View, StyleSheet, Text } from "react-native";
import React from "react";

import CalendarComponent from "../../components/calendar_file";


export default function CalendarScreen() {
    return (

        <View style = {{flex:1}}>
            <View style={styles.background}>
                {/* calendario */}

                <CalendarComponent />
                

            </View>
            <View style = {{flex:1.6}}>
                <Text>
                    igasdçfkj
                </Text>
            </View>
        </View>



    )
}


const styles = StyleSheet.create({
    background: {
        backgroundColor: '#2a2a2a',
        flex: 1,
        justifyContent: 'flex-start'
    }
})