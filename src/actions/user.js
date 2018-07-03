import { mutate } from '../api/graphql';

// Action Types
export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGIN = "USER_LOGIN";

// Actions
export const kakaoRegister = ({ name, kakaoId }) =>
  dispatch => {
    console.log('[kakaoRegister] name :', name, ', kakaoId:', kakaoId);
    return mutate(`
      createMember(
          name: "${name}",
          kakaoId: "${kakaoId}",
          clientId: "foo") {
        name
      }`
    ).then(me =>
      dispatch({
        type: USER_REGISTER,
        me: me
      })
    ).catch(err =>
      dispatch({
        type: USER_REGISTER,
        err
      }));
  };

export const kakaoLogin = (kakaoId) =>
  dispatch =>
    mutate(`
      login(
        accountId: "${kakaoId}",
        clientId: "${'foo'}",
        accountType: "kakao"
      ){
        token
      }`
    ).then(({ token }) =>
      dispatch({
        type: USER_LOGIN,
        token
      })
    ).catch(err =>
      dispatch({
        type: USER_LOGIN,
        err
      }));