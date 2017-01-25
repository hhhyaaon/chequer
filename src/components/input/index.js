import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

import './index.scss';

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.any,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    size: PropTypes.string,
    prefix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
    suffix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]),
  }

  constructor(props) {
    super(props);
    this.state = {
      inputTypeArr: ['text', 'password', 'textarea']
    };
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {

    const {disabled, readonly} = this.props;

    const inputCls = classnames({
      'chq-input': true,
      'chq-input-disabled': !!disabled,
      'chq-input-readonly': !!readonly,
    });
    const inputBox = this.getInput();

    return (
      <div className={inputCls}>
        {inputBox}
      </div>
    )
  }
  getInput() {
    const {type, disabled, readonly, value} = this.props;
    const {inputTypeArr} = this.state;

    const attrObj = {
      disabled: !!disabled,
      readOnly: !!readonly,
      value: value||'',
      onChange:()=>{}
    }
    const inputType = inputTypeArr.filter(t => t === type).length > 0 ? type : 'text';
    return inputType === 'textarea' ?
      <textarea {...attrObj}></textarea>
      :
      <input
        type={inputType}
        {...attrObj} />
  }
}