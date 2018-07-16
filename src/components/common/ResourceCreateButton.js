import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';

const ResourceCreateButton = ({ navigation, link }) =>
  <View style={style.container}>
    <Icon style={style.icon} name='plus' type="font-awesome" onPress={() => navigation.navigate(link)} />
  </View>;

const style = StyleSheet.create({
  container: {
    marginRight: 12
  },
  icon: {
    margin: 4,
    fontSize: 20
  }
});

export default ResourceCreateButton;