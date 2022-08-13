import React, { createContext, useContext,  useState } from "react";
import { authContext } from "./auth";

export const DatesContext = createContext({})


function DatesProvider({ children }) {
console.log('date.js executa')

    const { info } = useContext(authContext)

    let marcados = {}
    const [marksCalendar, setMarksCalendar] = useState()

    const [pressedFormat, setPressedFormat] = useState('nada')


    const vacation = { key: 'vacation', color: 'red', selectedDotColor: 'blue' };
    const massage = { key: 'massage', color: 'blue', selectedDotColor: 'blue' };
    const workout = { key: 'workout', color: 'green' };


    const dayComparison = (day) => {
        setPressedFormat(day.day + '/' + day.month + '/' + day.year)
    }


    function markDayPressed(day) {
        console.log('markDayPressed executa')
        markCalendar()
        marcados[day.dateString] = {selected:true}
        // setPressedDay({ [day.dateString]: { selected: true } })
       
       setMarksCalendar(marcados)
        // let a = pressedDay


        // let c = [].concat(pressedDay, marksCalendar)

        // console.log
        // console.log('j  j   j   j   j   j   j   j   j   j')

        return (
            console.log('markDayPressed sendo executado')
        )
    }

    function markCalendar() {

        console.log('markCalendar sendo executado')
        if (info != undefined) {


            info.map((item) => {
                let dateString
                if (item.date != undefined) {
                    let dateDocument = new Date(item.date.seconds * 1000)
                    let month
                    let dayItem
                    // console.log(dateDocument.getDate())
                    // if ((dateDocument.getMonth() + 1)<10) month = '0'+(dateDocument.getMonth() + 1)<10; else (dateDocument.getMonth() + 1)<10
                    (dateDocument.getMonth() + 1) < 10 ? month = '0' + (dateDocument.getMonth() + 1) : (dateDocument.getMonth() + 1)
                    if (dateDocument.getDate() < 10) dayItem = '0' + dateDocument.getDate(); else dateDocument.getDate()
                    // console.log(dayItem)
                    dateString = dateDocument.getFullYear() + '-' + month + '-' + dateDocument.getDate()
                    // setMarksCalendar({ [dateString]: { selected: true } })

                    // if (dateString!=undefined)marcados = [].concat(pressedDay, {[dateString]: { selected: true }})

                    if (dateString!=undefined)marcados[dateString]={marked:true, dots:[vacation]}


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
export default DatesProvider