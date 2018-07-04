import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  ImageTextCard
} from '../custom/cards';

const GroupCard = ({ name, description, imageUri }) => (
  <ImageTextCard
    title={name}
    content={description}
    imageUri={imageUri} />
);

const styles = StyleSheet.create({
});

export default GroupCard;