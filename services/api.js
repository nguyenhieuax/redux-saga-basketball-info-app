import {_fetch} from './fetchComponent';
// const url = 'http://dummy.restapiexample.com/api/v1/employees';
// };
// const url = 'http://5e68886dd426c00016b7df1b.mockapi.io/getListUser';
const url = 'https://free-nba.p.rapidapi.com/players';

const getListUser = () => {
  return _fetch('GET', url);
};
export const api = {
  getListUser,
};
