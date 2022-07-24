import { Calendar } from "react-native-calendars"
import React from "react"
import { useContext } from "react"
import { DatesContext } from "../contexts/date"
import { View } from "react-native"

export default function CalendarComponent() {
    const { todayFormatDate, markDayPressed, pressedDay } = useContext(DatesContext)


    return (



        
        <Calendar
            initialDate={todayFormatDate()}
            minDate={todayFormatDate()}
            onDayPress={day => { markDayPressed(day) }}
            markedDates={pressedDay}
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
                        color: '#B8A7A7',
                    },
                    week: {
                        marginTop: 7,
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
                todayTextColor: '#F59CA5',
                selectedDayBackgroundColor: '#F59CA5',
                selectedDayTextColor: '#2a2a2a',
                textDayHeaderFontSize: 14,
                'stylesheet.day.basic': {
                    text: {
                        marginTop: 4,
                        color: '#B8A7A7',
                        fontSize: 18,
                        // borderWidth:2,
                        // padding:5

                    },
                    
                },
                textDisabledColor: '#696161',
                monthTextColor: '#d6bfbe',
                arrowColor: '#E2D3D3',
            }}
            hideExtraDays={true}
        />


    )
}