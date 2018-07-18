import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

export class BoardsIndex extends Component {
  static propTypes = {
    boards: PropTypes.array.isRequired,
    fetchBoards: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    const { boards } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-tt">
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
      <div className="card" key={index}>
        <div className="card-body">
          <h6 className="card-title">{board.name}</h6>
          <p>{board.desc}</p>
        </div>
      </div>
    );
  }
}

export default hot(module)(BoardsIndex);
