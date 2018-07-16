import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  ScrollView,
  Text
} from 'react-native';

import { getGroups } from '../../actions/group';
import { baseNavigationOptions } from '../../configs/navigationOptions';
import GroupCard from '../../components/group/GroupCard';
import ResourceCreateButton from '../../components/common/ResourceCreateButton';

class GroupsView extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Groups',
    headerRight: <ResourceCreateButton navigation={navigation} link='GroupCreateView' />,
    ...baseNavigationOptions
  });

  componentDidMount() {
    this.props.getGroups();
  }

  componentWillReceiveProps(props) {
    console.log('groups: ', JSON.stringify(props.groups));
  }

  render() {
    if (!this.props.groups) {
      return null;
    }

    return (
      <ScrollView>
      {
        this.props.groups.map((group, i) =>
          <GroupCard
            key={i}
            name={group.name}
            description={group.description}
            imageUri={group.imageUri || ''} />)
      }
      </ScrollView>
    )
  }
}

const style = {
  header: {
    display: 'flex',
    flexDirection: 'row'
  }
}

export default connect(
  state => ({ groups: state.group.groups }),
  { getGroups },
)(GroupsView);