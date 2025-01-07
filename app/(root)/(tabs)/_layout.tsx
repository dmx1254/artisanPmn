import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          //   tabBarIcon: ({ focused }) => (
          //     <TabIcon focused={focused} icon={icons.home} title="Home" />
          //   ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          //   tabBarIcon: ({ focused }) => (
          //     <TabIcon focused={focused} icon={icons.search} title="Explore" />
          //   ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
