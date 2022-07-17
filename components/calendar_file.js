import { Calendar } from "react-native-calendars"
import React from "react"
import { useContext } from "react"
import { DatesContext } from "../contexts/date"

export default function CalendarComponent() {
    const {todayFormatDate, markDayPressed,pressedDay} = useContext(DatesContext)
    // console.log(dia)
    // console.log(todayFormatDate())


    return (

            <Calendar
                initialDate={todayFormatDate()}
                minDate={todayFormatDate()}
                // maxDate=
                onDayPress={
                    day => {
                        markDayPressed(day)


                    }}
                markedDates={pressedDay}
                markingType={'multi-dot'}

                monthFormat={'MMMM'}
                theme={
                    {

                        'stylesheet.calendar.header': {
                            dayHeader: {
                                marginTop: 2,
                                marginBottom: 7,
                                width: 30,
                                textAlign: 'center',
                                fontSize: 12,
                                color: '#B8A7A7',
                                // borderWidth: 2, 
                            },
                            week: {
                                marginTop: 7,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                paddingHorizontal: 15,
                                // borderWidth:2, 
                                // borderColor:'blue'
                            },
                        },
                        'stylesheet.calendar.main':
                        {
                            monthView: {
                                // backgroundColor:'purple',
                                // borderWidth: 2, 
                                // borderColor: 'blue', 
                                // height: 100
                                // height: 50
                            },
                            week: {
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                height: 38,
                                // backgroundColor: 'red',
                                // margin: 1,

                                // borderBottomWidth: 1,
                                // borderBottomColor: colors.grey30,
                            },
                        },



                        calendarBackground: '#2a2a2a',
                        // width: '50%',

                        todayTextColor: '#F59CA5',

                        //nao sei onde aparece
                        // selectedDayBackgroundColor: '#d6bfbe',
                        // selectedDayTextColor: '#2a2a2a',
                        // selectedDotColor: 'green',
                        selectedDayBackgroundColor: '#f13',
                        selectedDayTextColor: '#E1CFCF',



                        dayTextColor: '#d6bfbe',
                        textDayHeaderFontSize: 13,
                        'stylesheet.day.basic': {
                            text: {
                                marginTop: 4, // specify the margin you want
                                color: '#B8A7A7',
                                fontSize: 18
                            },
                        },

                        textDisabledColor: '#696161',

                        // dotColor: 'red',

                        monthTextColor: '#d6bfbe',
                        // todayBackgroundColor: '#313131',



                        arrowColor: '#E2D3D3',
                        textDayStyle: {
                            fontSize: 20,
                            alignSelf: 'center'
                        }


                    }
                }
                hideExtraDays={true}
            />

    )
}