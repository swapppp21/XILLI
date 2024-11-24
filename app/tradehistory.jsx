import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from "react-native-chart-kit";

export default function TradeHistoryScreen() {
  const navigation = useNavigation();
  const [expandedId, setExpandedId] = useState(null); // Track expanded card
  const rotation = useState(new Animated.Value(0))[0]; // Initialize rotation animation

  const trades = [
    { id: "1", name: "TATAPOWER", invested: 30247.55, qty: 100, buyPrice: 100, status: "ONGOING", change: "+3.8%", profit: 4000 },
    { id: "2", name: "ZENTEC", invested: 30247.55, qty: 100, buyPrice: 100, status: "ONGOING", change: "+3.8%", profit: 4000 },
    { id: "3", name: "JIOFIN", invested: 30247.55, qty: 100, buyPrice: 100, status: "", change: "+3.8%", profit: 4000 },
    { id: "4", name: "TRENT", invested: 30247.55, qty: 100, buyPrice: 100, status: "", change: "+3.8%", profit: 4000 },
    { id: "5", name: "GOLDBEES", invested: 30247.55, qty: 100, buyPrice: 100, status: "ONGOING", change: "+3.8%", profit: 4000 },
    { id: "6", name: "TATASTEEL", invested: 30247.55, qty: 100, buyPrice: 100, status: "ONGOING", change: "+3.8%", profit: 4000 },
  ];

  const totalProfit = trades.reduce((sum, trade) => sum + trade.profit, 0);

  // Start rotation animation
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [rotation]);

  const toggleExpand = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id));
  };

 

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => toggleExpand(item.id)}
        className="bg-[#2d2744] rounded-2xl p-4 mb-4 shadow-lg shadow-black"
      >
        {/* Top Section */}
        <View className="flex-row justify-start items-center">
        <Text className="text-white text-lg font-semibold">{item.name}</Text>
        {item.status && (
          <View className="bg-green-600  px-2 rounded-full ml-4">
            <Text className="text-white text-sm font-normal">{item.status}</Text>
          </View>
        )}
        <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row',}}>
          <Text className="  text-green-400 text-lg font-bold ">{item.change}</Text>
        </View>
      
      </View>
      

        {/* Middle Section */}
        <View className="mt-2">
          <Text className="text-gray-300 text-sm">Buy Price ₹{item.buyPrice.toFixed(2)}</Text>
          <Text className="text-gray-300 text-sm mt-1">
              Qty {item.qty}
          </Text>
        </View>

        {/* Bottom Section */}

         <View className="flex-row justify-between items-center mt-1">
  <Text className="text-gray-200 font-bold text-base">Invested: ₹{item.invested.toFixed(2)}</Text>
  <Text className="text-green-400 text-lg font-bold"> ₹{item.profit}</Text>
 </View>
        
       

      </TouchableOpacity>

      {expandedId === item.id && item.profit > 0 && (
        <View className="bg-[#302b4e] rounded-2xl mt-2 mb-6 p-4">
          <Text className="text-white text-lg mb-2">Performance Graph</Text>
          <LineChart
            data={{
              labels: ["1D", "1W", "1M", "3M", "1Y"],
              datasets: [
                {
                  data: [100, 120, 150, 170, 200],
                },
              ],
            }}
            width={300}
            height={200}
            chartConfig={{
              backgroundGradientFrom: "#302b4e",
              backgroundGradientTo: "#2d2744",
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            style={{
              borderRadius: 8,
            }}
          />
        </View>
      )}
    </View>
  );

  return (
    <View className="flex-1 pt-12 bg-[#241e33] px-6">
    <View className="flex-row items-center mb-8">
    <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
      <Ionicons name="chevron-back" size={30} color="#fff" />
    </TouchableOpacity>
    <Text className="text-white text-3xl font-bold ">Trade History</Text>
  </View>
  

      {/* Trade List */}
      <FlatList
        data={trades}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Total Profit Section */}
      <View className="mt-4 p-6 mb-4 bg-[#302b4e] rounded-2xl shadow-lg flex-row justify-between items-center relative">
      <View>
        <Text className="text-white text-lg">Total Profit</Text>
      </View>
    
      <View>
        <Text className="text-green-400 text-2xl font-semibold">₹{totalProfit}</Text>
      </View>
    </View>
    
    
    </View>
  );
}