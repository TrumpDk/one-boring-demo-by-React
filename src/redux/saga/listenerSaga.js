import { takeEvery, select } from 'redux-saga/effects';

/**
 * this saga is a log for every saga
 */
export default function* watchAndLogs() {
  yield takeEvery('*', function* logger(action) {
    const state = yield select();
    console.log('action', action);
    console.log('state after', state);
  });

  // while (true) {
  //     const action = yield take('*')
  //     const state = yield select()

  //     console.log('action', action)
  //     console.log('state after', state)
  // }
}
