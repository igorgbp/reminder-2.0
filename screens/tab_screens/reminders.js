import {  View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import React, {useEffect,  useContext} from "react";
import { authContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function ReminderScreen() {


    
    const { info, userId ,findContent} = useContext(authContext)
    const navigation = useNavigation()

    useEffect(()=>{
        findContent()
    },[])

    return (
        <View style={styles.background}>
            <Text>
                asdf
                {userId}
            </Text>


            <TouchableOpacity 
            style = {{width: '40%',width: '40%', borderWidth: 2, borderColor: 'blue'}}
            onPress= {()=>navigation.navigate('New Reminder')}
            >
                <Text>
                    +
                </Text>
            </TouchableOpacity>


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