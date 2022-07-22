import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import React, { useEffect, useContext, useState } from "react";
import { authContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";
import NewReminder from "../new_reminder";

export default function ReminderScreen() {

    const [modalVisible, setModalVisible] = useState(false)

    const { info, userId, findContent } = useContext(authContext)
    const navigation = useNavigation()

    useEffect(() => {
        findContent()
    }, [])



    return (
        <View style={styles.background}>

            

            <Modal 
            visible={modalVisible}   
            avoidKeyboard={true}
            hasBackdrop={true} 
            backdropOpacity={0.5} 
            backdropColor= {'#000'} 
            onBackdropPress={()=>setModalVisible(false)}
            style = {styles.modal}>
                <NewReminder modalvisible = {setModalVisible}/>
            </Modal>
            <FlatList 
                style={styles.lista}
                data={info}
                renderItem={({item}) => {
                    return(
                        <Text style = {{color:'#000'}}>asdf {item.name}</Text>
                    )
                    
                }}
            />

<TouchableOpacity style={{ width: '40%', width: '40%', borderWidth: 2, borderColor: 'blue' }} 
            onPress={() => setModalVisible(!modalVisible)}>
                <Text>+</Text>   
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lista:{
        borderWidth: 2, 
        borderColor: 'red', 
        width: '100%',
    },
    modal:{
        // borderWidth: 2, 
        // borderColor: 'yellow'
    }
})