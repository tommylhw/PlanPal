import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";


const ScheduleTab = () => {
  return (
    <View className="flex-1 bg-[--color-surface] items-center justify-center">
      <Text className="text-[--color-text] text-[20px] font-bold">
        Schedule Tab
      </Text>
    </View>
  )
}

export default ScheduleTab