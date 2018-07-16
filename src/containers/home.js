import { connect } from 'react-redux';
import React, { Component } from 'react';

export class Home extends Component {
  render() {
    return (
      <h1>Home</h1>
    );
  }
}

export default connect(state => state)(Home);
