import axios from 'axios';
import token from '../utils/token';

const request = (options) => {
  const api = axios.create({
    baseURL: __BASE_API_URL__
  });


  api.defaults.headers.common['Content-Type'] = 'application/json';

  const jwtToken = token.get();
  if (jwtToken) {
    api.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;
  } else {
    delete api.defaults.headers.common['Authorization'];
  }

  return api(options);
}

export default request;
