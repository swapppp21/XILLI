import React, { useState, useEffect } from "react";
import { Text, View, FlatList, TouchableOpacity, Animated, PanResponder } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import ProfilePopup from "./profile";



const recommendations = [
  { id: 1, stock: "ASHOKA", buy: "₹248-251", stopLoss: "₹223", target: "₹273", growth: "+10%" },
  { id: 2, stock: "IOLCP", buy: "₹460-470", stopLoss: "₹350", target: "₹520", growth: "+19%" },
  { id: 3, stock: "GENESYS", buy: "₹775-786", stopLoss: "₹698", target: "₹852", growth: "+8.3%" },
  { id: 4, stock: "TCS", buy: "₹3200-3220", stopLoss: "₹3150", target: "₹3400", growth: "+6%" },
  { id: 5, stock: "INFY", buy: "₹1500-1520", stopLoss: "₹1450", target: "₹1600", growth: "+8%" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(new Animated.Value(0)); 

  useEffect(() => {
   
  }, []);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newValue = Math.min(Math.max(0, gestureState.dx), 200); 
      sliderValue.setValue(newValue);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 180) {
        
        router.push("/tradehistory");
      } else {
        Animated.spring(sliderValue, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const renderRecommendation = ({ item }) => (
    <LinearGradient className="pr-4 pl-3"
      colors={["rgba(196, 38, 255, 0.6)", "rgba(57, 31, 220, 0.6)"]}
      start={{ x: 0, y: 0 }} 
      end={{ x: 1, y: 0 }}   
      style={{
        borderRadius: 12,
        paddingVertical: 8,
        marginBottom: 16,
      }}
    >
    <View className="flex-row justify-between items-center">

    <View className="flex items-start" style={{ width: "30%" }}>
      <Text className="text-white text-2xl font-bold">{item.stock}</Text>
      <Text className="text-white mt-1 ">Buy</Text>
      <Text className="text-white font-bold">{item.buy}</Text>
    </View>

    <View className="flex items-center mt-8 pr-16"  >
      <Text className="text-white">Stop Loss</Text>
      <Text className="text-white font-bold">{item.stopLoss}</Text>
    </View>

    <View className="flex items-center" >
      <Text className="text-green-400 text-2xl font-bold">{item.growth}</Text>
      <Text className="text-white mt-1">Target</Text>
      <Text className="text-white font-bold">{item.target}</Text>
    </View>
  </View>
  </LinearGradient>
    )

  return (
    <View className="flex-1 pt-6 bg-[#C525FF]">
      <LinearGradient colors={["#C525FF", "#391EDC"]} className="px-4 py-4 rounded-xl">
        {/* Header */}
        <View className="flex-row justify-between items-center px-2">
          <ProfilePopup />
          <Text className="text-white text-4xl flex-1 text-center">XILLION</Text>
          <TouchableOpacity>
            <Feather name="bell" size={26} color="white" />
          </TouchableOpacity>
        </View>

        {/* Portfolio Section */}
        <View className="mt-6">
          <Text className="text-white text-center text-lg">Current Portfolio</Text>
          <View className="flex-row justify-center items-center">
            <Text className="text-white text-center text-3xl font-bold mt-1 ml-4">
              ₹12,78,653
              
            </Text>
            <TouchableOpacity className="pl-2">
                <Ionicons name="refresh-outline" size={25} color="white" />
              </TouchableOpacity>
          </View>
          <Text className="text-white text-center text-lg font-bold mt-1">Unused Funds </Text>
          <Text className="text-white text-center text-lg font-bold mt-1">₹1,18,261</Text>
        </View>

        
      
      </LinearGradient>

      <View className="bg-[#2e1065]">  
     
      <View className="absolute top-0 left-0 right-0 bottom-3/4 bg-[rgb(50,31,220)]" />
       <View className="absolute top-1/4 left-0 right-0 bottom-0 bg-[#2e1065]" />

      {/* Buttons */}
      <View className=" flex-row justify-center items-center">
        <TouchableOpacity className="bg-slate-900 px-6 py-3 mr-7 rounded-2xl flex-row items-center">
          <Feather name="download-cloud" size={20} color="white" />
          <Text className="text-white font-bold text-lg ml-2">Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-slate-900 px-8 py-3 rounded-2xl flex-row items-center">
          <Feather name="message-circle" size={20} color="white" />
          <Text className="text-white font-bold text-lg ml-2">Ask AI</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    



      <View className="flex-1 bg-violet-950" >
          {/* Recommendations Section   */}

        <Text className="text-white text-2xl font-bold text-center mt-3">Today's Recommendations</Text>
        <View className="bg-gray-500 rounded-3xl mt-2 p-4">
          <FlatList
            data={recommendations}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderRecommendation}
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            style={{ maxHeight: 300 }}
          />
          <Text className="text-white text-center">
            On executing this basket, buy orders along{"\n"} with stop loss and targets will be placed.
          </Text>
        </View>

        <View className="flex-row items-center bg-gray-400 rounded-full mx-6 mt-12 h-20 overflow-hidden">
      {/* Text */}
      <Animated.Text
        style={{
          opacity: sliderValue.interpolate({
            inputRange: [0, 80], // Text fades as slider reaches 80px
            outputRange: [1, 0], // Fully visible to invisible
            extrapolate: "clamp",
          }),
        }}
        className="absolute w-full text-center text-black font-bold text-lg"
      >
        EXECUTE
      </Animated.Text>

      {/* Slider Button */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          {
            transform: [{ translateX: sliderValue }],
          },
        ]}
        className="h-20 w-20 rounded-full bg-white flex items-center justify-center border-2 border-blue-500"
      >
        <Ionicons name="flash-outline" size={36} color="#391EDC" />
      </Animated.View>
    </View>

      
      
      </View>

    

      
    </View>
  );
}