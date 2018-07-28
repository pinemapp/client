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

export const createTeam = (payload) => {
  return api({
    method: 'POST',
    data: payload,
    url: '/api/teams',
  }).then(res => {
    return res.data.team;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
