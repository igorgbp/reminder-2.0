import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { View } from "react-native-animatable";
import DatesProvider from "../contexts/date";
import CalendarScreen from "../screens/tab_screens/calendar";
import ReminderScreen from "../screens/tab_screens/reminders";






export default function Tabs() {
    const Tab = createBottomTabNavigator()
    function LogoHeader() {
        return (
            <View  >
                <Image
                    source={require('../assets/erased_logo_reminder.png')}
                    style={{ width: 50, height: 50, tintColor: '#f2e9e4'}}
                />
            </View>


        )
    }
    return (

        <DatesProvider>
            <Tab.Navigator screenOptions={{
                headerTitle: () => <LogoHeader />,
                headerStyle: {
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    backgroundColor: '#22223b',
                    shadowColor: 'transparent',
                },
                tabBarActiveTintColor: 'green',
                tabBarStyle:{
                    backgroundColor:'#22223b',
                    borderTopWidth: 0,
                },
                headerLeft: false,
                
                
            }}>

                <Tab.Screen
                    name='Calendar'
                    component={CalendarScreen}
                    options={{}}
                />
                <Tab.Screen
                    name='Reminder'
                    component={ReminderScreen}
                    options= {{}}
                />

            </Tab.Navigator>
        </DatesProvider>



    )
}