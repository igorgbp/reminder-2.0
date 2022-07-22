import { Platform } from "react-native";
import { useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, StyleSheet } from "react-native";



export function DateSelect(props) {

    const [pickerDate, setPickerDate] = useState(new Date())
    const [theme, setTheme] = useState(props.disabled)

    const onChange = (event, date) => {
        const currentdate = date || pickerDate;
        setPickerDate(currentdate);
        console.log(pickerDate)
        props.onChangeDate(pickerDate)
    }

    const Theme = () =>{
        let tema
        if (props.disabled)
        tema  = 'dark'
        else 
        tema='light'

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
            <View style = { props.disabled ? styles.dateContainerEnable : styles.dateContainerDisable}>
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
    dateContainerEnable:{
        borderWidth: 2, 
        borderColor: '#3a3a3a',
        borderRadius: 12,
        backgroundColor: '#3a3a3a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateContainerDisable:{
        borderWidth: 2, 
        borderColor: '#2a2a2a',
        borderRadius: 12,
        backgroundColor: '#3a3a3a',
        justifyContent: 'center',
        alignItems: 'center',
        // opacity:0.3
    }
})