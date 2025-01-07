import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import Swip from "./swiper/Swip";

const StartUp = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar backgroundColor="#000" hidden={false} />

      <TouchableOpacity
        className="flex items-end justify-end py-2 px-6"
        activeOpacity={0.5}
      >
        <Text className="text-dark font-rubik-light text-2xl">Passer</Text>
      </TouchableOpacity>
      <Swip />
    </SafeAreaView>
  );
};

export default StartUp;
