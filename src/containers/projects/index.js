import { connect } from 'react-redux';
import { fetchProjects, updateProject } from '../../actions/projects';
import ProjectsIndex from '../../components/projects';
import projectsSelector from '../../selectors/projects';

export default connect(projectsSelector, { fetchProjects, updateProject })(ProjectsIndex);
