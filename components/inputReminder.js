import { TextInput } from "react-native"
import { StyleSheet } from "react-native"


export function InputReminderLarger(){
    return (
        <TextInput style = {styles.inputLarger}>

        </TextInput>
    )
}
const asdf = 'blue';

export default function InputReminder(){
    return (
        <TextInput style = {styles.input}>

        </TextInput>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingVertical: 16,
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#353535',
        color: '#FFF',
        fontSize: 18,
        textAlign:'center',
        // marginBottom: 7,
        alignSelf:'center',
        borderWidth: 2,
        borderColor: '#222222',
    },
    inputLarger: {
        paddingVertical: 45,
        borderRadius: 10,
        width: '90%',
        backgroundColor: '#353535',
        color: '#FFF',
        fontSize: 18,
        textAlign:'center',
        // marginBottom: 7,
        // p
        alignSelf:'center',
        borderWidth: 2,
        borderColor: '#222222',
    },
    inputncname: {
        width: '88%',
        paddingVertical: 1,
        paddingRight: 10,
        marginTop: 18,
        marginLeft: 10,
        alignSelf: 'center',
        color: '#E6E1E1',
        fontSize: 25,
        // borderWidth: 2, 
        // borderColor: 'blue'

    },

})