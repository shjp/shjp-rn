import React from 'react';
import {
  Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'react-native-elements';
//import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {
  GroupsView,
  NewsView
} from '../list';
import LoginView from '../user/LoginView';
import RegisterView from '../user/RegisterView';

import * as FormFactory from '../../factory/form';
import {
  Announcement,
  Event,
  Group
} from '../../factory/models';

const AppNavigator = createMaterialBottomTabNavigator({
  Groups: {
    screen: createStackNavigator({
      GroupsView,
      GroupView: FormFactory.viewForm(Group),
      GroupCreate: FormFactory.createForm(Group),
      GroupEdit: FormFactory.editForm(Group)
    }, {
      initialRouteName: 'GroupsView'
    }),
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name='users' type='font-awesome' color={tintColor}/>
    })
  },
  News: {
    screen: createStackNavigator({
      NewsView,
      AnnouncementView: FormFactory.viewForm(Announcement),
      AnnouncementCreate: FormFactory.createForm(Announcement),
      AnnouncementEdit: FormFactory.editForm(Announcement),
      EventView: FormFactory.viewForm(Event),
      EventCreate: FormFactory.createForm(Event),
      EventEdit: FormFactory.editForm(Event)
    }, {
      initialRouteName: 'NewsView'
    }),
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name='md-calendar' type='ionicon' color={tintColor}/>
    })
  },
  User: {
    screen: createStackNavigator({
      LoginView,
      RegisterView
    }, {
      initialRouteName: 'LoginView'
    }),
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => <Icon name='user' type='font-awesome' color={tintColor}/>
    })
  }
}, {
  initialRouteName: 'Groups',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#111211' },
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    iconStyle: { color: '#ffffff' }
  }
});

export default AppNavigator;