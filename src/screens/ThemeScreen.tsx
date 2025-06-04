import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ThemeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View className="w-full h-full flex items-center justify-center px-[12px]">
        <ScrollView className="w-full flex flex-col gap-[12px]">
          <View className="w-full flex-col items-center gap-[12px]">
            <Text>Colors</Text>
            <View className="w-full h-[40px] bg-[--color-primary]">
              <Text>--color-primary</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-secondary]">
              <Text>--color-secondary</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-danger]">
              <Text>--color-danger</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-container-dark]">
              <Text>--color-container-dark</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-on-container-dark]">
              <Text>--color-on-container-dark</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-surface]">
              <Text>--color-surface</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-on-surface]">
              <Text>--color-on-surface</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-surface-container]">
              <Text>--color-surface-container</Text>
            </View>
            <View className="w-full h-[40px] bg-[--color-on-surface-container]">
              <Text>--color-on-surface-container</Text>
            </View>
          </View>
          <View className="w-full flex-col items-center gap-[12px] mt-[12px]">
            <Text>Fonts</Text>
            <Text className="text-[40px] font-normal">Default</Text>
            <Text className="text-[40px] font-normal font-RedditSans_Regular">
              RedditSans_Regular
            </Text>
            <Text className="text-[40px] font-RedditSans_Bold">
              RedditSans_Bold
            </Text>
            <Text className="text-[40px] font-Poppins_Regular">123</Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ThemeScreen;
