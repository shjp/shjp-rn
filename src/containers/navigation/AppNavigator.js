import React from 'react';
import {
  Text
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import {
  //GroupForm,
  //GroupView,
  GroupsView
} from '../group';
import LoginView from '../user/LoginView';
import RegisterView from '../user/RegisterView';

import * as FormFactory from '../../factory/form';
import {
  Group
} from '../../factory/models';

const AppNavigator = createMaterialBottomTabNavigator({
  Groups: {
    screen: createStackNavigator({
      GroupsView,
      /*GroupView,
      GroupForm*/
      GroupView: FormFactory.viewForm(Group),
      GroupCreate: FormFactory.createForm(Group),
      GroupEdit: FormFactory.editForm(Group)
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
  barStyle: { backgroundColor: '#555' }
});

export default AppNavigator;