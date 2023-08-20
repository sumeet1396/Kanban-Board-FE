import { takeLatest, put } from 'redux-saga/effects';
import { userLogin, userLogout } from '../reducer/loginReducer';
import { USER_LOGIN, USER_LOGOUT } from '../../constants/action-constants';
import apiRoutes from '../../constants/api';
import { post } from '../../services/apiService';
import { loginInterface } from '../../types/interface';

function* handleLogin(data: loginInterface) {
  
  try {
    const {payload: {username: email, password}}: loginInterface = data;
    const creds = {email, password}
    const res: any = yield post({url: apiRoutes?.authenticate?.login, body: creds})
    console.log(res)
    yield put(userLogin(res));
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