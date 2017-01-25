import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.scss';

import Icon from '../icon';

export default class Button extends React.Component {
  static propTypes = {
    // 按钮外层样式
    className: PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    // 按钮类型[default primary minor]
    type: PropTypes.string,
    // 禁用状态
    disabled: PropTypes.bool,
    // 按钮图标类型
    iconType: PropTypes.string,
    // 按钮形状
    shape: PropTypes.string,
    // 按钮大小
    size: PropTypes.string,
    // 点击按钮事件
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      // 按钮类型枚举
      typeArr: ['default', 'primary', 'minor'],
      // 按钮形状枚举
      shapeArr: ['circle'],
      // 按钮大小枚举
      sizeArray: ['small', 'large']
    }
  }

  render() {
    const {typeArr, shapeArr, sizeArray} = this.state;
    const {type, className, disabled, iconType, shape, size, children } = this.props;

    const funcType = typeArr.filter(t => t === type).length > 0 ? type : 'default';
    const shapeType = shapeArr.filter(s => s === shape).length > 0 ? shape : '';
    const sizeType = sizeArray.filter(s => s === size).length > 0 ? size : '';

    const btnClass = classnames({
      'chq-btn': true,
      [`chq-btn-${funcType}`]: !!funcType,
      [`chq-btn-${shapeType}`]: !!shapeType,
      [`chq-btn-${sizeType}`]: !!sizeType,
      ['chq-btn-ico']: !!iconType,
      ['chq-btn-ico-only']: !!iconType && !children,
      [`chq-btn-disabled`]: disabled === true,
    }, className);


    return (
      <button
        disabled={!!disabled}
        className={btnClass}
        onClick={(e) => { this.onClick(e); } }>
        {
          // jsx of icon...
          !!iconType ?
            <Icon
              type={iconType}
              className="chq-btn-icon"
              />
            :
            null
        }
        {
          // jsx of content...
          !!children ?
            <span
              className='chq-btn-ctn'>{children}</span>
            :
            null
        }

      </button>
    )
  }

  onClick(e) {
    const {disabled, onClick} = this.props;
    if (disabled === true) return;
    if (typeof onClick === 'function') {
      return onClick.apply(this, Array.prototype.slice.call(arguments));
    }
  }
}
