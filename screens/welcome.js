import { View, StyleSheet, ImageBackground, TouchableOpacity, Text, StatusBar } from "react-native";
import React ,{useEffect} from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import firebase from '../firebase/config'


export default function Welcome() {
    

    const navigation = useNavigation()

    // botão welcome
    const ButtonWelcome = () => {
        return (
            <TouchableOpacity style={styles.buttonwelcome}
                onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.textbuttonwelcome}>Ir para o app</Text>
            </TouchableOpacity>
        )
    }

    // textos welcome
    const TextWelcome = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={styles.welcometext}>Bem vindo ao Reminder</Text>
                <Text style={styles.welcomeinfo}>Entre para fazer login</Text>
            </View>
        )
    }

    // verificação se está logado
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                navigation.navigate('Tabs')
                
            }
        })
    }, [])

    return (
        <ImageBackground
            source={require('../assets/background_welcome.png')}
            resizeMode={'cover'}
            style={{ flex: 1 }}
        >
            <StatusBar barStyle={'light-content'}/>

            {/* up image */}
            <View style={styles.upView}>
                <Animatable.Image
                    source={require('../assets/erased_logo_reminder.png')}
                    style={styles.imageLogoStyle}
                    resizeMode={'contain'}
                    animation= {'fadeIn'}
                />
            </View>

            {/* button e text */}
            <View style={styles.downView}>
                <TextWelcome />
                <View style = {{height: '6%'}}/>
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
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonwelcome: {
        width: '50%',
        backgroundColor: '#f2e9e4',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: '5%',
        borderRadius: 30
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