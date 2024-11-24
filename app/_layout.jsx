import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { View } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <View className="flex-1 ">
      {/* Hides the Status Bar */}s
      <StatusBar  hidden />
      <Slot />
    </View>
  );
}
