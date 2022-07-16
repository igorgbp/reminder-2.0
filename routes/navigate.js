import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
  


const Stack = createStackNavigator();
export default function Navigate(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Welcome'
                component = {Welcome}
                options= {{ headerShown: false}}
            />
        </Stack.Navigator>
    )
}