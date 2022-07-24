import { createStackNavigator } from "@react-navigation/stack";
import Destino from "../screens/destino";
import Login from "../screens/login";
import NewReminder from "../screens/new_reminder";
import Signup from "../screens/signup";
import Welcome from "../screens/welcome";
import Tabs from "./tab";





const Stack = createStackNavigator();
export default function Navigate() {
    return (



            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen
                    name='Welcome'
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Signup'
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='New Reminder'
                    component={NewReminder}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Tabs'
                    component={Tabs}
                    options={{ headerShown: false, gestureEnabled: false}}
                />
                <Stack.Screen
                    name='Destino'
                    component={Destino}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>

    )
}