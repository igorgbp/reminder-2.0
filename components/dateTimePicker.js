import { Platform } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet } from "react-native";



export function DateSelect(props) {

    const [pickerDate, setPickerDate] = useState(new Date())

    const onChange = (event, date) => {
        const currentdate = date || pickerDate;
        setPickerDate(currentdate);
        console.log(pickerDate)
        props.onChangeDate(pickerDate)
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
            <DateTimePicker
                testID='dateTimePicker'
                value={pickerDate}
                mode='date'
                display='compact'
                onChange={onChange}
                style={styles.datePicker}
                // disabled={dateoff}
                themeVariant={'dark'}
                textColor='red'
                disabled={props.disabled}

            />




    )
}





const styles = StyleSheet.create({

    datePicker: {
        borderWidth: 2,
        borderColor: '#4a4a4a',
        // alignSelf: 'center',
        width: 85,
        borderRadius: 10
    }
})