import { Calendar } from "react-native-calendars"
import React, { useEffect } from "react"
import { useContext } from "react"
import { DatesContext } from "../contexts/date"
import { View } from "react-native"

export default  function CalendarComponent() {
    console.log('calendar_file.js executa')

    const { marksCalendar, todayFormatDate, markDayPressed, pressedDay,dayComparison, markCalendar, } = useContext(DatesContext)

    useEffect(()=>{
        console.log('useeffect')
        // markCalendar()
        
    },[])
    // let b = marcados
    console.log('aa ss  ss  ss  ss  ')
    console.log(marksCalendar)
    // console.log(markCalendar())
    // console.log('j  j   j   j   j   j   j   j   j   j   j')
    // console.log(pressedDay)
    // console.log(marksCalendar)
    // let returnedTarget = Object.assign(pressedDay, marksCalendar)
    // console.log(returnedTarget)
    return (



        
        <Calendar
            initialDate={todayFormatDate()}
            minDate={todayFormatDate()}
            onDayPress={day => { markDayPressed(day); dayComparison(day)}}
            // markedDates={pressedDay}
            markedDates= {marksCalendar}
            markingType={'multi-dot'}
            monthFormat={'MMMM'}
            // style= {{borderWidth: 2, height: '75%',
            // borderColor: 'yellow'}}
            theme={{
                
                'stylesheet.calendar.header': {
                    dayHeader: {
                        // marginTop: 0,
                        marginBottom: 10,
                        textAlign: 'center',
                        fontSize: 11,
                        color: '#f2e9e4',
                    },
                    week: {
                        // marginTop: 7,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }
                },

                'stylesheet.calendar.main':
                {
                    monthView: {    
                    },
                    week: {
                        flexDirection: 'row',

                    },

                },


                calendarBackground: 'transparent',
                todayTextColor: '#B48CDF',
                selectedDayBackgroundColor: '#B48CDF',
                selectedDayTextColor: '#22223b',
                textDayHeaderFontSize: 14,
                'stylesheet.day.basic': {
                    text: {
                        marginTop: 4,
                        color: '#f2e9e4',
                        fontSize: 18,
                        // borderWidth:2,
                        // padding:5

                    },
                    
                },
                textDisabledColor: '#766973',
                monthTextColor: '#f2e9e4',
                arrowColor: '#f2e9e4',
            }}
            hideExtraDays={true}
        />


    )
}   