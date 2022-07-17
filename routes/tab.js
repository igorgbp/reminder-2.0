import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dates from "../screens/tab_screens/calendar";
import Reminders from "../screens/tab_screens/reminders";

const Tab = createBottomTabNavigator()


export default function Tabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='calendar'
                component={Dates}
            />
            <Tab.Screen
                name='Reminder'
                component={Reminders}
            />

        </Tab.Navigator>
    )
}