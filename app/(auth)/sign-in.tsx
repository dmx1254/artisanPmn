import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Link, useRouter } from "expo-router";

import useStore from "../lib/store/manage";

const signIn = () => {
  // const { updateStartup } = useStore();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  return (
    <SafeAreaView className="flex-1 flex-col items-center bg-white">
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="mt-10">
          <Image
            source={require("@/assets/images/pmn/splash-screen.png")}
            resizeMode="cover"
          />
        </View>
        <Text className="text-5xl font-rubik-bold text-center mt-4 mb-8">
          Connectez-vous
        </Text>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="w-full flex-col items-center justify-center"
        >
          <View className="w-full flex flex-col items-center gap-6">
            <View className="w-full">
              <TextInput
                placeholder="Adresse Email"
                value={email}
                onChangeText={(value) => setEmail(value)}
                keyboardType="email-address"
                className="w-full border border-primary-btn p-6 rounded-xl bg-primary-header text-xl font-rubik-light placeholder:text-black"
              />
            </View>
            <View className="w-full relative">
              <TextInput
                placeholder="Mot de passe"
                value={password}
                secureTextEntry={isPasswordVisible}
                onChangeText={(value) => setPassword(value)}
                className="w-full border border-primary-btn p-6 rounded-xl bg-primary-header text-xl font-rubik-light placeholder:text-black"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                className="absolute top-[30%] left-[85%]"
                onPress={() => setIsPasswordVisible((prevPass) => !prevPass)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off" : "eye"}
                  size={34}
                  color="#28A745"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            className="w-full flex items-end justify-end mt-4 mb-8"
            onPress={() => router.push("/(auth)/reset-password")}
          >
            <Text className="text-primary-btn font-rubik-medium text-xl">
            Mot de passe oublié?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            className="w-full flex items-center justify-center"
            // onPress={() => updateStartup(false)}
          >
            <Text className="w-full text-center p-4 bg-primary-btn font-rubik-medium text-3xl text-white rounded-full">
              Se connecter
            </Text>
          </TouchableOpacity>
          <Link
            href="/sign-up"
            className="flex items-center justify-center mt-6"
          >
            <Text className="font-rubik-medium text-xl">
              Avez vous un compte ?{" "}
              <Text className="text-primary-btn">Inscrivez-vous</Text>
            </Text>
          </Link>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
