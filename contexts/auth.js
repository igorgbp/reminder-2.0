import React, { createContext, useState } from "react";
import firebase from '../firebase/config'
import {useNavigation} from '@react-navigation/native'

export const authContext = createContext({})

function AuthProvider({children}){

    const [userId, setUserId] = useState()
    const [name, setName] = useState()

    const navigation = useNavigation()

    const loginFirebase = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Destino')
                setUserId(user.uid)
            })
            .catch((error) => {
                setErrorLogin(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            }
            )
    }


    const signupFirebase = (email, password, name) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Destino')
                setUserId(user.uid)
                setName(name)
            })
            
            .catch((error) => {
                setErrorSignup(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            });}


    return (
        <authContext.Provider value = {{ loginFirebase, userId, signupFirebase, name}}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider