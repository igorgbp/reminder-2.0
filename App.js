import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigate from "./routes/navigate";
import AuthProvider from "./contexts/auth";
import 'react-native-gesture-handler'

export default function App() {
  console.log('app.js executa')
  return (

    
      <NavigationContainer>
        <AuthProvider>
          <Navigate />
        </AuthProvider>
      </NavigationContainer>
  )

}