import api from './base';

function fetchToken(payload) {
  return api({
    method: 'POST',
    url: 'http://localhost:8080/token',
    data: payload
  }).then(res => {
    return res.data;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}

export default fetchToken;
