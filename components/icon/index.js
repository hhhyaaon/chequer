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
    const {type, className, children} = this.props;
    const icoClass = classnames({
      'chq-ico': true,
      [`chq-ico-${type}`]: true
    }, className);
    return (
      !children ?
        <i className={icoClass} />
        :
        <span className='chq-ico-box'>
          <i className={icoClass} />
          <span className='chq-ico-txt'>{children || ''}</span>
        </span>
    )
  }
} 