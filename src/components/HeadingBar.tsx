import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useRef,
  useEffect,
} from 'react';
import {useFocusEffect} from '@react-navigation/native';
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
} from 'react-native';

// icons
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const HeadingBar = () => {
  return (
    <View className="w-full items-center justify-between flex-row h-[30px]">
      <View className=" h-full flex-row items-center justify-start gap-[16px]">
        <View className="w-[5px] h-full bg-[--color-primary] rounded-[5px]"></View>
        <View className="flex-row items-center gap-[8px]">
          <Text className="font-Poppins_Bold text-[20px]">Morning</Text>
          <View className="flex justify-center align-center bg-[--color-surface-container] rounded-[4px] aspect-square h-[20px]">
            <Text className="text-[--color-on-surface-container] text-center">
              3
            </Text>
          </View>
        </View>
      </View>

      <View className='flex-row gap-[16px]'>
        <AntDesign name='plus' size={20} />
        <Entypo name="plus" size={20} />
      </View>
    </View>
  );
};

export default HeadingBar;
