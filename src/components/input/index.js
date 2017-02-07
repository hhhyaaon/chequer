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
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      inputTypeArr: ['text', 'password', 'textarea'],
      value: props.value || ''
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
    const {type, disabled, readonly, onChange} = this.props;
    const {inputTypeArr, value} = this.state;

    const attrObj = {
      disabled: !!disabled,
      readOnly: !!readonly,
      value: value || '',
      onChange: (e) => {
        const curVal = e.target.value;
        this.setState({
          value: curVal
        });
        if (typeof onChange === 'function') {
          onChange.call(this, curVal);
        }
      }
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