import "nativewind";
import { View, Text, Pressable } from "react-native";

export default function Landing() {
  return (
    <View className="flex-1 bg-[#2D2D2D] items-center w-[100%]">
      <Text className="text-white text-5xl mt-10">ShoeCase</Text>

      <View className="justify-center items-center">
        <Text className="text-white mt-10 text-2xl">Welcome to ShoeCase</Text>
        <Text className="text-white mt-2">The best place to find your next pair of shoes</Text>
      </View>

      <View>
        <Pressable className="mt-10 p-3 rounded-lg w-[120px] items-center border-2 border-white">
          <Text className="text-white">Get Started</Text>
        </Pressable>
      </View> 
    </View>
  )
}