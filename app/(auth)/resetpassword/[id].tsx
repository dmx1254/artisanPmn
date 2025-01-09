import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams, useRouter } from "expo-router";

const ResetPasswordPage = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("");
  const [newPasswordError, setNewPasswordError] = useState<string>("");
  const [confirmNewPasswordError, setConfirmNewPasswordError] =
    useState<string>("");

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <StatusBar backgroundColor="#000" hidden={false} />
      <SafeAreaView className="flex-1">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 20,
            paddingHorizontal: 20,
          }}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            activeOpacity={0.5}
            className="left-2 rounded-full p-2"
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back-circle" size={46} color="#28A745" />
          </TouchableOpacity>
          <View className="w-full flex-1 justify-center p-4">
            <View className="items-center mb-8">
              {/* <Image
                source={require("@/assets/images/otp.png")}
                resizeMode="cover"
              /> */}
              <Text className="text-6xl font-rubik-bold text-center mb-8">
                Reinitialiser votre mot de passe
              </Text>

              <View className="w-full relative">
                <TextInput
                  placeholder="Nouveau mot de passe"
                  value={newPassword}
                  secureTextEntry={isPasswordVisible}
                  onChangeText={(value) => setNewPassword(value)}
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
              <View className="w-full relative mt-12">
                <TextInput
                  placeholder="Confirmer nouveau mot de passe"
                  value={confirmNewPassword}
                  secureTextEntry={isPasswordVisible}
                  onChangeText={(value) => setConfirmNewPassword(value)}
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
              <TouchableOpacity
                activeOpacity={0.5}
                className="w-full bg-primary-btn rounded-full p-6 mt-10"
                onPress={() => router.push}
              >
                <Text className="text-white text-center text-2xl font-rubik-medium">
                  Reinitialiser
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ResetPasswordPage;
