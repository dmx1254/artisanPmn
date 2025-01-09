import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
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

import * as Clipboard from "expo-clipboard";

const VerificationCode = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = async (value: string, index: number) => {
    // const copiedText = await Clipboard.getStringAsync();
    // if (copiedText && copiedText.length > 0 && copiedText.length < 7) {
    //   setOtp(copiedText.trim().split(""));
    // }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (inputRefs.current[index + 1] && newOtp[index]) {
      inputRefs.current[index + 1]?.focus();
    }

    if (inputRefs.current[index - 1] && !newOtp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const focusNextInput = (index: number) => {
    if (inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

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
            justifyContent: "space-between",
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
          <View className="w-full p-4">
            <View className="items-center mb-8">
              <Image
                source={require("@/assets/images/otp.png")}
                resizeMode="cover"
              />

              <Text className="text-3xl font-rubik-bold text-center mb-2">
                Veuillez saisir le code OTP envoyé à votre adresse e-mail.
              </Text>

              <View className="flex-row justify-between text-center gap-1 items-center w-full my-8">
                {otp.map((digit, index) => (
                  <View
                    key={index}
                    className="w-14 h-14 bg-white rounded-full text-center items-center justify-center"
                  >
                    <TextInput
                      value={digit}
                      onChangeText={(value) => handleChange(value, index)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                      maxLength={1}
                      keyboardType="numeric"
                      className="w-14 h-14 border border-green-500 rounded-full text-center font-rubik-bold text-2xl"
                      onSubmitEditing={() => focusNextInput(index)}
                    />
                  </View>
                ))}
              </View>

              <View className="flex-row items-center gap-4 w-full">
                <Text className="text-lg font-rubik-bold italic">
                  Vous n'avez pas reçu le code?
                </Text>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text className="text-primary-btn font-medium text-lg font-rubik-bold">
                    Renvoyer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity
            activeOpacity={0.5}
            className="bg-primary-btn rounded-full py-4 px-8 mx-4"
            disabled={otp.join("").length < 6}
            style={{
              opacity: otp.join("").length < 6 ? 0.7 : 1,
            }}
            onPress={() =>
              router.push({
                pathname: "/resetpassword/[id]",
                params: { id: String(id) },
              })
            }
          >
            <Text className="text-white text-center text-2xl font-rubik-medium">
              Valider
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default VerificationCode;
