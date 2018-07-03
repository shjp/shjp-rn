import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ScrollView
} from 'react-native';

import { getGroups } from '../actions/group';
import GroupCard from '../components/group/GroupCard';

class GroupsView extends Component {
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

export default connect(
  state => ({ groups: state.group.groups }),
  { getGroups },
)(GroupsView);