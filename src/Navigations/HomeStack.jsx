import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TrackLoan from '../Screens/TrackLoan';
import Dashboard from '../Screens/Dashboard';
import Documents from '../Screens/Documents';
import Icon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator initialRouteName="">
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color, size}) => (
            <Icon name="profile" color={'#03bafc'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TrackLoan"
        component={TrackLoan}
        options={{
          headerShown: false,
          tabBarLabel: 'TrackLoan',
          tabBarIcon: ({color, size}) => (
            <Icon name="piechart" color={'#03bafc'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
