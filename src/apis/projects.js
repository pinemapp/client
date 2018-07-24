import api from './base';

export const fetchProjects = () => {
  return api({
    method: 'GET',
    url: '/api/projects'
  }).then(res => {
    return res.data.projects;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
