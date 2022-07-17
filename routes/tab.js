import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DatesProvider from "../contexts/date";
import CalendarScreen from "../screens/tab_screens/calendar";
import ReminderScreen from "../screens/tab_screens/reminders";

const Tab = createBottomTabNavigator()


export default function Tabs () {
    return (

            <DatesProvider>
            <Tab.Navigator>
            <Tab.Screen
                name='Calendar'
                component={CalendarScreen}
            />
            <Tab.Screen
                name='Reminder'
                component={ReminderScreen}
            />

        </Tab.Navigator>
        </DatesProvider>

        
        
    )
}