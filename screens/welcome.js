import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, StatusBar } from "react-native";
import React ,{useEffect} from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import firebase from '../firebase/config'


export default function Welcome() {

    
    const navigation = useNavigation()
    // style components
    const ButtonWelcome = () => {
        return (
            <TouchableOpacity style={styles.buttonwelcome}
                onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.textbuttonwelcome}>Ir para o app</Text>
            </TouchableOpacity>
        )
    }
    const TextWelcome = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.welcometext}>Bem vindo ao Reminder</Text>
                <Text style={styles.welcomeinfo}>Entre para fazer login</Text>
            </View>
        )
    }


    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigation.navigate('Tabs')
            } else {
            }
        }
        )

    }, [])


    return (
        <ImageBackground
            source={require('../assets/background_welcome.png')}
            resizeMode={'cover'}
            style={{ flex: 1 }}
        >
            <StatusBar barStyle={'light-content'}/>
            <View style={styles.upView}>
                <Animatable.Image
                    source={require('../assets/erased_logo_reminder.png')}
                    style={styles.imageLogoStyle}
                    resizeMode={'contain'}
                    animation= {'fadeIn'}
                />
            </View>

            <View style={styles.downView}>
                <TextWelcome />
                <ButtonWelcome/>
            </View>

        </ImageBackground>
    )
}



const styles = StyleSheet.create({
    upView: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    downView: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',

    },
    buttonwelcome: {
        width: '50%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '5%',
        borderRadius: 26
    },
    textbuttonwelcome: {
        fontSize: 20
    },
    welcometext: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold'
    },
    welcomeinfo: {
        fontSize: 20,
        color: '#FFF'
    },
    imageLogoStyle: {
        width: '70%',
        tintColor: '#FFF'
    }
}
)