import api from './base';

export function createUserApi(payload) {
  return api({
    method: 'POST',
    url: 'http://localhost:8080/api/users',
    data: payload
  }).then(res => {
    return res.data;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
