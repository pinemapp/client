function fetchToken(payload) {
  return fetch('http://localhost:8080/token', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      return res.json();
    }
  })
  .catch(err => { throw err });
}

export default fetchToken;
