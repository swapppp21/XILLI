import React, { useState } from "react";
import { Text, View, TouchableOpacity, Modal, Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfilePopup() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="person-circle-outline" size={34} color="white" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }}>
          <LinearGradient
            colors={["#391EDC", "#C426FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="w-3/4 h-full p-6 shadow-xl"
            style={{
              transform: [{ translateX: modalVisible ? 0 : -300 }],
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {/* Close Button */}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              className="absolute top-5 right-5 z-10"
            >
              <Ionicons name="close-circle" size={30} color="white" />
            </TouchableOpacity>

            {/* Profile Image */}
            <View className="h-40 w-40 rounded-full overflow-hidden bg-gray-200 mb-10">
              <Image
                source={require("../assets/images/employee.png")}
                className="h-full w-full"
                resizeMode="cover"
              />
            </View>

            {/* Profile Info */}
            <View className="flex-1">
              <View className="flex-row items-center mb-4">
                <Ionicons name="person-outline" size={25} color="white" />
                <Text className="text-base text-white ml-2">Swapnil Kirloskar</Text>
              </View>

              <View className="flex-row items-center mb-4">
                <Ionicons name="mail-outline" size={25} color="white" />
                <Text className="text-base text-white ml-2">
                  swapnilkirloskar2107@gmail.com
                </Text>
              </View>

              <View className="flex-row items-center mb-4">
                <Ionicons name="call-outline" size={25} color="white" />
                <Text className="text-base text-white ml-2">7385156410</Text>
              </View>
            </View>

            {/* Investment Solutions Section */}
            <View className="mb-2">
              <LinearGradient
                colors={["#f7f7f7", "#e0e0e0"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                className="p-5 rounded-xl"
                style={{
                  borderRadius: 15,
                  overflow: "hidden",
                }}
              >
                <Text className="text-lg font-bold text-center text-gray-800 mb-2">
                  Investment Solutions
                </Text>
                <View className="space-y-2">
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="checkmark-circle-outline" size={18} color="#391EDC" />
                    <Text className="text-base text-gray-600 ml-2">
                      Multiple Broker Integrations
                    </Text>
                  </View>
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="checkmark-circle-outline" size={18} color="#391EDC" />
                    <Text className="text-base text-gray-600 ml-2">
                      One-Click Order Execution
                    </Text>
                  </View>
                  <View className="flex-row items-center mb-2">
                    <Ionicons name="checkmark-circle-outline" size={18} color="#391EDC" />
                    <Text className="text-base text-gray-600 ml-2">
                      Tailored Investment Solutions
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </View>
          </LinearGradient>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
