import React from 'react';
import ReactDOM from 'react-dom';
import _Modal from './modal';
import _TypedModal from './typed-modal';

Object.getOwnPropertyNames(_TypedModal.typeConf).map(name => {
  const obj = _TypedModal.typeConf[name];

  _Modal[name] = (content, conf) => {
    const props = Object.assign({}, {
      type: name,
      content: content,
      isShow: true,
    }, conf);

    // 创建容器box
    const rand = Math.random().toString().replace('0.', '');
    const attrName = 'chq-box';
    const attrVal = `modal_${rand}`;
    let modalBox = document.createElement('div');
    modalBox.setAttribute(attrName, attrVal);
    document.querySelector('body').appendChild(modalBox);

    // distory
    const destory = () => {
      const dom = modalBox;
      ReactDOM.unmountComponentAtNode(dom);
      document.querySelector('body').removeChild(dom);
    }

    //扩展onClose，销毁modal组件
    props.onClose = () => {
      if (typeof conf.onClose === 'function') {
        conf.onClose.call(this, destory);
      }
    }

    ReactDOM.render(<_TypedModal {...props} />, modalBox);
    return destory;
  }
});


// usage
// Modal.success(jsx, cfg);
// Modal.error(jsx, cfg);
// Modal.warning(jsx, cfg);
// Modal.info(jsx, cfg);

export default _Modal;  