import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 20,
        flex: 1,
        paddingBottom: 80,
      }}
    >
      <StatusBar backgroundColor="#000" hidden={false} />
      <SafeAreaView className="flex-1 items-center justify-center">
        <View className="w-full">
          <TouchableOpacity className="p-2">
            <Ionicons name="arrow-back-circle" size={46} color="#28A745" />
          </TouchableOpacity>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="w-full items-center my-4">
            <Image
              source={require("@/assets/images/pmn/logo.png")}
              className="w-64 h-16"
              resizeMode="contain"
            />
            {/* <Text className="text-2xl font-rubik-medium mt-4">
              Suñuy Artisan
            </Text> */}
            <Text className="text-2xl font-rubik-light">
              Votre solution artisanale, tac au tac!
            </Text>
          </View>

          {/* Heading */}
          <View className="w-full items-center my-6">
            <Text className="text-5xl font-rubik-extrabold mb-2 text-center">
              Création de votre compte
            </Text>
            <Text className="text-xl font-rubik-light mb-2 text-center">
              Sélectionnez votre profil pour poursuivre la création de votre
              compte.
            </Text>
          </View>

          <View className="w-full flex-row gap-4">
            <View
              className="flex-1 border border-gray-200 bg-white rounded-lg"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Image
                source={require("@/assets/images/client.png")}
                className="w-full h-40 rounded-lg mb-2"
                resizeMode="cover"
              />
              <View className="px-4 py-2">
                <Text className="text-center font-rubik-medium text-xl mb-4">
                  S'inscrire en tant que client
                </Text>
                <TouchableOpacity className="bg-primary-btn rounded-lg p-3">
                  <Text className="text-white text-center font-rubik-bold text-2xl">
                    Continuer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              className="flex-1 border border-gray-200 bg-white rounded-lg"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Image
                source={require("@/assets/images/artisan.png")}
                className="w-full h-40 rounded-lg mb-2"
                resizeMode="cover"
              />
              <View className="px-4 py-2">
                <Text className="text-center font-rubik-medium text-xl mb-4">
                  S'inscrire en tant qu'artisan
                </Text>
                <TouchableOpacity
                  className="bg-primary-btn rounded-lg p-3"
                  onPress={() => router.push("/job-sector")}
                >
                  <Text className="text-white text-center font-rubik-bold text-2xl">
                    Continuer
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
