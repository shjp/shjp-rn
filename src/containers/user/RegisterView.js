import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';
import { isNil } from 'lodash';

import KakaoLogin from '../native/KakaoLogin';
import KakaoRegisterButton from '../components/register/KakaoRegisterButton';
import {
  kakaoRegister
} from '../actions/user';

class RegisterView extends Component {

  componentWillReceiveProps() {
    console.log('[RegisterView.componentWillReceiveProps] props = ' + JSON.stringify(this.props, null, 2));
    if (!isNil(this.props.me)) {
      const { navigate, getParam } = this.props.navigation;
      navigate(getParam('redirect', 'Home'));
    }
  }

  async _kakaoRegister() {
    if (KakaoLogin == null) {
      console.error('KakaoLogin plugin undefined');
      return;
    }
    
    try {
      const data = await KakaoLogin.login();
      console.log('_kakaoRegister: ', JSON.stringify(data, null, 2));
      console.log('props = ' + JSON.stringify(this.props, null, 2));
      this.props.kakaoRegister({ name: data.nickname, kakaoId: data.id });
    } catch (e) {
      console.log('Kakao register err: ', JSON.stringify(e, null, 2));
    }
  }

  render() {
    return (
      <View>
        <KakaoRegisterButton register={() => this._kakaoRegister()} />
      </View>
    )
  }
}

export default connect(
  state => ({ me: state.user.me }),
  { kakaoRegister }
)(RegisterView);