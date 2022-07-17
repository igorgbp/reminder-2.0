import React, { createContext, useState } from "react";
import firebase from '../firebase/config'
import {useNavigation} from '@react-navigation/native'

export const authContext = createContext({})

function AuthProvider({children}){

    const [userId, setUserId] = useState()
    const [error, setError] = useState(false)

    const navigation = useNavigation()

    const database = firebase.firestore()


    const nameAdd = (name) =>{
        database.collection(userId).add({
            name: name,
            nameDoc: true
        })
    }

    const loginFirebase = (email,password) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserId(user.uid)
                navigation.navigate('Tabs')
                
            })
            .catch((error) => {
                setError(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            }
            )
    }


    const signupFirebase = (email, password, name) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                
                setUserId(user.uid)
                nameAdd(name)
                navigation.navigate('Tabs')
            })
            
            .catch((error) => {
                setError(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            });}


    return (
        <authContext.Provider value = {{ loginFirebase, userId, signupFirebase, error, setError}}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider