import api from './base';

export const fetchTeams = () => {
  return api({
    method: 'GET',
    url: '/api/teams'
  }).then(res => {
    return res.data.teams;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
