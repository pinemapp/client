import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { RouteWithSubRoutes } from '../commons/helper';
import Header from '../commons/header';
import { fetchTeams } from '../actions/teams';

class AppLayout extends Component {
  static propTypes = {
    team: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      data: PropTypes.array.isRequired
    }),
    fetchTeams: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (!this.props.team.loading) {
      this.props.fetchTeams();
    }
  }

  render() {
    const { routes, session } = this.props;
    const { user } = session;

    return (
      <div className="main">
        <Header />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} user={user} {...route} />)}
      </div>
    )
  }
}

export default hot(module)(connect(state => state, { fetchTeams })(AppLayout));
