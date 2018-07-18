import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import color from '../../utils/color';
import time from '../../utils/time';
import PageLoader from '../../commons/page-loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    let iconStyle = {
      backgroundColor: color.hexCode(board.name)
    };

    return (
      <div className="card-wraper" key={index}>
        <div className="card">
          <Link to={`/boards/${board.id}`} className="card-body">
            <div className="card-head">
              <span className="card-head__icon" style={iconStyle}>{board.name[0]}</span>
              <h6 className="card-head__title">{board.name}</h6>
            </div>
            <p className="card-desc">{board.desc}</p>
          </Link>
          <div className="card-foot">
            <label className="card-foot__created">
              {time.formatDate(board.created_at)}
            </label>
            <span className="card-foot__menu">
              <FontAwesomeIcon icon="cog" />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(BoardsIndex);
