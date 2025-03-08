import { View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function ShoePage() {

    const navigation = useNavigation();

    return (
        <>
        <View className="flex-1 bg-[#121212] items-center w-[100%]">
            <View className="justify-center items-center flex flex-row justify-between w-[90%]">
                <Text className="text-white mt-10 text-2xl font-inter">Details</Text>
                <Pressable className="mt-10 p-2 rounded-2xl w-[120px] items-center border-2 border-white"
                    onPress={() => navigation.navigate("Landing")}> 
                    <Text className="text-white font-inter">Back</Text>
                </Pressable>
            </View>
        </View>
        </>
    )
}