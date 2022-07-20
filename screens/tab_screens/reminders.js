import { View, StyleSheet, FlatList, Text, TouchableOpacity, Modal } from "react-native";
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
            <Text>
                asdf
                {userId}
            </Text>


            <TouchableOpacity
                style={{ width: '40%', width: '40%', borderWidth: 2, borderColor: 'blue' }}
                onPress={() => setModalVisible(!modalVisible)}
            >
                <Text>
                    +
                </Text>
            </TouchableOpacity>

            <Modal style = {{backgroundColor:'red'}}onDismiss={()=>setModalVisible(!modalVisible)} visible={modalVisible}  transparent={true}>
                <NewReminder />
            </Modal>
            <FlatList
                style={styles.listcomp}
                data={info}
                renderItem={({ item }) => {
                    <Text> {item.ff}</Text>
                }}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})