import React from "react";
import { StyleSheet, View, StatusBar, Text, Image } from "react-native";


export default function Info(){
    return (
        <View style={styles.avoidingview}>

            <StatusBar barStyle='light-content' backgroundColor={'#2a2a2a'} />
            <Text style = {styles.madeBy}>made by</Text>
            <View style={styles.view}>
                <Image
                    source = {require('../assets/igorPicf.jpg')}
                    resizeMode = {'cover'}
                    style = {styles.igorPic}
                />
                <View style = {styles.infoTextContainer}>
                    <Text style= {styles.infoTitleText}> Igor Pereira  </Text>   
                    <Text numberOfLines={2} style= {styles.infoText}> IFMG - São   </Text>   
                    <Text style= {styles.infoText}> João Evangelista </Text>   

                   
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        // justifyContent: 'space-evenly',
        paddingLeft: '2%', 
        paddingVertical: '2%',
        borderRadius: 20,
        width: '100%',
        flexDirection: 'row', 
        backgroundColor: '#22223b',
        // alignItems: 'stretch',
        // borderWidth:2, 
        // borderColor:'blue'
    },
    avoidingview: {

        paddingHorizontal: '5%',
        // paddingBottom: 0,
        alignSelf: 'center',
        paddingVertical: '1%',
        borderRadius: 20,
        width: '90%',
        justifyContent: 'center',
        // height: 20,
        backgroundColor: '#3F425A',
        alignItems: 'center',
        // borderWidth: 2, 
        // borderColor: 'blue'
    },
    madeBy:{
        color:'#AAA', 
        // marginBottom: '1%'
        paddingVertical:'4%'
    }, 
    igorPic:{
        width: 90, 
        height: 90, 
        borderRadius: 20,
        borderWidth: 2, 
        borderColor: '#FFF', 
    },
    infoTextContainer:{
        // borderWidth: 2, 
        // borderColor: 'blue', 
        paddingLeft: '4%',
        justifyContent: 'space-between'
    }, 
    infoTitleText:{
        fontSize: 20, 
        color:'#FFF'
    }, 
    infoText:{
        fontSize: 16, 
        color:'#FFF',
        // flexWrap:'wrap'
    }
})