import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import {useNavigation} from "@react-navigation/native";

const AddBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="w-[50px] h-[50px] bg-[--color-black] rounded-[10px] items-center justify-center"
      onPress={() =>
        navigation.navigate("HomeStackNavigator_EditScreen", {
          type: "ADD",
        })
      }>
      <Feather name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddBtn;
