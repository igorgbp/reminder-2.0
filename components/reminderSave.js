import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { authContext } from "../contexts/auth";

export default function ButtonSave(props) {
    const { setModalVisible, buttonSaveEnabled, setEditVisible } = useContext(authContext)
    if (buttonSaveEnabled) {
        return (
            <TouchableOpacity style={styles.touchable}
                onPress={() => { props.press(); setModalVisible(false); setEditVisible(false) }}
                disabled={false}
            >
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity style={styles.touchableDisabled}
                disabled={true}
            >
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    touchable: {
        width: '30%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#9a8c98',
        alignSelf: 'center',
    },
    touchableDisabled:{
        width: '30%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: '#7A6E78',
        alignSelf: 'center',
    },
    text: {
        fontSize: 15,
        color: '#22223b',
        fontWeight: '700'
    }
})