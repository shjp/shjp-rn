import React from 'react';
import {
  Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import GroupsView from '../containers/group/GroupsView';
import LoginView from '../containers/user/LoginView';
import RegisterView from '../containers/user/RegisterView';

const AppNavigator = createStackNavigator({
  Home: {
    screen: createMaterialBottomTabNavigator({
      GroupsView
    })
  },
  LoginView,
  RegisterView
}, {
  initialRouteName: 'Home',
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: '#888'
    },
    headerLeft: (props) => <Text style={{color: '#fff'}}>left</Text>,
    headerRight: <Text>right</Text>
  })
});

export default AppNavigator;