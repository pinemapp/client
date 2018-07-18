import api from './base';

export const fetchBoards = () => {
  return api({
    method: 'GET',
    url: '/api/boards'
  }).then(res => {
    return res.data.boards;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
