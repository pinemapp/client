import axios from 'axios';

function fetchToken(payload) {
  return axios({
    method: 'POST',
    url: 'http://localhost:8080/token',
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

export default fetchToken;
