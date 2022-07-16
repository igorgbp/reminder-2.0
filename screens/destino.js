import { View,Text } from "react-native"
import { useContext } from "react"
import { authContext } from "../contexts/auth"



const Destino = () =>{

   const {userId,name} = useContext(authContext)
    return (
        <View style = {{justifyContent:'center', alignItems: 'center', flex:1}}>
            <Text>
                açlskdjf
                {userId}
                {name}
            </Text>
        </View>
    )
}
export default Destino