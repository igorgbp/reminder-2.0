import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";
import Modal from "react-native-modal";
import React, { useEffect, useContext, useState } from "react";
import { authContext } from "../../contexts/auth";
import NewReminder from "../new_reminder";
import ButtonPlus from "../../components/buttonPlus";
import ReminderCard from "../../components/reminderCard";
import EditReminder from "../edit_reminder";

export default function ReminderScreen() {

    // const [modalVisible, setModalVisible] = useState(false)
    const [itemSelected, setItemSelected ] = useState({})
    // console.log(itemSelected)
    const { info, findContent, modalVisible, setModalVisible, editVisible, setEditVisible } = useContext(authContext)
    useEffect(() => {
        findContent()
        console.log(info)
    }, [])



    return (
        <SafeAreaView style={styles.background}>



            <Modal
                visible={modalVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                backdropOpacity={modalVisible ? 0.7 : 0.701}
                backdropColor={'#000'}
                // onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <NewReminder />
            </Modal>
            <Modal
                visible={editVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                backdropOpacity={editVisible ? 0.7 : 0.701}
                backdropColor={'#000'}
                // onBackdropPress={() => setEditVisible(false)}
                style={styles.modal}>
                <EditReminder item = {itemSelected}/>
                <Text>

                </Text>
            </Modal>

            <View style={styles.textContainer}>
                <Text style={styles.textTitleReminders}>Reminders</Text>
            </View>

            <View style={styles.flatlistContainer}>
                <FlatList
                    style={styles.lista}
                    data={info}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (

                            <View style={{ width: '50%' }}>
                                <ReminderCard item={item} selectedItem = {setItemSelected} />
                            </View>
                        )
                    }}
                />
            </View>


            <ButtonPlus />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#22223b'
    },
    lista: {
        width: '97%',
        borderRadius: 19,
    },
    textContainer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    flatlistContainer: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
    },
    textTitleReminders: {
        fontSize: 18,
        color: '#f2e9e4',
        fontFamily: 'Arial',
        padding: 10,


    },
})