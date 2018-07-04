import React from 'react';
import {
  Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import GroupsView from '../group/GroupsView';
import LoginView from '../user/LoginView';
import RegisterView from '../user/RegisterView';

const AppNavigator = createMaterialBottomTabNavigator({
  Groups: {
    screen: createStackNavigator({
      GroupsView
    }, {
      initialRouteName: 'GroupsView'
    })
  },
  User: {
    screen: createStackNavigator({
      LoginView,
      RegisterView
    }, {
      initialRouteName: 'LoginView'
    })
  }
}, {
  initialRouteName: 'Groups',
  activeTintColor: '#f0edf6',
  inactiveTintColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' }
});

export default AppNavigator;