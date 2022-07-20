import React, { createContext, useState } from "react";
import firebase from '../firebase/config'
import { useNavigation } from '@react-navigation/native'

export const DatesContext = createContext({})

function DatesProvider({ children }) {
    
    const [pressedDay, setPressedDay] = useState()

    
    
    
    function markDayPressed(day) {
        return (    
            setPressedDay({ [day.dateString] : {selected:true} })  
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
        <DatesContext.Provider value={{ todayFormatDate, markDayPressed, pressedDay }}>
            {children}
        </DatesContext.Provider>
    )
}
export default DatesProvider