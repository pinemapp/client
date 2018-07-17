import storage from '../utils/storage';

export function createUserApi(payload) {
  const token = storage.getToken();

  return fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.statusText)
    }
  })
  .catch(err => { throw err });
}
