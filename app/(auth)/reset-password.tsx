import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import regEmails from "../lib/utils";

const ResetPasseword = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handSendEmailCode = () => {
    router.push({
      pathname: "/verification/[id]",
      params: { id: email },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <SafeAreaView
        className="flex-1 bg-white"
        style={{
          backgroundColor: "#f1f1ef",
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 20,
            paddingHorizontal: 20,
            backgroundColor: "#f1f1ef",
          }}
        >
          <View className="flex items-start justify-start">
            <TouchableOpacity
              activeOpacity={0.5}
              className="left-0 rounded-full p-2"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back-circle" size={46} color="#28A745" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 items-center justify-center">
            <View className="w-full items-center justify-center">
              <Image
                source={require("@/assets/images/reset-pass.png")}
                resizeMode="cover"
                className="w-80 h-64"
              />
            </View>

            <Text className="text-3xl font-rubik-bold mb-10">
              Récuperation par E-mail
            </Text>

            <View className="w-full">
              <TextInput
                placeholder="Entrer votre adresse email"
                value={email}
                onChangeText={(value) => setEmail(value)}
                keyboardType="email-address"
                className="w-full border border-primary-btn p-6 rounded-xl bg-primary-header text-xl font-rubik-medium placeholder:text-black"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="w-full flex-row items-center justify-center mt-16 mb-4 bg-primary-btn text-white p-4 rounded-full text-center"
                onPress={handSendEmailCode}
                disabled={!regEmails.test(email)}
                style={{
                  opacity: !regEmails.test(email) ? 0.5 : 1,
                }}
              >
                <Text className="flex-row items-center text-center font-rubik-medium text-3xl text-white">
                  Continuer
                </Text>
                <Ionicons
                  name="arrow-forward"
                  size={26}
                  color="#fff"
                  style={{
                    marginLeft: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasseword;
