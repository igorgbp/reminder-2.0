import React, { useContext } from "react"
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import { authContext } from "../contexts/auth"
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Options() {
    const { nameUser, logOut, setOptionsVisible } = useContext(authContext)

    function ListOptions(props) {
        return (
            <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText}>{props.title}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.avoidingview}>

            <StatusBar barStyle='light-content' backgroundColor={'#2a2a2a'} />
            <View style={styles.title}>
                <Text style={styles.titleText}>{nameUser}</Text>
                <TouchableOpacity style={styles.logoutButton} onPress={() => { logOut(); setOptionsVisible(false) }}>
                    <Text>
                        <Icon name="sign-out-alt" size={30} color="#f2e9e4" />
                    </Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.downSide}>
                <ListOptions title = 'Concluídos'/>
                <ListOptions title = 'Lixeira'/>

            </View> */}





        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: '3%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    avoidingview: {
        padding: '3%',
        paddingHorizontal: '5%',
        alignSelf: 'center',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#3F425A',
    },
    titleText: {
        fontSize: 20,
        color: '#FFF',
        fontWeight: '500',
        width: '85%',
        paddingLeft: '1%'
    },
    downSide: {
        marginTop: '2%'
    },
    button: {
        backgroundColor: '#877784',
        padding: '3%',
        borderRadius: 10, 
        marginTop: '1%'
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 20,
        color: '#FFF',
        fontWeight: '600'
    }
})