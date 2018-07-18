export const get = (key) => {
  return localStorage.getItem(key);
}

export const set = (key, value) => {
  localStorage.setItem(key, value);
}

export const remove = (key) => {
  localStorage.removeItem(key);
}

export default { get, set, remove };
