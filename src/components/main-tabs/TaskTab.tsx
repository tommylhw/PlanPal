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
  ScrollView,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

// components
import HeadingBar from '../HeadingBar';
import TaskContainer from '../TaskContainer';

const TaskTab = () => {
  return (
    <View className="flex-1 bg-[--color-surface] items-center justify-start py-[16px]">
      <HeadingBar />
      <TaskContainer type={"TASK"} />
    </View>
  );
};

export default TaskTab;
