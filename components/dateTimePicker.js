import { Platform } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet, Text } from "react-native";



export function DateSelect(props) {

    const [pickerDate, setPickerDate] = useState(new Date())
    // const [theme, setTheme] = useState(props.disabled)

    const onChange = (event, date) => {
        let currentdate = date
        setPickerDate(currentdate);
        props.onChangeDate(currentdate)      
    }
    
    // console.log(pickerDate)
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
                // style={styles.datenewcomp}
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
                    // disabled={dateoff}
                    themeVariant={Theme()}
                    textColor='red'
                    disabled={!props.disabled}

                />
            </View>





    )
}





const styles = StyleSheet.create({

    datePicker: {
        // borderWidth: 2,
        // borderColor: 'blue',
        // alignSelf: 'center',
        // color:'red',
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