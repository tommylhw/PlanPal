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
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// components
import TaskTab from './main-tabs/TaskTab';
import DeadlineTab from './main-tabs/DeadlineTab';
import ScheduleTab from './main-tabs/ScheduleTab';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// backend
// import {DBFetchCourses} from '../utils/db';

const routes = [
  {key: 'task', title: 'Task'},
  {key: 'deadline', title: 'Deadline'},
  {key: 'schedule', title: 'Schedule'},
];

const MainTab = ({
  isSwipe,
  closeModal,
  defaultTab,
}: {
  isSwipe: any;
  closeModal: () => void;
  defaultTab?: number;
}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const renderScene: any = useCallback(
    ({route}: {route: any}) => {
      switch (route.key) {
        case 'task':
          return <TaskTab />;
        case 'deadline':
          return <DeadlineTab />;
        case 'schedule':
          return <ScheduleTab />;
        default:
          return null;
      }
    },
    [],
  );

  return (
    <View className="w-[full]">
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <View className="align-center justify-center rounded-[5px]">
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: '#fff',
                height: 40,
                borderRadius: 7,
                marginBottom: 5,
              }}
              contentContainerStyle={{
                alignItems: 'center',
                // height: 40,
                // marginTop: 5,
                paddingHorizontal: 5,
              }}
              style={{
                backgroundColor: '#EAEAEA',
                borderRadius: 12,
                height: 50,
              }}
              activeColor="#2A2C2D"
              inactiveColor="#7A7A7A"
            />
          </View>
        )}
      />
    </View>
  );
};

export default MainTab;
