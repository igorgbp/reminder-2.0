import { TouchableOpacity, Text, StyleSheet} from "react-native";
import React from "react";

export default function ButtonSave(props) {


    return (
        <TouchableOpacity style={styles.touchable} onPress= {()=>props.press()}>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    touchable: {
        borderWidth: 2,
        borderColor: '#4E8390',
        width: '30%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#7DC8DA',
        alignSelf: 'center',
    },
    text: {
        fontSize: 15,
        color: '#2a2a2a',
        fontWeight: '700'
    }
})