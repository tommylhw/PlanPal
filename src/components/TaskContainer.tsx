import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import {useFocusEffect} from "@react-navigation/native";
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

// icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Entypo from "react-native-vector-icons/Entypo";

const TaskContainer = ({type}: {type?: any}) => {
  return (
    <View className="bg-white w-full mt-[18px] rounded-[12px] border-[1px] border-[--color-surface-container] shadow-[2px_2px_10px_2px_rgba(0,0,0,0.02)] outline outline-1 outline-offset-[-0.50px] outline-gray-200">
      <View className="flex-row items-center justify-between px-[16px] py-[8px] border-b-[1px] border-[--color-surface-container]">
        <View className="flex-row gap-[8px]">
          <Text className="text-[--color-on-surface] font-RedditSans_Regular">
            02 Apr
          </Text>
          {type === "DEADLINE" && (
            <View className="flex-row items-center gap-[8px]">
              <Entypo name="dot-single" size={20} color={"#E5E5EA"} />
              <Text className="text-[--color-on-surface] font-RedditSans_Regular">
                23:59
              </Text>
            </View>
          )}
          {type === "SCHEDULE" && (
            <View className="flex-row items-center gap-[8px]">
              <FontAwesome5 name="clock" size={12} color={"#E5E5EA"} />
              <Text className="text-[--color-on-surface] font-RedditSans_Regular">
                14:00 - 16:00
              </Text>
              <Entypo name="dot-single" size={20} color={"#E5E5EA"} />
              <Text className="text-[--color-on-surface] font-RedditSans_Regular">
                4h
              </Text>
            </View>
          )}
        </View>
        <View>
          <Text className="text-[--color-on-surface] font-RedditSans_Regular">
            Wed
          </Text>
        </View>
      </View>
      <View className="w-full px-[16px] py-[10px]">
        <Text className="font-Poppins_Bold text-[20px] mb-[10px]">
          Final Report
        </Text>
        <View className="flex-row gap-[16px]">
          <View className="px-[12px] py-[2px] rounded-[20px] bg-[#DEF3FC]">
            <Text className="text-[#5AC3F2] text-[12px] font-Poppins_Bold">
              HKUST
            </Text>
          </View>
        </View>
      </View>
      <View className="w-full px-[16px] py-[10px] flex-row gap-[12px]">
        <View className="flex-row gap-[8px] items-center">
          <FontAwesome5 name="tasks" size={14} color={"#98989A"} />
          <Text className="text-[--color-on-surface] font-RedditSans_Regular text-[14px]">
            3
          </Text>
        </View>
        <View className="flex-row gap-[8px] items-center">
          {/* <FontAwesome5 name="tasks" size={14} color={'#98989A'} /> */}
          <Text className="text-[--color-on-surface] font-RedditSans_Regular text-[14px]">
            60%
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TaskContainer;
