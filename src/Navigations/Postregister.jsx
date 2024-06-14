import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LogIN from '../Screens/LogIN';
import SignUp from '../Screens/SignUp';
import Passcode from '../Screens/Passcode';
import HomeStack from './HomeStack';
import TrackLoan from '../Screens/TrackLoan';
import Documents from '../Screens/Documents';
import DocumentsDetails from '../Screens/DocumentsDetails';

const Stack = createNativeStackNavigator();

const Postregister = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sigup">
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LogIN}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Passcode"
          component={Passcode}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Documents"
          component={Documents}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DocumentsDetails"
          component={DocumentsDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Postregister;

const styles = StyleSheet.create({});
