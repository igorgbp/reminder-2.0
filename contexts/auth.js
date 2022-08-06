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
    const [nameUser, setNameUser] = useState('asdf')
    const [itemSelected, setItemSelected ] = useState({})
    const [seeDone, setSeeDone] = useState('false')
    const loginFirebase = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
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

            let names = list.filter((item)=>item.nameDoc==true)
            let nameUs
            names.forEach((doc)=>{
                nameUs = doc.name
            })

            let content = list.filter((item)=>item.nameDoc!=true)
            // console.log(list)
            setNameUser(nameUs)
            setInfo(content)
            // info.shift()
        })
    }

    function deleteReminder(id) {
        database.collection(userId).doc(id).delete()
    }

    function doneReminder(id, docDone){
        // console.log(docDone)
        // console.log('aqui em cima')
        database.collection(userId).doc(id).update(
            {
                done:!docDone
            }
        )
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
            optionsVisible, setOptionsVisible,
            logOut,nameUser,doneReminder,
            seeDone, setSeeDone
            }}>

            {children}

        </authContext.Provider>
    )
}
export default AuthProvider