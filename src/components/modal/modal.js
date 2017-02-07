import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './modal.scss';

import Icon from '../icon';
import Button from '../button';

export default class Modal extends Component {
  static propTypes = {
    title: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    isShow: PropTypes.bool,
    footer: PropTypes.element,
    cancelText: PropTypes.string,
    confirmText: PropTypes.string,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    onClose: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = Object.assign({}, {
      isShow: false
    }, {
        isShow: props.isShow
      });
  }

  componentWillReceiveProps(nextProp) {
    this.setState({
      isShow: !!nextProp.isShow
    });
  }

  render() {
    const {title, footer, width, children} = this.props;
    const {isShow} = this.state;

    const footerJSX = this.getFooter(footer);
    const modalCls = classnames({
      'chq-modal': true,
      [`chq-modal-anim-show`]: !!isShow,
      [`chq-modal-anim-hide`]: !isShow,
    })
    const modalSty = {
      width: !isNaN(Number(width)) ? width : width + 'px'
    }
    return (
      <div
        className={modalCls}
        // style={{ display: !!isShow ? 'block' : 'none' }}
        >
        <div className="chq-modal-layer">
          <div
            style={modalSty}
            className="chq-modal-container">
            <div className="chq-modal-panel">
              <div className="chq-modal-title">
                <div className="chq-modal-title-txt">{title}</div>
                <div className="chq-modal-opa">
                  <span
                    onClick={(e) => { this.onClickCancel(e); } } >
                    <Icon
                      type="close" />
                  </span>
                </div>
              </div>
              <div
                className="chq-modal-ctn">
                {children}
              </div>
              <div className="chq-modal-footer">
                {footerJSX}
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

  getFooter(footer) {
    const {cancelText, confirmText} = this.props;
    return !!footer ? footer : (
      <div>
        <Button
          type="primary"
          onClick={(e) => { this.onClickConfirm(e); } }>{confirmText || '确定'}</Button>
        <Button
          type="minor"
          onClick={(e) => { this.onClickCancel(e); } }>{cancelText || '取消'}</Button>
      </div>
    );
  }

  onClickConfirm() {
    const {beforeConfirm, onConfirm} = this.props;
    const {isShow} = this.state;
    const args = Array.prototype.slice.call(arguments);

    if (!!onConfirm) {
      const ret = onConfirm.apply(this, [!isShow].concat(args));
      const _this = this;
      if (!!ret instanceof Promise) {
        return ret.then(() => {
          _this.close();
        })
      }
    } else {
      this.close();
    }
  }

  onClickCancel() {
    const {beforeCancel, onCancel} = this.props;
    const {isShow} = this.state;
    const args = Array.prototype.slice.call(arguments);

    if (!!onCancel) {
      onCancel.apply(this, [!isShow].concat(args));
    }
    this.close();
  }

  close() {
    const {onClose} = this.props;
    this.setState({
      isShow: false
    });
    if (!!onClose) {
      onClose.apply(this, Array.prototype.slice.call(arguments));
    }

  }
}

