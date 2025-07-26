import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from "react-native";

// components
import AddBtn from "./AddBtn";

const TopSection = () => {
  return (
    <View className="w-full h-[90px] flex flex-row items-center justify-center gap-[16px]">
      {/* <View className="flex items-center justify-center aspect-square"> */}
      <Text className="text-[60px] font-[--color-black] font-RedditSans_Bold text-center align-middle">
        23
      </Text>
      {/* </View> */}
      <View className="flex-1 h-full flex flex-col items-start justify-between py-[20px]">
        <Text className="text-[20px] font-RedditSans_Regular">March 2025</Text>
        <Text className="text-[16px] text-[--color-on-surface] font-RedditSans_Regular">
          Saturday
        </Text>
      </View>

      <AddBtn />
    </View>
  );
};

export default TopSection;
