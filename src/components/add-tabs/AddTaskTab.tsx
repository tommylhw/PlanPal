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
  ScrollView,
  Text,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  useWindowDimensions,
  Animated,
} from "react-native";
import Svg, {
  Circle,
  Line,
  Defs,
  Filter,
  G,
  FeGaussianBlur,
  FeOffset,
  FeBlend,
} from "react-native-svg";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
} from "../../../gluestack/ui/accordion";
import {Divider} from "../../../gluestack/ui/divider";
// import { ChevronUpIcon, ChevronDownIcon } from "../../../gluestack/ui/icon"
import {Calendar, CalendarList, Agenda} from "react-native-calendars";
import DatePicker from "react-native-date-picker";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import WheelPicker from "@quidone/react-native-wheel-picker";

// icons
import Feather from "react-native-vector-icons/Feather";

const AddTaskTab = () => {
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [selectedTime, setSelectedTime] = useState<any>(() => {
    const defaultDueTime: any = new Date();
    defaultDueTime.setHours(23);
    defaultDueTime.setMinutes(59);
    return defaultDueTime;
  });

  // Animated values for hour and minute hand rotations
  const hourRotation = useState(new Animated.Value(0))[0];
  const minuteRotation = useState(new Animated.Value(0))[0];

  // Generate minute markers at 5-minute intervals
  const minuteMarkers = Array.from({length: 12}, (_, index) => {
    const angle = (index * 30 * Math.PI) / 180; // 30° per 5 minutes
    const radius = 60; // Clock face radius
    const centerX = 75;
    const centerY = 75;
    const length = index === 0 ? 10 : 8; // Longer marker at 12 o'clock
    const strokeWidth = index === 0 ? 3 : 2; // Thicker at 12 o'clock
    const x1 = centerX + radius * Math.sin(angle);
    const y1 = centerY - radius * Math.cos(angle);
    const x2 = centerX + (radius - length) * Math.sin(angle);
    const y2 = centerY - (radius - length) * Math.cos(angle);

    return (
      <Line
        key={index}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#F6F6F6"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    );
  });

  // Format time for display
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
  };

  // Update clock hands when selectedTime changes
  useEffect(() => {
    console.log("Start clock animation");
    const hours = selectedTime.getHours() % 12;
    const minutes = selectedTime.getMinutes();

    // Calculate rotation angles: hour hand moves 30° per hour + 0.5° per minute, minute hand moves 6° per minute
    const hourAngle = hours * 30 + minutes * 0.5;
    const minuteAngle = minutes * 6;

    // Animate hour and minute hands
    Animated.parallel([
      Animated.timing(hourRotation, {
        toValue: hourAngle,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(minuteRotation, {
        toValue: minuteAngle,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, [selectedTime]);

  return (
    <View className="flex-1 items-center justify-start py-[16px] gap-[9px]">
      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="w-full bg-transparent gap-[10px]">
        <AccordionItem value="a" className="rounded-[10px]">
          <AccordionHeader
            className="px-[10px] py-[16px]"
            style={{
              boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.02)",
            }}>
            <AccordionTrigger>
              {({isExpanded}: {isExpanded: any}) => {
                return (
                  <View className="w-full items-center justify-between flex-row bg-white rounded-[10px]">
                    <View className="flex-row gap-[10px] items-center">
                      <Feather name="calendar" size={24} color="#98989A" />
                      <Text className="text-[--color-on-surface] font-[14px] font-Poppins_Regular">
                        Due Date
                      </Text>
                    </View>
                    <View>
                      <Text className="text-[--color-primary] font-[14px] font-Poppins_Regular text-right">
                        {selectedDate instanceof Date &&
                        !isNaN(selectedDate.getTime())
                          ? selectedDate.toDateString()
                          : "Invalid Date"}
                      </Text>
                    </View>
                  </View>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="pb-[16px]">
            <View className="w-full bg-[--color-surface] rounded-[10px]">
              <Calendar
                onDayPress={date => {
                  console.log("selected date:", date.dateString);
                  setSelectedDate(new Date(date.dateString));
                }}
                theme={{
                  calendarBackground: "#F6F6F6",
                  selectedDayBackgroundColor: "#F19254",
                  selectedDayTextColor: "#ffffff",
                  todayTextColor: "#00adf5",
                  arrowColor: '#F19254',
                  indicatorColor: '#F19254',
                }}
                style={{
                  borderRadius: 10,
                }}
              />
            </View>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="b" className="rounded-[10px]">
          <AccordionHeader
            className="px-[10px] py-[16px]"
            style={{
              boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.02)",
            }}>
            <AccordionTrigger>
              {({isExpanded}: {isExpanded: any}) => {
                return (
                  <View className="w-full items-center justify-between flex-row bg-white rounded-[10px]">
                    <View className="flex-row gap-[10px] items-center">
                      <Feather name="clock" size={24} color="#98989A" />
                      <Text className="text-[--color-on-surface] font-[14px] font-Poppins_Regular text-right">
                        Due Time
                      </Text>
                    </View>
                    <View>
                      <Text className="text-[--color-primary] font-[14px] font-Poppins_Regular">
                        {selectedTime
                          .toLocaleTimeString()
                          .localeCompare(new Date().toLocaleTimeString()) === 0
                          ? "Now"
                          : selectedTime.toLocaleTimeString("en-US", {
                              hour: "numeric",
                              minute: "numeric",
                              hour12: false,
                            })}
                      </Text>
                    </View>
                  </View>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="pb-[16px]">
            {/* Analog Clock */}
            <View className="w-full flex-row bg-[--color-surface] rounded-[10px] p-[10px]">
              <View className="items-center justify-center">
                <Svg height="150" width="150" viewBox="0 0 150 150">
                  {/* Clock face */}
                  <Defs>
                    <Filter
                      id="shadow"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%">
                      <FeOffset
                        result="offOut"
                        in="SourceGraphic"
                        dx="2"
                        dy="2"
                      />
                      <FeGaussianBlur
                        result="blurOut"
                        in="offOut"
                        stdDeviation="2"
                      />
                      <FeBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </Filter>
                  </Defs>
                  <G filter="url(#shadow)">
                    <Circle
                      cx="75"
                      cy="75"
                      r="67.5"
                      fill="#fff"
                      stroke="#E6E6E6"
                      strokeWidth="3"
                    />
                  </G>

                  {/* Minute markers at 5-minute intervals */}
                  {minuteMarkers}

                  {/* Center dot */}
                  <Circle cx="75" cy="75" r="4" fill="#98989A" />

                  {/* Hour hand */}
                  <Animated.View
                    style={{
                      position: "absolute",
                      width: 150,
                      height: 150,
                      transform: [
                        {
                          rotate: hourRotation.interpolate({
                            inputRange: [0, 360],
                            outputRange: ["0deg", "360deg"],
                          }),
                        },
                      ],
                    }}>
                    <Svg width="150" height="150" viewBox="0 0 150 150">
                      <Line
                        x1="75"
                        y1="75"
                        x2="75"
                        y2="45"
                        stroke="#F19254"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </Svg>
                  </Animated.View>

                  {/* Minute hand */}
                  <Animated.View
                    style={{
                      position: "absolute",
                      width: 150,
                      height: 150,
                      transform: [
                        {
                          rotate: minuteRotation.interpolate({
                            inputRange: [0, 360],
                            outputRange: ["0deg", "360deg"],
                          }),
                        },
                      ],
                    }}>
                    <Svg width="150" height="150" viewBox="0 0 150 150">
                      <Line
                        x1="75"
                        y1="75"
                        x2="75"
                        y2="25"
                        stroke="#F19254"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </Svg>
                  </Animated.View>
                </Svg>
                <Text className="text-[12px] my-5 absolute bottom-[50px]">
                  {formatTime(selectedTime)}
                </Text>
              </View>

              <View className="flex-row justify-center items-center gap-[12px] flex-1">
                <WheelPicker
                  data={[...Array(24).keys()].map(index => ({
                    value: index,
                    label: index.toString().padStart(2, "0"), // Format as "00" to "23"
                  }))}
                  value={selectedTime.getHours()}
                  onValueChanged={({item: {value}}) => {
                    const newTime = new Date(selectedTime);
                    newTime.setHours(value);
                    setSelectedTime(newTime);
                  }}
                  enableScrollByTapOnItem={true}
                  width={70}
                  itemHeight={40}
                />
                <Text className="text-[30px] text-[--color-black] font-Poppins_Regular">
                  {" "}
                  :{" "}
                </Text>
                <WheelPicker
                  data={[...Array(60).keys()].map(index => ({
                    value: index,
                    label: index.toString().padStart(2, "0"), // Format as "00" to "59"
                  }))}
                  value={selectedTime.getMinutes()}
                  onValueChanged={({item: {value}}) => {
                    const newTime = new Date(selectedTime);
                    newTime.setMinutes(value);
                    setSelectedTime(newTime);
                  }}
                  enableScrollByTapOnItem={true}
                  width={70}
                  itemHeight={40}
                />
              </View>
            </View>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="c" className="rounded-[10px]">
          <AccordionHeader
            className="px-[10px] py-[16px]"
            style={{
              boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.02)",
            }}>
            <AccordionTrigger>
              {({isExpanded}: {isExpanded: any}) => {
                return (
                  <View className="w-full items-center justify-between flex-row bg-white rounded-[10px]">
                    <View className="flex-row gap-[10px] items-center">
                      <Feather name="clock" size={24} color="#98989A" />
                      <Text className="text-[--color-on-surface] font-[14px] font-Poppins_Regular">
                        Status
                      </Text>
                    </View>
                    <View>{}</View>
                  </View>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent className="pb-[16px]">
            <View className="w-full bg-[--color-surface] rounded-[10px]"></View>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  );
};

export default AddTaskTab;
