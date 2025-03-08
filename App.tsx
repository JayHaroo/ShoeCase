import { Text, View } from "react-native";
import Landing from "./components/landing";
import ShoePage from "./components/shoePage";

import "nativewind";
import "./global.css";

import { useFonts } from "expo-font";
import { Inter_400Regular } from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null; // or a loading screen
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="ShoePage" component={ShoePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
