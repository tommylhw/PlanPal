import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  Image,
} from "react-native";

import HomeSvg from "../../assets/svgs/HomeSvg";
import Home from "../../assets/icon/home.svg";

const SplashScreen = () => {
  return (
    <SafeAreaView className="bg-surface">
      <StatusBar className="bg-surface" />
      <View className="w-full h-full flex justify-start items-center bg-surface">
        <View className="flex items-center justify-center gap-[16px] mt-[170px]">
          <Image
            source={require("../../assets/icon/app_icon.png")}
            alt="App Icon"
            className="w-[120px] h-[120px]"
            resizeMode="contain"
          />
          <View className="flex items-center justify-center">
            <Image
              source={require("../../assets/icon/app_name_dark.png")}
              alt="App Name"
              className="w-[200px]"
              resizeMode="contain"
            />
            <Text className="text-[14px]" style={{
              fontFamily: "Poppins Regular",
            }}>Your self management partner</Text>
          </View>
          {/* <HomeSvg
            width={200}
            height={200}
          /> */}
          {/* <Home width={200} height={200} fill={"#000"} /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
