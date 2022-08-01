    import { View, StyleSheet, Text, FlatList, Modal } from "react-native";
import React, { useContext, useEffect } from "react";

import CalendarComponent from "../../components/calendar_file";
import { authContext } from "../../contexts/auth";

import { ReminderCard, ReminderCardCalendar } from "../../components/reminderCard";
import EditReminder from "../edit_reminder";
import { DatesContext } from "../../contexts/date";


export default function CalendarScreen() {
    // const [itemSelected, setItemSelected ] = useState({})
    // console.log(itemSelected)
    // const { info, findContent, modalVisible, setModalVisible, editVisible, setEditVisible } = useContext(authContext)
    const { info, findContent, editVisible, setItemSelected, itemSelected } = useContext(authContext)
    const {pressedFormat} = useContext(DatesContext)
    useEffect(() => {
        findContent()
        console.log(info)
    }, [])
    return (

        <View style={{ flex: 1, backgroundColor: '#22223b' }}>
            <View style={styles.textContainer}>
                <Text style={styles.textTitleReminders}>Calendar</Text>
            </View>
            <View style={styles.background}>
                {/* calendario */}

                <CalendarComponent />


            </View>
            
            <Modal
                visible={editVisible}
                avoidKeyboard={true}
                hasBackdrop={true}
                // backdropOpacity={editVisible ? 0.77 : 0.7}
                backdropColor={'#000'}
                // onBackdropPress={() => setEditVisible(false)}
                style={styles.modal}>
                <EditReminder item={itemSelected} />
                <Text>

                </Text>
            </Modal>
            <View style={styles.flatlistContainer}>
                <FlatList
                    style={styles.lista}
                    data={info} 
                    numColumns={1}
                    // columnWrapperStyle={{ height: 120, marginBottom:6}}
                    renderItem={({ item }) => {
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
                            console.log('-')
                        )
                    }}
                />
            </View>
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
        backgroundColor: '#333549'
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