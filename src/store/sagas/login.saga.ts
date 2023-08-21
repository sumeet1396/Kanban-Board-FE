import { takeLatest, put } from 'redux-saga/effects';
import { userLogin, userLogout } from '../reducer/loginReducer';
import { USER_LOGIN, USER_LOGOUT } from '../../constants/action-constants';
import apiRoutes from '../../constants/api';
import { post } from '../../services/apiService';
import { loginInterface } from '../../types/interface';
import { userSetup } from '../reducer/userReducer';

function* handleLogin(data: loginInterface): Generator<any> {
  
  try {
    const {payload: {username: email, password, enabled, callback}}: loginInterface = data;
    console.log({data})
    const creds = {email, password}
    const res: any = yield post({url: apiRoutes?.authenticate?.login, body: creds})
    const user = res?.data?.data
    const token = res?.data?.token;
    if (enabled && token) window.localStorage.setItem('token', token)
    yield put(userSetup(user));
    yield put(userLogin(token));
    callback();
  } catch(error) {
    console.log(error)
  }
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