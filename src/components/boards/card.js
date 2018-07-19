import PropTypes from 'prop-types';
import React, { Component } from 'react';
import color from '../../utils/color';
import time from '../../utils/time';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class BoardCard extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    board: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { isMenuOpen: false };
  }

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  render() {
    const { board, className, ...props } = this.props;
    const iconStyle = { backgroundColor: color.hexCode(board.name) };

    return (
      <div className={`card-wraper ${className}`} {...props}>
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
            <Dropdown tag="span" isOpen={this.state.isMenuOpen} toggle={this.toggleMenu} className="card-foot__menu">
              <DropdownToggle tag="span">
                <FontAwesomeIcon icon="cog" />
              </DropdownToggle>
              <DropdownMenu right={true}>
                <DropdownItem href="#">{this.context.t('edit')}</DropdownItem>
                <DropdownItem href="#">{this.context.t('delete')}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    );
  }
}
