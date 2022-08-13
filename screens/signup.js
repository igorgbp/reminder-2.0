import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputUser from "../components/inputUser";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { authContext } from "../contexts/auth";


export default function Signup() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const {signupFirebase, error} = useContext(authContext)

    const handleSignup = () =>{
        signupFirebase(email, password, name)
    }

    return (
        <ImageBackground source={require('../assets/background_login.png')} resizeMode={'cover'} style={{ flex: 1 }}>
            
            <StatusBar barStyle="light-content" backgroundColor={'#2a2a2a'} />
            
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                {/* imagem logo */}
                <View style={styles.imageView}>
                    <Animatable.Image
                        animation={'fadeIn'}
                        source={require('../assets/erased_logo_reminder.png')}
                        resizeMode='contain'
                        style={styles.image}/>
                </View>

                {/* inputs e buttons */}
                <View style={styles.formView}>

                    {/* inputs */}
                    <InputUser placeHolder='Email' onChangeText={setEmail} valor={email} pass={false}  />
                    <InputUser placeHolder='Password' onChangeText={setPassword} valor={password} pass={true}/>
                    <InputUser placeHolder='Name' onChangeText={setName} valor={name} pass={false}/>


                    {/* erro ao logar */}
                    <View style={styles.errorSignup}>
                        {error === true
                            ?
                            <Text style={styles.errorSignupText}>Email ou senha incorretos</Text>
                            :
                            <Text></Text>
                        }
                    </View>


                    {/* verifica se escreveu senha e email */}
                    {email === '' || password === '' || name === ''
                        ?
                        <TouchableOpacity style={styles.disablebutton} disabled={true}>
                            <Text style={{ fontSize: 16, color: '#4a4e69' }}>Cadastrar-se</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.enablebutton} onPress = {()=> handleSignup()}>
                            <Text style={{ fontSize: 16, color:'#22223b' }}>Cadastrar-se</Text>
                        </TouchableOpacity>
                    }

                    {/* voltar para login */}
                    <View style = {styles.signupContainer}>
                        <Text style={styles.question} onPress={()=>navigation.goBack()}>Voltar para login</Text>
                    </View>


                </View>
            </KeyboardAvoidingView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    formView: {
        flex: 2,
        alignItems: 'center',


    },
    image: {
        width: '50%',
        height: '50%',
        marginBottom: 20, 
        tintColor: '#c9ada7'
    },
    disablebutton: {
        backgroundColor: '#333549',
        borderRadius: 26,
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
    },
    enablebutton: {
        backgroundColor: '#9a8c98',
        borderRadius: 26,
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
    },
    errorSignup: {
        marginBottom: 7
    },
    errorSignupText: {
        fontSize: 14,
        color: '#FE9393'
    },
    signupContainer:{
        alignItems: 'center', 
        justifyContent:'center',
        marginTop:30
    },
    question:{
        color:'#9a8c98', 
        fontSize:16,
        marginBottom:6
    },


})