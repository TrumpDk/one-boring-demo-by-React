import { all, fork } from '@redux-saga/core/effects';
import homeSaga from '../saga/Home';
export default function* root() {
  yield all([fork(homeSaga)]);
}
