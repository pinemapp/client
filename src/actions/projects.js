import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILED
} from '../constants/projects';

export const fetchProjects = () => {
  return { type: FETCH_PROJECTS_REQUEST };
}

export const fetchProjectsSuccess = (projects) => {
  return { type: FETCH_PROJECTS_SUCCESS, payload: projects };
}

export const fetchProjectsFailed = () => {
  return { type: FETCH_PROJECTS_FAILED };
}
