import React, { useRef } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

export default function StartScreen() {
  const router = useRouter();
  const videoRef = useRef(null);

  return (
    
    <View className="flex-1 relative">
      {/* Background Video */}
      <Video
        ref={videoRef}
        source={require("../assets/Video/Investment.mp4")} 
        resizeMode="cover"
        shouldPlay
        isLooping
        muted={false} 
        className="absolute inset-0 w-full h-full" 
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <View className="flex-1 justify-center items-center text-center">
      <Text className="text-white text-5xl font-bold mb-2 ml-3">XILLION</Text>
      <Text className="text-white text-2xl font-medium mb-16 ml-3">Swipe. Invest. Compound</Text>
    </View>
      {/* Gradient Overlay */}
      <LinearGradient
        colors={["rgba(196, 38, 255, 0.6)", "rgba(57, 31, 220, 0.8)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="absolute inset-0"
      />

      <View className="flex-1 justify-center items-center px-6 z-10">
      <LinearGradient
        colors={["#C426FF", "#391FDC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} 
        style={{
          paddingHorizontal: 44,
          paddingVertical: 16,
          borderRadius: 30,  
          shadowColor: "#000",  
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          marginTop: 90,
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/home")}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 30,  // Apply the same border radius for the button
          }}
        >
          <Text className="text-white font-semibold text-xl">Get Started</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
    </View>
  );
}
