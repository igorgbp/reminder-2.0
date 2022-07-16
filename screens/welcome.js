import { View, Text, ImageBackground } from "react-native";
import Button1 from "../button components/buttot1";
import React from "react";

export default function Welcome(){
    return (
        <ImageBackground
            source={require('../assets/background_welcome.png')}
            resizeMode={'cover'}
            style= {{flex:1}}
        >
            <Button1 text= {'fodase'}/>


        </ImageBackground>
    )
}