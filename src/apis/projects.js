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

export const createProject = (payload) => {
  return api({
    method: 'POST',
    url: '/api/projects',
    data: payload
  }).then(res => {
    return res.data.project;
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}

export const updateProject = (payload) => {
  const { id, ...data } = payload;
  return api({
    method: 'PUT',
    url: `/api/projects/${id}`,
    data: data
  }).then(res => {
    return res.data.project
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}

export const deleteProject = (id) => {
  return api({
    method: 'DELETE',
    url: `/api/projects/${id}`
  }).catch(err => {
    return Promise.reject(err.response.data);
  });
}
