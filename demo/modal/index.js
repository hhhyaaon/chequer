import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../../tpls/index';
import Modal from '../../components/modal';
import Button from '../../components/button';
import './index.scss';

// 普通modal
export class D1_Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    }
  }

  render() {
    const cfg = {
      title: '标题',
      isShow: this.state.isShow,
      onCancel: (isVisible, e) => {
        this.close();
      },
      onConfirm: (isVisible, e) => {
        this.close();
      }
    };
    return (
      <div>
        <fieldset>
          <legend>普通弹窗</legend>
          <div>
            <Button
              type="primary"
              onClick={(e) => { this.onClick(e) } }>点我</Button>
            <Modal {...cfg}>
              <div>显示内容</div>
              <div>显示内容</div>
              <div>显示内容</div>
              <div>显示内容</div>
            </Modal>
          </div>
        </fieldset>
      </div>
    )
  }
  onClick() {
    this.open();
  }
  close() {
    this.setState({
      isShow: false
    })
  }
  open() {
    this.setState({
      isShow: true
    })
  }
}


// 异步事件
export class D2_Modal extends React.Component {
  constructor() {
    super();
    this.state = {
      isShow: false
    }
  }

  render() {
    const cfg = {
      title: '标题',
      isShow: this.state.isShow,
      confirmText: '点击【确定】后3秒关闭',
      onCancel: (isVisible, e) => {
        this.close();
      },
      onConfirm: (isVisible, e) => {
        const _this = this;
        // 3秒后关闭
        return this.closeAfter(3).then(() => {
          this.close();
        });
      }
    };
    return (
      <div>
        <fieldset>
          <legend>异步事件</legend>
          <p>点击Modal中【确定】按钮后3秒，Modal关闭</p>
          <div>
            <Button
              type="primary"
              onClick={(e) => { this.onClick(e) } }>点我</Button>
            <Modal {...cfg}>
              <div>显示内容</div>
              <div>显示内容</div>
              <div>显示内容</div>
              <div>显示内容</div>
            </Modal>
          </div>
        </fieldset>
      </div>
    )
  }
  onClick() {
    this.setState({
      isShow: true
    })
  }
  close() {
    this.setState({
      isShow: false
    })
  }
  open() {
    this.setState({
      isShow: true
    })
  }
  closeAfter(s) {
    const start = new Date().getTime();
    return new Promise((res, rej) => {
      const timeId = setInterval(() => {
        const cur = new Date().getTime();
        const interval = parseInt((cur - start) / 1000);
        console.log(interval);
        if ((s - interval) <= 0) {
          clearInterval(timeId);
          res();
        }
      }, 1000);
    });
  }
}

// 类型化modal
export class D3_Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }
  componentDidMount() {
    const {isShow} = this.state;
    // Modal.success('xxx', {
    //   isShow: isShow
    // });
  }

  render() {
    const typeArr = [
      'success',
      'error',
      'info',
      'warning',
      'confirm'
    ];
    const btnJSX = this.getBtnJSX(typeArr);
    return (
      <div>
        <fieldset>
          <legend>类型化弹窗</legend>
          <p>用于在特定的场景下对用户进行提示</p>
          <div>
            {btnJSX}
          </div>
        </fieldset>
      </div>
    );
  }
  getBtnJSX(typeArr) {
    return typeArr.map(t => <Button
      className='btn-demo'
      key={t}
      type='primary'
      onClick={() => { this.onClick(t); } }>{t}</Button>)
  }
  onClick(type) {
    //Modal.success('xx',)
    Modal[type](type, {
      onClose: (destory) => {
        destory();
      }
    });
  };
}


ReactDOM.render(
  <Container>
    <D1_Modal />
    <D2_Modal />
    <D3_Modal />
  </Container>,
  document.getElementById('container'));