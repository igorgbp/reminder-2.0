import { TextInput } from "react-native"
import { StyleSheet } from "react-native"


export function InputReminderLarger(props) { 
    return (
        <TextInput style={styles.inputLarger} multiline={true}
            numberOfLines={Platform.OS === 'ios' ? null : 1}
            maxHeight={(Platform.OS === 'ios') ? (20 * 5) : (20*5)}
            onChangeText={(text) => { props.onChangeText(text) }}
            placeholder='Note' placeholderTextColor={'#4a4e69'}
            value = {props.value}
            // onChange={(event) => {
            //     ({height: event.nativeEvent.contentSize.height});
            //     }}
            // onContentSizeChange={()=>}
            >

        </TextInput>
    )
}


export default function InputReminder(props) {
    return (
        <TextInput style={styles.input} onChangeText={(text) => { props.onChangeText(text) }}
        placeholder='Name' placeholderTextColor={'#4a4e69'} value={props.value}
        autoFocus={true}>

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        backgroundColor: '#9a8c98',
        color: '#22223b',
        fontSize: 20,
        paddingLeft: 20,
        alignSelf: 'center',

    },
    inputLarger: {
        paddingBottom: 10,
        paddingTop: 8,
        justifyContent: 'flex-start',
        paddingRight: 15,
        paddingLeft: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: '90%',
        backgroundColor: '#9a8c98',
        color: '#22223b',
        fontSize: 16,
        // textAlign: 'flex-start',
        alignSelf: 'center',
    },

})