import React, {useEffect} from "react";
import {View, Text, SafeAreaView, StatusBar} from "react-native";
import {HeaderBackButton, HeaderBackContext} from "@react-navigation/elements";
import AddScreenTab from "../components/AddScreenTab";

const EditScreen = ({navigation, route}: {navigation: any; route: any}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "New Item",
      headerTitleAlign: "center",
      headerTransparent: true, // hide header border
      headerTitleStyle: {
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
      },
      headerStyle: {
        // backgroundColor: theme.colors.surface,
      },
      headerLeft: () =>
        React.createElement(HeaderBackButton, {
          // labelVisible: false,
          onPress: () => navigation.goBack(),
        }),
    });
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <View className="w-full h-full flex items-center justify-start px-[12px] py-[8px]">
        {/* <Text className="text-[20px] font-bold">Edit Screen</Text>
        <Text className="text-[16px] text-[--color-on-surface] font-RedditSans_Regular">
          This is where you can edit your tasks and schedules.
        </Text> */}
        {/* Additional components for editing tasks can be added here */}

        <AddScreenTab isSwipe={() => {}} closeModal={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default EditScreen;
