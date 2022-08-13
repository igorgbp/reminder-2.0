import { View, StyleSheet, Text, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import Modal from "react-native-modal";
import CalendarComponent from "../../components/calendar_file";
import { authContext } from "../../contexts/auth";

import { ReminderCard, ReminderCardCalendar } from "../../components/reminderCard";
import EditReminder from "../edit_reminder";
import { DatesContext } from "../../contexts/date";
import ButtonPlus from "../../components/buttonPlus";
import NewReminder from "../new_reminder";
import Options from "../options";


export default function CalendarScreen() {
    console.log('calendar.js executa')

    const {
        info,
        optionsVisible,
        setOptionsVisible,
        editVisible,
        setEditVisible,
        modalVisible,
        setItemSelected,
        itemSelected }
        = useContext(authContext)

    const { pressedFormat, markCalendar } = useContext(DatesContext)


    // let infoFiltered = info.filter((item) => item.done == false)
    // console.log(infoFiltered)
    
    // useEffect(()=>{
    //     markCalendar()
    // },[])


    return (
        <View style={{ flex: 1, backgroundColor: '#22223b' }}>
            
            {/* calendario */}
            <View style={styles.background}>
                <CalendarComponent />
            </View>

            {/* new reminder */}
            <Modal
                visible={modalVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                animationOut={'bounce'}
                backdropOpacity={modalVisible ? 0.7 : 0.701}
                backdropColor={'#000'}
                backdropTransitionInTiming={500}
                // onBackdropPress={() => setModalVisible(false)}
                style={styles.modal}>
                <NewReminder />
            </Modal>

            {/* edit reminder */}
            <Modal
                visible={editVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                backdropOpacity={editVisible ? 0.77 : 0.7}
                backdropColor={'#000'}
                // onBackdropPress={() => setEditVisible(false)}
                style={styles.modal}>
                <EditReminder item={itemSelected} />
            </Modal>

            {/* options */}
            <Modal
                visible={optionsVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                backdropOpacity={optionsVisible ? 0.5 : 0.51}
                backdropColor={'#000'}
                onBackdropPress={() => setOptionsVisible(false)}
                style={styles.modal}>
                <Options />
            </Modal>

            {/* list of reminders */}
            <View style={styles.flatlistContainer}>
                <FlatList
                    style={styles.lista}
                    data={info}
                    numColumns={1}
                    // columnWrapperStyle={{ height: 120, marginBottom:6}}
                    renderItem={({ item }) => {
                        // console.log('flatlist at calendar executa')
                        let dateString
                        if (item.date != null) {

                            let dateDocument = new Date(item.date.seconds * 1000)
                            dateString = dateDocument.getDate() + '/' + (dateDocument.getMonth() + 1) + '/' + dateDocument.getFullYear()
                        }
                        return (
                            dateString == pressedFormat
                                ?

                                <View style={{ width: '100%', height: 80, marginBottom: 6 }}>
                                    <ReminderCardCalendar wid={'90%'} item={item} selectedItem={setItemSelected} />
                                </View>
                                :
                                null
                        )
                    }}
                />
            </View>

            {/* add reminder button */}
            <ButtonPlus />

        </View>
    )
}


const styles = StyleSheet.create({
    background: {
        // borderWidth: 2, borderColor:'yellow',
        borderRadius: 19,
        justifyContent: 'flex-start',
        paddingBottom: 7,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#333549',
        marginTop: '6%'
    },
    textContainer: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    textTitleReminders: {
        fontSize: 18,
        color: '#f2e9e4',
        fontFamily: 'Arial',
        padding: 10,


    },
    lista: {
        width: '97%',
        borderRadius: 19,
    },

    flatlistContainer: {
        width: '100%',
        alignSelf: 'center',
        height: '90%',
        alignItems: 'center',
        marginTop: '13%'
    },

})