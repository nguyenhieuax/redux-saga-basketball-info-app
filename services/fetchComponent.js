export const _fetch = (method, path, params) => {
  return fetch(path, {
    method: method, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      //   'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'x-rapidapi-host': 'free-nba.p.rapidapi.com',
      'x-rapidapi-key': '94b059dfa3msh30bc3b605f9bfe5p103c7cjsna37f9d681035',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: params ? JSON.stringify(params) : null, // body data type must match "Content-Type" header
  });
};
