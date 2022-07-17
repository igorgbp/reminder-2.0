import React, { createContext, useEffect, useState } from "react";
import firebase from '../firebase/config'
import {useNavigation} from '@react-navigation/native'

export const authContext = createContext({})

function AuthProvider({children}){

    const [userId, setUserId] = useState()

    const [error, setError] = useState(false)

    const [info, setInfo] = useState()

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
    
   async function findContent(){
            setUserId(firebase.auth().currentUser.uid)
            database.collection(userId).onSnapshot((query) => {
                const list = []
                
                query.forEach((doc) => {
                    list.push({ ...doc.data(), id: doc.id }) 
                })

                setInfo(list)
                console.log('isso')
                console.log(info)
    
    })}


    return (
        <authContext.Provider value = {{ loginFirebase, userId, signupFirebase, error, setError,  info, findContent}}>
            {children}
        </authContext.Provider>
    )
}
export default AuthProvider