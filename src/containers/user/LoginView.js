import React, { Component } from 'react';
import {
  AsyncStorage,
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import KakaoLogin from '../native/KakaoLogin';
import KakaoLoginButton from '../components/login/KakaoLoginButton';

import { post } from '../api/api';

import { kakaoLogin } from '../actions/user';

class LoginView extends Component {
  async _kakaoLogin() {
    if (KakaoLogin == null) {
      console.error('KakaoLogin plugin undefined');
      return;
    }
    try {
      const data = await KakaoLogin.login();
      console.log('kakao data token: ', JSON.stringify(data.accessToken, null, 2));
      console.log('kakao data nickname: ', JSON.stringify(data.nickname, null, 2));
      console.log('kakao login data: ', JSON.stringify(data));
      this.props.kakaoLogin(data.id)
        .then(result => {
          console.log(`login result: ${JSON.stringify(result, null, 2)}`);
          // TODO
          //AsyncStorage.setItem('authtoken', result.token);
        });
    } catch(e) {
      console.log('kakao err: ', JSON.stringify(e, null, 2));
    }
  }

  goToRegister = () => this.props.navigation.navigate('RegisterView', {
    redirect: this.props.navigation.getParam('redirect', 'Home')
  });

  render() {
    if (KakaoLoginButton == null) {
      return null;
    }
    return (
      <View style={styles.page}>
        <KakaoLoginButton login={() => this._kakaoLogin()} />
        <Text>Not a member yet?</Text>
        <Button
          onPress={() => this.goToRegister()}
          title="Register"></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {

  }
});

export default connect(
  null,
  { kakaoLogin }
)(LoginView);