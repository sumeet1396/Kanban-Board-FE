import { all, fork } from 'redux-saga/effects';
import loginSaga from './login.saga';
import userSaga from './user.saga';

const rootSaga = function* () {
  yield all([fork(loginSaga), fork(userSaga)]);
};

export default rootSaga;