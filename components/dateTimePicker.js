import { Platform } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet, Text } from "react-native";



export function DateSelect(props) {

    let b = props.previousDate
    console.log(b)
    const [pickerDate, setPickerDate] = useState(props.previousDate != null ? new Date(props.previousDate) : new Date())
    // const [pickerDate, setPickerDate] = useState(new Date())

    const onChange = (event, date) => {
        let currentdate = date
        setPickerDate(currentdate);
        props.onChangeDate(currentdate)      
    }
    
    const Theme = () => {
        let tema
        if (!props.disabled)
            tema = 'light'
        else
            tema = 'light'

        return tema
    }

    return (

        Platform.OS === 'android'
            ?
            (

                <DateTimePicker
                    testID='dateTimePicker'
                    value={pickerDate}
                    mode='date'
                    display='default'
                    onChange={onChange}
                />

            )
            :
            <View style={props.disabled ? styles.dateContainerEnable : styles.dateContainerDisable}>
                <DateTimePicker
                    testID='dateTimePicker'
                    value={pickerDate}
                    mode='date'
                    display='compact'
                    onChange={onChange}
                    style={styles.datePicker}
                    themeVariant={Theme()}
                    textColor='red'
                    disabled={!props.disabled}

                />
            </View>





    )
}





const styles = StyleSheet.create({

    datePicker: {
        width: 85,

        borderRadius: 10
    },
    dateContainerEnable: {
        borderRadius: 12,
        backgroundColor: '#9a8c98',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateContainerDisable: {
        borderRadius: 12,
        backgroundColor: '#4a4e69',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:0.2
    }
})