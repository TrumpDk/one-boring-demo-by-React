import { take, call, put } from 'redux-saga/effects';
import ActionTypes from '../action/actionType';
import HttpService from '../../http/httpList';

export default function* WatchLogInAndLogOut() {
  while (true) {
    const {
      param: { mobile, password, Toast }
    } = yield take(ActionTypes.LOGIN_START);
    try {
      const { errno, errmsg, data } = yield call(HttpService.postLogin, {
        mobile,
        password
      });
      if (errno === 0) {
        window.localStorage.setItem('token', data.sessionKey);
        window.localStorage.setItem('nideShopUser', data.mobile);
        yield put({
          type: ActionTypes.LOGIN_SUCCESSFULL
        });
      } else {
        yield put({
          type: ActionTypes.LOGIN_FALIED
        });
        yield call(Toast.fail, errmsg, 0.5);
      }
    } catch (err) {
      yield put({
        type: ActionTypes.LOGIN_FALIED
      });
      yield call(Toast.fail, 'Log In failed', 0.5);
    }
  }
}
