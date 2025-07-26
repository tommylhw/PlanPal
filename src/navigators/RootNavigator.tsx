import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

// Backend
import {AuthGetCurrentUser} from "../utils/auth";

// Screens
import SplashScreen from "../screens/auth/SplashScreen";
import EditScreen from "../screens/EditScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import HomeSvg from "../assets/svgs/HomeSvg";
import {SvgUri} from "react-native-svg";

// Redux Toolkit
import {useSelector, useDispatch} from "react-redux";
import {
  setIsSignedIn,
  setCurrentUserEmail,
  setCurrentUserPassword,
  setCurrentUserName,
  setCurrentUserID,
  setCurrentUserInfo,
  selectIsSignedIn,
  selectCurrentUserEmail,
  selectCurrentUserPassword,
  selectCurrentUserName,
  selectCurrentUserID,
  selectCurrentUserInfo,
} from "../stores/AuthSlice";

// Screens
import WelcomeScreen from "../screens/auth/WelcomeScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import AccountVerificationScreen from "../screens/auth/AccountVerificationScreen";
import HomeScreen from "../screens/HomeScreen";
import ThemeScreen from "../screens/ThemeScreen";
import AccountScreen from "../screens/AccountScreen";

const SplahNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplahNavigator_SplashScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SplahNavigator_SplashScreen"
        component={SplashScreen}
      />
    </Stack.Navigator>
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AuthNavigator_WelcomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AuthNavigator_SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        name="AuthNavigator_WelcomeScreen"
        component={WelcomeScreen}
        // options={{
        //   animation: "fade",
        // }}
      />
      <Stack.Screen
        name="AuthNavigator_SignInScreen"
        component={SignInScreen}
        // options={{
        //   animation: "fade",
        // }}
      />
      <Stack.Screen
        name="AuthNavigator_SignUpScreen"
        component={SignUpScreen}
        // options={{
        //   animation: "fade",
        // }}
      />
      <Stack.Screen
        name="AuthNavigator_AccountVerificationScreen"
        component={AccountVerificationScreen}
      />
      <Stack.Screen
        name="AuthNavigator_BottomTabNavigator"
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="BottomTabNavigator_HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#949699",
        tabBarStyle: {
          // borderRadius: 50,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // width: "90%",
          // position: "absolute",
          // // left: 20,
          // // right: 20,
          // // left: "20%",
          // // right: "20%",
          // left: 200,
          // bottom: 25,

          elevation: 5, // For Android shadow
          shadowColor: "#ebebeb", // For iOS shadow
          shadowOffset: {width: 4, height: 4},
          shadowOpacity: 0.1,
          shadowRadius: 50,
          borderWidth: 0,
          height: 90,
        },
        tabBarItemStyle: {
          padding: 10,
          height: "100%",
          alignItems: "center",
        },
        tabBarLabelStyle: {
          marginTop: 10,
          fontFamily: "Poppins Regular",
        },
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="BottomTabNavigator_HomeScreen"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({color, size}) => (
            // <HomeSvg width={size} height={size} />
            <Image
              source={require("../assets/icon/home_icon.png")}
              alt="Home Icon"
              className="w-[24px] h-[24px]"
              resizeMode="contain"
              style={{
                tintColor: color,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className="text-on-surface"
              style={{
                fontFamily: "Poppins Regular",
                color: focused ? "#000" : "#949699",
              }}>
              Home
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="BottomTabNavigator_CalendarScreen"
        component={SplashScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require("../assets/icon/calendar_icon.png")}
              alt="Calendar Icon"
              className="w-[24px] h-[24px]"
              resizeMode="contain"
              style={{
                tintColor: color,
              }}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className="text-on-surface"
              style={{
                fontFamily: "Poppins Regular",
                color: focused ? "#000" : "#949699",
              }}>
              Calendar
            </Text>
          ),
        }}
      />

      <Tab.Screen
        name="BottomTabNavigator_AccountScreen"
        component={AccountStackNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              source={require("../assets/icon/profile/user-1.jpg")}
              alt="Account Icon"
              className="w-[24px] h-[24px] rounded-full border-2 border-black"
              // resizeMode="contain"
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              className="text-on-surface"
              style={{
                fontFamily: "Poppins Regular",
                color: focused ? "#000" : "#949699",
              }}>
              Account
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStackNavigator_HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="HomeStackNavigator_HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="HomeStackNavigator_EditScreen"
        component={EditScreen}
      />
    </Stack.Navigator>
  );
}

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AccountStackNavigator_AccountScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="AccountStackNavigator_AccountScreen"
        component={AccountScreen}
      />
      <Stack.Screen
        name="AccountStackNavigator_AuthNavigator"
        component={AuthNavigator}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  const dispatch = useDispatch();
  const isSignedIn = useSelector(selectIsSignedIn);

  const [isLoading, setIsLoading] = useState(true);

  const HandleCheckAuthStatus = async () => {
    setIsLoading(true);

    const res: any = await AuthGetCurrentUser();
    console.log("Signed in user:", JSON.stringify(res));
    console.log("res?.data.session:", res?.data.session);
    if (res?.data.session != null) {
      dispatch(setIsSignedIn(true));
      dispatch(setCurrentUserID(res.userId));
      console.log("User ID:", res.userId);
    } else {
      dispatch(setIsSignedIn(false));
      console.log("User is not signed in");
    }

    setIsLoading(false);
  };

  useEffect(() => {
    HandleCheckAuthStatus();
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <SplahNavigator />
      ) : isSignedIn ? (
        <BottomTabNavigator />
      ) : (
        <AuthNavigator />
      )}
    </NavigationContainer>
  );
};

export default RootNavigator;
