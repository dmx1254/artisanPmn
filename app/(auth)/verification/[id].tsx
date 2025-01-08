import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const VerficationCode = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <Text>VerficationCode - {id}</Text>
    </SafeAreaView>
  );
};

export default VerficationCode;
