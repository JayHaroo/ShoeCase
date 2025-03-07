import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Landing from './components/landing';
import "nativewind";
import './global.css';

export default function App() {
  return (
    <View className="flex-1 bg-black items-center">
      <Landing />
      <StatusBar style="light" />
    </View>
  );
}