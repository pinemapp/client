import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILED,

  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILED,

  UPDATE_PROJECT_REQUEST,
  UPDATE_PROJECT_SUCCESS,
  UPDATE_PROJECT_FAILED,

  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILED
} from '../constants/projects';

export function fetchProjects() {
  return { type: FETCH_PROJECTS_REQUEST };
}

export function fetchProjectsSuccess(projects) {
  return { type: FETCH_PROJECTS_SUCCESS, payload: projects };
}

export function fetchProjectsFailed() {
  return { type: FETCH_PROJECTS_FAILED };
}

export function createProject(payload) {
  return { type: CREATE_PROJECT_REQUEST, payload };
}

export function createProjectSuccess(project) {
  return { type: CREATE_PROJECT_SUCCESS, payload: project };
}

export function createProjectFailed(errors) {
  return { type: CREATE_PROJECT_FAILED, payload: errors };
}

export function updateProject(payload) {
  return { type: UPDATE_PROJECT_REQUEST, payload };
}

export function updateProjectSuccess(project) {
  return { type: UPDATE_PROJECT_SUCCESS, payload: project }
}

export function updateProjectFailed(errors) {
  return { type: UPDATE_PROJECT_FAILED, payload: errors }
}

export function deleteProject(id) {
  return { type: DELETE_PROJECT_REQUEST, payload: id };
}

export function deleteProjectSuccess(id) {
  return { type: DELETE_PROJECT_SUCCESS, payload: id };
}

export function deleteProjectFailed(errors) {
  return { type: DELETE_PROJECT_FAILED, payload: errors };
}
