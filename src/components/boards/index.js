import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import BoardCard from './card';
import PageLoader from '../../commons/page-loader';

export class BoardsIndex extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    boards: PropTypes.array.isRequired,
    fetchBoards: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetchBoards();
    }
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return <PageLoader loading={loading} />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-container">
              {this._renderBoards()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderBoards() {
    const { boards } = this.props;
    return boards.map(this._renderBoard);
  }

  _renderBoard(board, index) {
    return (
      <BoardCard board={board} key={index} />
    );
  }
}

export default hot(module)(BoardsIndex);
