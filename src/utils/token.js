import jwtDecode from 'jwt-decode';
import storage from './storage';

const SESSION_KEY = '_pinem_token';

export const get = () => {
  return storage.get(SESSION_KEY);
}

export const set = (token) => {
  storage.set(SESSION_KEY, token);
}

export const remove = () => {
  storage.remove(SESSION_KEY);
}

export const decode = (token) => {
  try {
    return jwtDecode(token);
  } catch (e) {
    return null;
  }
}

export default { get, set, remove, decode }
