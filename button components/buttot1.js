import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button1(props) {
    return (
        <TouchableOpacity style= {styles.igor}>
            <Text>
                {props.text}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    igor: {
        width: 5, 
        borderWidth: 2, 
        borderColor: 'red'
        
    }
}

)