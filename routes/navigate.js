import { createStackNavigator } from "@react-navigation/stack";
import Destino from "../screens/destino";
import Login from "../screens/login";
import Welcome from "../screens/welcome";
  


const Stack = createStackNavigator();
export default function Navigate(){
    return(
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
                name='Welcome'
                component = {Welcome}
                options= {{ headerShown: false}}
            />
            <Stack.Screen
                name='Login'
                component = {Login}
                options= {{ headerShown: false}}
            />
            <Stack.Screen
                name='Destino'
                component = {Destino}
                options= {{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}