import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './typed-modal.scss';
import Modal from './modal';
import Icon from '../icon'

const typeConf = {
  success: {
    title: '成功',
    ico: 'tick-circle',
    cls: 'chq-modal-success',
  },
  error: {
    title: '失败',
    ico: 'cross-circle',
    cls: 'chq-modal-error',
  },
  warning: {
    title: '警告',
    ico: 'hint-circle',
    cls: 'chq-modal-warning',
  },
  info: {
    title: '信息',
    ico: 'hint-circle',
    cls: 'chq-modal-info',
  },
  confirm: {
    title: '确认',
    ico: 'question-circle',
    cls: 'chq-modal-confirm'
  }
}

class TypedModal extends Component {
  constructor(props) {
    super(props);
  }

  static propsType = {
    type: PropTypes.string,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ])
  }

  render() {
    const {type} = this.props;
    const modalCfg = typeConf[type] || typeConf['success'];
    const conf = Object.assign({}, {
      title: modalCfg.title,
      width: 320,
    }, this.props);

    const content = this.getContent();

    return (
      <Modal {...conf}>
        {content}
      </Modal>
    )
  }
  getContent() {
    const {type, content} = this.props;
    const cfg = typeConf[type] || typeConf['success'];
    return (
      <div className="chq-modal-t">
        <Icon
          type={cfg.ico}
          className={`chq-modal-tico ${cfg.cls}`} />
        <div className="chq-modal-tctn">{content}</div>
      </div>
    )
  }
}

TypedModal.typeConf = typeConf;
export default TypedModal;