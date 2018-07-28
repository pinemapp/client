export default class Team {
  constructor(props = {}) {
    this.id = props.id || null;
    this.name = props.name || '';
    this.desc = props.desc || '';
  }
}
