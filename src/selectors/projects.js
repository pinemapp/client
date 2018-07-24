import { createSelector } from 'reselect';

const projectsSelector = (state) => state.project;

export default createSelector(
  projectsSelector,
  (project) => ({ ...project })
);
