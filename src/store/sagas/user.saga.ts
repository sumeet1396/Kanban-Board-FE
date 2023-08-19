import { takeLatest, put } from 'redux-saga/effects';
import { userSetup } from '../reducer/userReducer';
import { USER_SETUP } from '../../constants/action-constants';
import { post } from '../../services/apiService';

function* handleUserSetup(data: any): Generator<any> {
  try {
    const { url, callback } = data;
    const res: any = yield post({ url, params: {}, body: {} });
    if (res?.response_code === -1 && res?.response_message === 'Access denied') {
      callback(res);
      return;
    }
    console.log({ res });
    yield put(userSetup(res));
  } catch (error) {
    console.log(error);
  }
}

function* userSaga() {
  yield takeLatest(USER_SETUP, handleUserSetup);
}

export default userSaga;