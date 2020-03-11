import {createAction} from '../components/services/createAction';

export const types = {
  GET_LIST_USER: 'GET_LIST_USER',
  GET_SINGLE_USER: 'GET_SINGLE_USER',
};

export const actions = {
  getListUserAction: {type: types.GET_LIST_USER},
  getSingleUserAction: {type: types.GET_SINGLE_USER},
};
