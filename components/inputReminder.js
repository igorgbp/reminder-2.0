import { TextInput } from "react-native"
import { StyleSheet } from "react-native"


export function InputReminderLarger(props) {
    return (
        <TextInput style={styles.inputLarger} multiline={true}
            numberOfLines={Platform.OS === 'ios' ? null : 5}
            maxHeight={(Platform.OS === 'ios') ? (20 * 5) : null}
            onChangeText={(text) => { props.onChangeText(text) }}>

        </TextInput>
    )
}


export default function InputReminder(props) {
    return (
        <TextInput style={styles.input} onChangeText={(text) => { props.onChangeText(text) }}>

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 15,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        backgroundColor: '#353535',
        color: '#FFF',
        fontSize: 20,
        textAlign: 'flex-start',
        paddingLeft: 20,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#222222',
    },
    inputLarger: {
        paddingBottom: 10,
        paddingTop: 8,
        paddingRight: 15,
        paddingLeft: 20,

        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        
        width: '90%',
        backgroundColor: '#353535',

        color: '#FFF',
        fontSize: 16,

        textAlign: 'flex-start',
        alignSelf: 'center',

        borderWidth: 2,
        borderColor: '#222222',
    },

})