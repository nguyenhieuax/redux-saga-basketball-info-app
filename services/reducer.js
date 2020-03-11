import {actions, types} from './action';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  listUser: [],
});

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case 'GET_LIST_USER':
      return state;
    default:
      return state;
  }
};
export default reducer;
