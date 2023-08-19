import { takeLatest, put } from 'redux-saga/effects';
import { userLogin, userLogout } from '../reducer/loginReducer';
import { USER_LOGIN, USER_LOGOUT } from '../../constants/action-constants';

function* handleLogin(data: unknown) {
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put(userLogin(data));
}

function* handleLogout() {
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put(userLogout());
}

function* loginSaga() {
  yield takeLatest(USER_LOGIN, handleLogin);
  yield takeLatest(USER_LOGOUT, handleLogout);
}

export default loginSaga;