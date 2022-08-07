import React, { createContext, useState } from "react";
import firebase from '../firebase/config'
import { useNavigation } from '@react-navigation/native'

export const DatesContext = createContext({})

function DatesProvider({ children }) {
    
    const [pressedDay, setPressedDay] = useState()

    const [pressedFormat, setPressedFormat] = useState('nada')
    const  dayComparison=(day)=>{


        // console.log('j  j   j   j   j   j   j   ')
            setPressedFormat(day.day + '/' + day.month + '/' + day.year)
        //    console.log(pressedFormat)
        
    }
    
    function markDayPressed(day) {
        return (    
            setPressedDay({ [day.dateString] : {selected:true} }) 
            // console.log(day.dateString) 
            )   
    }
    
    function markCalendar(){
        return (
            setPressedDay({['2022-08-26']:{selected:true}})
        )
        
    }

    function todayFormatDate() {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }


    return (
        <DatesContext.Provider value={{ todayFormatDate, pressedFormat, markDayPressed, pressedDay, dayComparison, markCalendar }}>
            {children}
        </DatesContext.Provider>
    )
}
export default DatesProvider