import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { isEmpty as _isEmpty } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

export default class SelectBox extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    select: PropTypes.object,
    options: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: props.select || {}
    };
    this.EMPTY_OPTION = {};
  }

  toggleOpen = (event) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleClick = (event, option) => {
    event.preventDefault();
    this.setState({ selectedOption: option });
    if (this.props.onChange) {
      this.props.onChange({
        value: option,
        name: this.props.name,
      });
    }
  }

  render() {
    const { isOpen, selectedOption } = this.state;
    const { options, text, onChange, className, ...props } = this.props;
    const newOptions = [this.EMPTY_OPTION, ...options];

    return (
      <Dropdown toggle={this.toggleOpen} isOpen={isOpen} className={`${className} select-box`} {...props}>
        <DropdownToggle>
          <span>{_isEmpty(selectedOption) ? this.context.t('choose') : this._toString(selectedOption)}</span>
          <FontAwesomeIcon icon="caret-down" />
        </DropdownToggle>
        <DropdownMenu>
          {newOptions.map((option, i) => (
            <DropdownItem
              key={i}
              href="#"
              active={selectedOption === option}
              onClick={(event) => {this.handleClick(event, option)}}>
              {_isEmpty(option) ? this.context.t('choose') : this._toString(option)}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    );
  }

  _toString(option) {
    const { text } = this.props;
    return text ? option[text] : option.toString();
  }
}
