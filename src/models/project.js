export default class Project {
  constructor(props = {}) {
    this.id = props.id || null;
    this.name = props.name || '';
    this.desc = props.desc || '';
    this.team_id = props.team_id || null;
    this.public = props.public || false;
  }
}
