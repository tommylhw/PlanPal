import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

// backend
import {AuthSignOut} from '../utils/auth';

// redux toolkit
import {useDispatch, useSelector} from 'react-redux';
import {setIsSignedIn} from '../stores/AuthSlice';

const AccountScreen = ({navigation}: {navigation: any}) => {
  const dispatch = useDispatch();
  const HandleSignOut = async () => {
    const res = await AuthSignOut();
    console.log('Sign Out Response: ', res);

    if (res == 'SIGN_OUT_SUCCESS') {
      // Handle successful sign out, e.g., navigate to login screen
      console.log('User signed out successfully');
      dispatch(setIsSignedIn(false));
    } else {
      // Handle sign out error
      console.error('Error signing out:', res);
    }
  };

  return (
    <SafeAreaView className="bg-surface">
      <StatusBar className="bg-surface" />
      <View className="w-full h-full flex justify-start items-center bg-surface px-[20px]">
        <TouchableOpacity
          className="w-full p-5 flex justify-center items-center bg-[--color-container-dark] rounded-[10px] mt-5"
          onPress={() => HandleSignOut()}>
          <Text className="text-[--color-on-container-dark] text-[17px] font-Poppins_Black font-bold">
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AccountScreen;
