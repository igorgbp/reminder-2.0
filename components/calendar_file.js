import { Calendar } from "react-native-calendars"
import React, { useEffect } from "react"
import { useContext } from "react"
import { DatesContext } from "../contexts/date"
import { authContext } from "../contexts/auth"

function CalendarComponent() {
    const { info } = useContext(authContext)
    const { marksCalendar, todayFormatDate, markDayPressed, dayComparison, } = useContext(DatesContext)
    console.log('------------------------------------------------------')
    console.log(info)
    console.log('------------------------------------------------------')
    
    return (

        <Calendar
            initialDate={todayFormatDate()}
            onDayPress={day => { markDayPressed(day); dayComparison(day) }}
            markedDates={marksCalendar}
            markingType={'multi-dot'}
            monthFormat={'MMMM'}
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
export default CalendarComponent