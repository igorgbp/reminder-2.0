import React, { useContext } from "react"
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native"
import { authContext } from "../contexts/auth"


export default function Options() {
    const {takeName, logOut, setOptionsVisible} = useContext(authContext)
    // let nome = takeName()
    // console.log(nome)
    return (
        <View style={styles.avoidingview}>

            <StatusBar barStyle='light-content' backgroundColor={'#2a2a2a'} />
            <View style={styles.title}>
                <Text style = {styles.titleText}>asçldkfj</Text>
            </View>
            <View>
                <TouchableOpacity >
                    <Text>Mudar nome</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{logOut(); setOptionsVisible(false)}}>
                    <Text>sair</Text>
                </TouchableOpacity>
            </View>





        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        padding: 20
    },
    avoidingview: {

        paddingHorizontal: '5%',
        alignSelf: 'center',
        paddingVertical: '0%',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        backgroundColor: '#3F425A',
        alignItems: 'center'
    },
    titleText:{
        fontSize: 20, 
        color:'#FFF', 
        fontWeight: '500'
    }
})