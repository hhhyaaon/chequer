import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.scss';


export default class Icon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {type, className} = this.props;
    const icoClass = classnames({
      'chq-ico': true,
      [`chq-ico-${type}`]: true
    }, className);
    return (
      <i className={icoClass} />
    )
  }
} 