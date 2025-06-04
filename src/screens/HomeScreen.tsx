import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';

// components
import TopSection from '../components/TopSection';
import MainTab from '../components/MainTab';

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-[--color-surface]">
      <StatusBar className="bg-[--color-surface]" />
      <View className="w-full h-full flex justify-start items-center bg-[--color-surface] px-[20px]">
        <View className="w-full mt-[20px]">
          <TopSection />
        </View>
        <View>
          <MainTab
          isSwipe={() => {}}
          closeModal={() => {}}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
