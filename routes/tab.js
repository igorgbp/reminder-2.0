import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Modal, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import DatesProvider from "../contexts/date";
import CalendarScreen from "../screens/tab_screens/calendar";
import ReminderScreen from "../screens/tab_screens/reminders";
import Icon from 'react-native-vector-icons/FontAwesome5';


import { LogBox } from 'react-native';
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/auth";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



export default function Tabs() {
    const Tab = createBottomTabNavigator()
    const { setOptionsVisible, findContent } = useContext(authContext)


    useEffect(() => {
        findContent()

    }, [])

    function LogoHeader() {
        return (
            <View  >
                <Image
                    source={require('../assets/logo_png_100x100.png')}
                    style={{ width: 70, height: 50, tintColor: '#f2e9e4' }}
                />

            </View>


        )
    }

    function Settings() {
        return (
            <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => setOptionsVisible(true)}>
                <Text>
                    <Icon name="user-astronaut" size={40} color="#f2e9e4" />;
                </Text>

            </TouchableOpacity>
        )
    }

    return (

        <DatesProvider>
            <Tab.Navigator screenOptions={({ route }) => ({

                headerTitle: () => <LogoHeader />,
                headerStyle: {
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    backgroundColor: '#22223b',
                    shadowColor: 'transparent',
                },
                headerLeft: false,
                headerRight: () => <Settings />,




                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#22223b',
                    borderTopWidth: 0
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Calendar':
                            iconName = 'calendar-day';
                            break;
                        case 'Reminder':
                            iconName = 'tasks';
                            break;

                    }

                    return <Icon name={iconName} size={40} color={color} />;
                },




            })}
                tabBarOptions={{
                    activeTintColor: '#f2e9e4',
                    inactiveTintColor: '#4a4e69',
                }}
            >

                <Tab.Screen
                    name='Calendar'
                    component={CalendarScreen}
                    options={{


                    }}
                />
                <Tab.Screen
                    name='Reminder'
                    component={ReminderScreen}
                    options={{

                    }}
                />

            </Tab.Navigator>
        </DatesProvider>
    )
}