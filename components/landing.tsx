import "nativewind";
import { View, Text, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-[#121212] items-center w-[100%]">
      <Text className="text-white text-5xl mt-[3rem] font-inter">ShoeCase</Text>

      <View className="justify-center items-center">
        <Text className="text-white mt-10 text-2xl font-inter">Welcome to ShoeCase</Text>
        <Text className="text-white mt-2">The best place to find your next pair of shoes</Text>
      </View>

      <View>
        <Pressable className="mt-10 p-3 rounded-2xl w-[120px] items-center border-2 border-white"
          onPress={() => navigation.navigate("ShoePage")}>
          <Text className="text-white font-inter">Get Started</Text>
        </Pressable>
      </View> 
      <StatusBar style="light" />
    </View>
  )
}