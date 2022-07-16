import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigate from "./routes/navigate";

import AuthProvider from "./contexts/auth";


export default function Primeira() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigate />
      </AuthProvider>
    </NavigationContainer>

  )

}