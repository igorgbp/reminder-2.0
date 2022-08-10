import React, { createContext, useState } from "react";
import firebase from '../firebase/config'
import { useNavigation } from '@react-navigation/native'

export const DatesContext = createContext({})

function DatesProvider({ children }) {

    const [pressedDay, setPressedDay] = useState()
    const [marksCalendar, setMarksCalendar] = useState()
    // let teste = []
    // const [teste, setTeste] = useState()
    const [pressedFormat, setPressedFormat] = useState('nada')


    // const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    // const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    // const workout = { key: 'workout', color: 'green' };


    const dayComparison = (day) => {


        // console.log('j  j   j   j   j   j   j   ')
        setPressedFormat(day.day + '/' + day.month + '/' + day.year)
        //    console.log(pressedFormat)

    }

    function markDayPressed(day) {
        setPressedDay({ [day.dateString]: { selected: true } })
        // let a = pressedDay

        // let c = [].concat(pressedDay, marksCalendar)

        // console.log
        // console.log('j  j   j   j   j   j   j   j   j   j')

        return (
            console.log('ok')
        )
    }

    function markCalendar() {

        return (
            // null

            setMarksCalendar({ ['2022-08-26']: {selected:true} })
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
        <DatesContext.Provider value={{  todayFormatDate, pressedFormat, markDayPressed, pressedDay, dayComparison, markCalendar, marksCalendar, setMarksCalendar }}>
            {children}
        </DatesContext.Provider>
    )
}
export default DatesProvider