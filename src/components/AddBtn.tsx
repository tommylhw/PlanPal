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

const AddBtn = () => {
  return (
    <TouchableOpacity>
      <Feather name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default AddBtn;
