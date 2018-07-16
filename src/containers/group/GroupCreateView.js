import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker';

import { baseNavigationOptions } from '../../configs/navigationOptions';
import { PrimaryFullButton, ImagePickerButton } from '../../components/custom/buttons';
import { SHJPBaseCard } from '../../components/custom/cards';
import { ResourceFormField } from '../../components/custom/forms';
import NavigateBackButton from '../../components/common/NavigateBackButton';

export default class GroupCreateView extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Create a New Group',
    headerRight: <NavigateBackButton navigation={navigation} />,
    ...baseNavigationOptions
  });

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      nameError: null,
      imageUri: null,
    };
  }

  pickImage() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true
    }).then(image => {
      console.log('image: ', image);
      this.setState({
        imageUri: image.data
      });
    });
  }

  submit() {
    console.log('submit');
  }

  render() {
    return (
      <SHJPBaseCard>
        <ScrollView>
          <ResourceFormField
            label='Group Name'
            onChangeText={text => this.setState({ name: text })}
            validationError={this.state.nameError} />
          <ResourceFormField
            label='Group Description'
            numberOfLines={3}
            onChangeText={text => this.setState({ description: text })} />
          <View>
            <FormLabel labelStyle={style.imageFormLabel}>Group Image</FormLabel>
            <View style={style.imagePickerButtonContainer}>
              <ImagePickerButton onPress={() => this.pickImage()} />
            </View>
          </View>
          <View style={style.submitButtonContainer}>
            <PrimaryFullButton text='Submit' onPress={() => this.submit()} />
          </View>
        </ScrollView>
      </SHJPBaseCard>
    );
  }
}

const style = StyleSheet.create({
  formInput: {
    color: '#000'
  },
  imagePickerButtonContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  submitButtonContainer: {
    marginHorizontal: 20,
    marginVertical: 16
  },
  imageFormLabel: {
    fontSize: 12
  },
  imagePickerButton: {
    margin: 20
  }
});