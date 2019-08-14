import { all, fork } from '@redux-saga/core/effects';
import homeSaga from '../saga/Home';
import LogsSaga from '../saga/listenerSaga';
import LogInSaga from '../saga/LogInSaga';

export default function* root() {
  yield all([fork(homeSaga), fork(LogsSaga), fork(LogInSaga)]);
}
