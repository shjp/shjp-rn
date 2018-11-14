import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  ScrollView,
  Text,
  View
} from 'react-native';

import { getGroupDetails } from '../../actions/group';
import { baseNavigationOptions } from '../../configs/navigationOptions';
import GroupDetails from '../../components/group/GroupDetails';
import ResourceControlButton from '../../components/common/ResourceControlButton';

class GroupView extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Group',
    headerRight: <ResourceControlButton navigation={navigation} link='GroupForm' icon='pencil' />,
    ...baseNavigationOptions
  });

  componentDidMount() {
    const id = this.props.navigation.getParam('id', null);
    if (id == null) {
      console.error('Group ID null in GroupView');
      return;
    }
    this.props.getGroupDetails(id)
      .then(() => {
        console.log('group=', JSON.stringify(this.props.group, null, 2));
        /*this.props.navigation.setParams({
          group: this.props.group
        });*/
        this.props.navigation.setParams({
          isEdit: true
        });
      });
  }

  render() {
    const group = this.props.group;
    if (!group) {
      return null;
    }
    return (
      <GroupDetails group={group} />
    );
  }
}

export default connect(
  state => ({ group: state.group.currentGroup }),
  { getGroupDetails }
)(GroupView);