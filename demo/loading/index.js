import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Container from '../../tpls/index';
import Loading from '../../components/loading';
import Button from '../../components/button';

export default class D_Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  render() {
    const module = 'chq-loading';
    const {isShow,type} = this.state;
    const cfg = {
      isShow: isShow,
      type: type
    }
    return (
      <div>
        <div className='btn-banner'>
          <Button
            type='primary'
            onClick={() => { this.onClick('flicker') } }>显示/隐藏Loading_样式1</Button>
          <Button
            type='primary'
            onClick={() => { this.onClick('rotate') } }>显示/隐藏Loading_样式2</Button>
        </div>
        <Button
          type='primary'>点我</Button>
        <div>
          <Loading {...cfg} />
        </div>
      </div>
    );
  }
  onClick(type) {
    this.setState({
      isShow: !this.state.isShow,
      type: type
    })
  }
}

ReactDOM.render(
  <Container>
    <D_Loading />
  </Container>,
  document.getElementById('container'));