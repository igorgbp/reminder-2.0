import { Platform } from "react-native";
import { useState, React } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";





export function DateSelect(props) {

    let b = props.previousDate
    // console.log(b)
    // const [showCalendarAndroid, setShowCalenarAndroid] = useState(false)
    const [pickerDate, setPickerDate] = useState(props.previousDate != null ? new Date(props.previousDate) : new Date())
    // const [pickerDate, setPickerDate] = useState(new Date())

    const onChange = (event, date) => {
        let currentdate = date
        setPickerDate(currentdate);
        props.onChangeDate(currentdate)
        props.setShowCalendar(false)
        // console.log(pickerDate)
    }

    const Theme = () => {
        let tema
        if (!props.disabled)
            tema = 'light'
        else
            tema = 'light'

        return tema
    }

    let dateStringAndroid = pickerDate
    let newdate = dateStringAndroid.getDate() +'/'+dateStringAndroid.getMonth() +'/'+dateStringAndroid.getFullYear()
    console.log(newdate)
    


    return (

        Platform.OS === 'android'
            ?
            // android
            (
                <View>
                    <TouchableOpacity onPress={()=>props.setShowCalendar(true)} style={props.disabled ? styles.dateContainerEnableAndroid : styles.dateContainerDisableAndroid}>
                        <Text style={styles.textButtonDate}>{newdate}</Text>
                    </TouchableOpacity>


                    {props.showCalendar == true ?
                        <DateTimePicker
                            testID='dateTimePicker'
                            value={pickerDate}
                            mode='date'
                            display='default'
                            onChange={onChange}
                            disabled={true}
                        />
                        :
                        null}
                </View>
            )
            :
            // ios
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
        borderRadius: 10,
        backgroundColor: '#4a4e69',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.2
    },
    dateContainerEnableAndroid: {
        borderRadius: 10,
        padding: '3%', 
        backgroundColor: '#9a8c98',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateContainerDisableAndroid: {
        borderRadius: 12,
        padding: '3%', 
        backgroundColor: '#4a4e69',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.2
    },
    textButtonDate:{
        fontSize:18,
        fontWeight: '400', 
        color:'#000'
    }
})