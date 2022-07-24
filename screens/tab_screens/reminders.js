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
                onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <NewReminder />
            </Modal>
            <Modal
                visible={editVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                backdropOpacity={editVisible ? 0.7 : 0.701}
                backdropColor={'#000'}
                onBackdropPress={() => setEditVisible(false)}
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

                            <View style={{ width: '50%', }}>
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
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#2a2a2a',


    },

    lista: {

        borderWidth: 2,
        borderColor: '#5a5a5a',
        width: '95%',
        borderRadius: 19,
        // paddingVertical: 20,
        // flexDirection: 'row',



    },

    modal: {
        // borderWidth: 2, 
        // borderColor: 'yellow'
    },
    textContainer: {
        justifyContent: 'center',
        alignSelf: 'center'
    },
    flatlistContainer: {
        // flex:15,
        width: '100%',
        height: '92%',
        alignItems: 'center',
        paddingVertical: 2
    },
    textTitleReminders: {
        fontSize: 18,
        color: '#FFF',
        fontFamily: 'Arial',
        padding: 10,


    },
})