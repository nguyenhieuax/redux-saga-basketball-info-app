import {actions, types} from './action';
import {put, takeLatest, all, takeEvery, call} from 'redux-saga/effects';
import {api} from './api';

// const url = 'https://reqres.in/api/users?page=2';
const getUserList = function*({payload, onSuccess, onError}) {
  const resList = yield call(api.getListUser);
  console.log('reslist data =====in saga ====', resList);
  if (resList.ok === true) {
    resList.json().then(function(data) {
      onSuccess(data);
      console.log('data is =============223232', data);
    });
  } else {
    console.log('error r----------sdsd------===', resList);
  }
};

const watcher = function*() {
  yield takeEvery(types.GET_LIST_USER, getUserList);
};

// export watcher();

export default function* rootSaga() {
  yield all([watcher()]);
}
