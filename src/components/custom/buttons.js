import React from 'react';
import {
  Text
} from 'react-native';
import {
  MKButton,
  MKColor
} from 'react-native-material-kit';

export const KakaoThemeButton = props => {
  const Built = SHJPBaseButtonBuilder()
    .withBackgroundColor(MKColor.Yellow)
    .withTextStyle({
      color: 'black',
      fontWeight: 'bold'
    })
    .withText(props.text)
    .build();
  return <Built {...props}></Built>;
};

const SHJPBaseButtonBuilder = () => MKButton.coloredButton()
  .withStyle({
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2
  });
