import { View, Text, ImageBackground, StyleSheet, KeyboardAvoidingView, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import InputUser from "../components/inputUser";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { authContext } from "../contexts/auth";

export default function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {loginFirebase, error} = useContext(authContext)

    const handleLogin = () =>{
        loginFirebase(email, password)
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

                {/* form e buttons */}
                <View style={styles.formView}>

                    {/* inputs */}
                    <InputUser placeHolder='Email' onChangeText={setEmail} valor={email}/>
                    <InputUser placeHolder='Password' onChangeText={setPassword} valor={password} pass={true} />


                    {/* erro ao logar */}
                    <View style={styles.errorLogin}>
                        {error === true
                            ?
                            <Text style={styles.errorLoginText}>Email ou senha incorretos</Text>
                            :
                            <Text></Text>
                        }
                    </View>


                    {/* botão de entrar */}
                    {email === '' || password === ''
                        ?
                        <TouchableOpacity style={styles.disablebutton} disabled={true}>
                            <Text style={{ fontSize: 16, color: '#2f2f2f' }}>Entrar</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.enablebutton} onPress = {()=> handleLogin()}>
                            <Text style={{ fontSize: 16 }}>Entrar</Text>
                        </TouchableOpacity>
                    }

                    {/* opção de cadastro */}
                    <View style = {styles.signupContainer}>
                        <Text style={styles.question}>Não tem uma conta?</Text>
                        <TouchableOpacity style={styles.signupbutton} onPress={() => navigation.navigate('Signup')}>
                            <Text style={{fontSize: 16}}>Cadastre-se</Text>
                        </TouchableOpacity>
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
        flex: 1,
        alignItems: 'center',

    },
    image: {
        width: '50%',
        height: '50%',
        marginBottom: 20
    },
    disablebutton: {
        backgroundColor: '#4b4b4b',
        borderRadius: 26,
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
    },
    enablebutton: {
        backgroundColor: '#ABABAB',
        borderRadius: 26,
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
    },
    errorLogin: {
        marginBottom: 7
    },
    errorLoginText: {
        fontSize: 14,
        color: '#FE9393'
    },
    signupContainer:{
        alignItems: 'center', 
        justifyContent:'center',
        marginTop:30
    },
    question:{
        color:'#FFF', 
        fontSize:16,
        marginBottom:6
    },
    signupbutton:{
        backgroundColor: '#A6CCD6',
        borderRadius: 26,
        paddingHorizontal: 20,
        alignContent: 'center',
        alignItems: 'center',
        paddingVertical: 9,
    }

})