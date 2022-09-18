import React, { createContext, useContext,  useState, } from "react";
import { authContext } from "./auth";
import { memo } from "react";


export const DatesContext = createContext({})

function DatesProvider({ children }) {
    
    const { info} = useContext(authContext)

    let marcados = {}
    const [marksCalendar, setMarksCalendar] = useState()
    const [pressedFormat, setPressedFormat] = useState('')
    const dot = { key: 'vacation', color: '#eab', selectedDotColor: 'blue' };


    const dayComparison = (day) => {
        setPressedFormat(day.day + '/' + day.month + '/' + day.year)
    }


    function markDayPressed(day) {
        markCalendar()
        console.log('-0-0-0-0-0--0-0-0--0-0--0-')
        console.log(day)
        console.log('-0-0-0-0-0--0-0-0--0-0--0-')
        
        marcados[day.dateString] = {selected:true}
       setMarksCalendar(marcados)

        return (
            null
        )
    }

    function markCalendar() {

        if (info != undefined) {


            info.map((item) => {
                let dateString
                if (item.date != undefined) {
                    let dateDocument = new Date(item.date.seconds * 1000)
                    let month
                    let dayItem

                    (dateDocument.getMonth() + 1) < 10 ? month = '0' + (dateDocument.getMonth() + 1) : (dateDocument.getMonth() + 1)
                    dateDocument.getDate()<10? dayItem = '0' + dateDocument.getDate() : dayItem = dateDocument.getDate()
                    // if (dateDocument.getDate() < 10) dayItem = '0' + dateDocument.getDate(); else dateDocument.getDate()
                    dateString = dateDocument.getFullYear() + '-' + month + '-' + dayItem
                    if (dateString!=undefined)marcados[dateString]={marked:true, dots:[dot]}


                    // console.log(marcados)
                    setMarksCalendar(marcados)
                    return (
                        null
                    )
                }
            })
        } else console.log('info ta indefinido')
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
        <DatesContext.Provider value={{ todayFormatDate, pressedFormat, markDayPressed, dayComparison, markCalendar, marksCalendar, setMarksCalendar }}>
            {children}
        </DatesContext.Provider>
    )
}
export default memo(DatesProvider)