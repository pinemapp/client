const SESSION_KEY = '_pinem_token';

export const get = (key) => {
  return localStorage.getItem(key);
}

export const set = (key, value) => {
  localStorage.setItem(key, value);
}

export const remove = (key) => {
  localStorage.removeItem(key);
}

export const getToken = () => {
  return get(SESSION_KEY);
}

export const setToken = (token) => {
  set(SESSION_KEY, token);
}

export const removeToken = () => {
  remove(SESSION_KEY);
}

export default { get, set, remove, getToken, setToken, removeToken };
