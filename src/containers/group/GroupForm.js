import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker';
import Snackbar from 'react-native-snackbar';

import { createGroup } from '../../actions/group';
import { baseNavigationOptions } from '../../configs/navigationOptions';
import { PrimaryFullButton, ImagePickerButton } from '../../components/custom/buttons';
import { SHJPBaseCard } from '../../components/custom/cards';
import { ResourceFormField } from '../../components/custom/forms';
import NavigateBackButton from '../../components/common/NavigateBackButton';

const IMAGE_WIDTH = 280;
const IMAGE_HEIGHT = 200;

class GroupForm extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('group', null) ? 'Edit Group' : 'Create a New Group',
    headerRight: <NavigateBackButton navigation={navigation} />,
    ...baseNavigationOptions
  });

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      nameError: null,
      imageData: null,
    };
  }

  componentWillUnmount() {
    console.log('unmount');
    this.props.navigation.setParams({
      isEdit: false
    });
  }

  pickImage() {
    ImagePicker.openPicker({
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      cropping: true,
      includeBase64: true
    }).then(image => {
      console.log('image: ', image);
      this.setState({
        imageData: image.data
      });
    }).catch(() => {}); // ignore
  }

  submit() {
    this.props.createGroup({
      name: this.state.name,
      description: this.state.description,
      imageData: this.state.imageData
    }).then(() => {
      Snackbar.show({
        title: `Group "${this.state.name}" has been successfully created!`,
        duration: Snackbar.LENGTH_LONG
      });
    });
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
            {
              !this.state.imageData ? null :
              <View style={style.imagePreviewContainer}>
                <Image style={style.imagePreview} resizeMode='contain' source={{uri: `data:image/png;base64,${this.state.imageData}`}} />
              </View>
            }
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
    marginVertical: 16,
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
  imagePreview: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    marginHorizontal: 'auto'
  },
  imagePreviewContainer: {
    marginHorizontal: 20,
    marginVertical: 16
  }
});

export default connect(
  null,
  { createGroup }
)(GroupForm);

