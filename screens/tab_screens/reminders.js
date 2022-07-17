import {  View, StyleSheet, FlatList, Text } from "react-native";
import React, {useEffect,  useContext} from "react";
import { authContext } from "../../contexts/auth";

export default function ReminderScreen() {


    
    const { info, userId ,findContent} = useContext(authContext)
    useEffect(()=>{
        findContent()
    },[])

    return (
        <View style={styles.background}>
            <Text>
                asdf
                {userId}
            </Text>
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