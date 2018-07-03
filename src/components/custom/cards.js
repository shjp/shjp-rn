import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

export const TextCard = ({ title, content, children }) =>
  <SHJPBaseCard>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    {children}
  </SHJPBaseCard>;

export const ImageTextCard = ({ title, content, imageUri, children }) =>
  <SHJPBaseCard>
    <Image source={{uri: imageUri}} />
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.content}>{content}</Text>
    {children}
  </SHJPBaseCard>

export const SHJPBaseCard = ({ children }) =>
  <View style={styles.card}>
    {children}
  </View>;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 5,
    marginVertical: 3,
    padding: 12,

    // for Android
    elevation: 3,
    
    // for iOS?
    shadowColor: '#000',
    shadowOffset: {
      height: 3,
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000'
  }
})