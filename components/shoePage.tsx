import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function ShoePage() {
  const navigation = useNavigation();

  return (
    <>
      <View className="flex-1 bg-[#121212] items-center w-[100%]">
        {/* This part will contain the top navigation bar of the app */}
        <View className="justify-center items-center flex flex-row justify-between w-[90%]">
          <Text className="text-white mt-10 text-2xl font-inter font-bold">Details</Text>
          <Pressable
            className="mt-10 p-2 rounded-2xl w-[120px] items-center border-2 border-white"
            onPress={() => navigation.navigate("Landing")}
          >
            <Text className="text-white font-inter">Back</Text>
          </Pressable>
        </View>

        {/* This part will contain the image holder */}
        <View className="mt-10 w-[90%] h-[300px] bg-white rounded-2xl">
            <Image
              source={require("../assets/samples/aja1.jpg")} 
              className="w-[100%] h-[100%] object-contain"/>
        </View>

        {/* This part will contain the shoe header details */}
        <View className="mt-3 w-[85%] flex flex-row justify-between align-middle items-center">
          <Text className="text-white text-3xl font-inter font-bold">A`Ja One</Text>
          <Image
            source={require("../assets/icons/nike.png")} 
            className="object-fill w-[70px] h-[60px]"/>
          <Text className="text-white text-2xl font-inter">Nike</Text>
        </View>
      </View>
    </>
  );
}
