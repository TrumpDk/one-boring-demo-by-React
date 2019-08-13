import HttpService from '../../http/httpList';
import ActionTypes from '../action/actionType';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* homeSaga() {
  try {
    const data = yield call(HttpService.dataForHomePage, {});
    yield put({
      type: ActionTypes.FETCH_DATA_FOR_HOME_PAGE_SUCCESSFUL,
      data: data
    });
  } catch (err) {
    yield put({
      type: ActionTypes.FETCH_DATA_FOR_HOME_PAGE_FAILED
    });
  }
}

export default function* root() {
  yield all([takeLatest(ActionTypes.FETCH_DATA_FOR_HOME_PAGE, homeSaga)]);
}
