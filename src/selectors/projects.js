import { createSelector } from 'reselect';
import Project from '../models/project';

const projectsSelector = (state) => state.project;
const teamsSelector = (state) => state.team;
const projectBuilder = createSelector(
  projectsSelector,
  (project) => project.projects.map(p => new Project(p))
);

export default createSelector(
  projectsSelector,
  teamsSelector,
  projectBuilder,
  (project, team, projects) => ({ ...project, projects , teams: team.data })
);
