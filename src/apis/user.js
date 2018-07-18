import axios from 'axios';

export function createUserApi(payload) {
  return axios({
    method: 'POST',
    url: 'http://localhost:8080/api/users',
    headers: {
      'Content-Type': 'application/json'
    },
    data: payload
  }).then(res => {
    return res.data;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
