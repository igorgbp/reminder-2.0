import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Modal, StatusBar, Text, TouchableOpacity } from "react-native";
import { View } from "react-native-animatable";
import DatesProvider, { DatesContext } from "../contexts/date";
import CalendarScreen from "../screens/tab_screens/calendar";
import ReminderScreen from "../screens/tab_screens/reminders";
import Icon from 'react-native-vector-icons/FontAwesome5';


import { LogBox } from 'react-native';
import { useContext, useEffect } from "react";
import { authContext } from "../contexts/auth";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications



export default function Tabs() {
    console.log('tab.js executa')
    const Tab = createBottomTabNavigator()
    const { info, setOptionsVisible,  findContent, seeDone, setSeeDone, setInfoVisible } = useContext(authContext)
    const {markDayPressed} = useContext(DatesContext)

    useEffect(() => {
        findContent()
        // markDaypressed()

    }, [])

 


    function LogoHeader() {
        return (
            <TouchableOpacity onPress={()=> setInfoVisible(true)}>
                <Image
                    source={require('../assets/logo_png_100x100.png')}
                    style={{ width: 65, height: 50, tintColor: '#f2e9e4' }}
                />

            </TouchableOpacity>


        )
    }

    function Concluded() {
        return (
            <TouchableOpacity style={{ alignSelf: "center" }} onPress={() => { setSeeDone(!seeDone) }}>
                <Text>
                    {seeDone ?
                        <Icon name="check-circle" size={40} color="#f2e9e4" solid />
                        :
                        <Icon name="check-circle" size={40} color="#f2e9e4" />
                    }
                </Text>

            </TouchableOpacity>
        )
    }

    function Settings() {
        return (
            <TouchableOpacity style={{ alignSelf: "center", }} onPress={() => setOptionsVisible(true)}>
                <Text>
                    <Icon name="user-astronaut" size={40} color="#f2e9e4" />;
                </Text>

            </TouchableOpacity>
        )
    }

    return (

        <DatesProvider>
            <StatusBar barStyle={'light-content'} backgroundColor= {'#22223b'}/>
            <Tab.Navigator screenOptions={({ route }) => ({

                headerTitle: () => <LogoHeader />,
                headerTitleAlign: 'center',
                headerStyle: {
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    backgroundColor: '#22223b',
                    shadowColor: 'transparent',
                    // borderWidth: 2, 
                    // borderColor: 'blue'
                },
                

                headerLeft: () => <Concluded />,
                headerRight: () => <Settings />,
               
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#22223b',
                    borderTopWidth: 0, 
                    // height: '10%'
                },
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Calendar':
                            iconName = 'calendar-alt';
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