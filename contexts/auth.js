import React, { createContext, useEffect, useState } from "react";
import firebase from '../firebase/config'
import { useNavigation } from '@react-navigation/native'

export const authContext = createContext({})

function AuthProvider({ children }) {

    const [userId, setUserId] = useState()
    const [error, setError] = useState(false)
    const [info, setInfo] = useState()
    const navigation = useNavigation()
    const database = firebase.firestore()
    const [optionsVisible, setOptionsVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [editVisible, setEditVisible] = useState(false)
    const [buttonSaveEnabled, setButtonSaveEnabled] = useState(false)
    let name;
    const [itemSelected, setItemSelected ] = useState({})

    const loginFirebase = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserId(user.uid)
                navigation.navigate('Tabs')
                console.log(takeName())
            })
            .catch((error) => {
                setError(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            }
            )
        
    }

    // function takeName(){
    //     database.collection(userId).onSnapshot((query) => {
    //         let nomeUser = ''
    //         query.forEach((doc) => {
    //             if(doc.data)
    //         })
    //     })
        
    // }
    function signupFirebase(email, password, name) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUserId(user.uid)
                database.collection(user.uid).add({
                    name: name,
                    nameDoc: true
                })
                navigation.navigate('Tabs')
            })

            .catch((error) => {
                setError(true)
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    function findContent() {
        setUserId(firebase.auth().currentUser.uid)
        database.collection(firebase.auth().currentUser.uid).onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id })
            })

            setInfo(list)
        })
    }

    function deleteReminder(id) {
        database.collection(userId).doc(id).delete()
    }

    function logOut (){
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            console.log('error')
        })
    }
 


    return (
        <authContext.Provider 
        value={{ 
            loginFirebase, 
            userId, 
            signupFirebase, 
            error, 
            setError, 
            info, 
            findContent,
            modalVisible, 
            setModalVisible,
            buttonSaveEnabled,
            setButtonSaveEnabled,
            deleteReminder,
            editVisible, 
            setEditVisible,
            itemSelected, setItemSelected,
            optionsVisible, setOptionsVisible,takeName,logOut
            }}>

            {children}

        </authContext.Provider>
    )
}
export default AuthProvider