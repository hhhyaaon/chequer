import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../../tpls/index.js';
import Button from '../../components/button/index.js';
import './index.scss';

export default class D_Button extends React.Component {

  render() {
    const btnClass = {
      'btn-demo': true,
    }
    return (
      <Container>
        <fieldset>
          <legend>显示状态</legend>
          <div>
            <Button
              className={btnClass}>default</Button>
            <Button
              type='primary'
              className={btnClass}>primary</Button>
            <Button
              type='minor'
              className={btnClass}>minor</Button>
          </div>
        </fieldset>

        <fieldset>
          <legend>禁用状态</legend>
          <div>
            <Button
              disabled={true}
              className={btnClass}>default</Button>
            <Button
              type='primary'
              disabled={true}
              className={btnClass}>primary</Button>
            <Button
              type='minor'
              disabled={true}
              className={btnClass}>minor</Button>
          </div>
        </fieldset>

        <fieldset>
          <legend>按钮大小</legend>
          <div>
            <Button
              type='primary'
              size="small"
              className={btnClass}>小尺寸</Button>
            <Button
              className={btnClass}>默认</Button>
            <Button
              type='minor'
              size="large"
              className={btnClass}>大尺寸</Button>
          </div>
        </fieldset>

        <fieldset>
          <legend>带图标的按钮</legend>
          <div>
            <Button
              iconType="edit"
              className={btnClass}>default</Button>
            <Button
              type='primary'
              iconType="search"
              className={btnClass}>primary</Button>
            <Button
              type='minor'
              iconType="view"
              className={btnClass}>minor</Button>
          </div>
        </fieldset>

        <fieldset>
          <legend>图标按钮</legend>
          <div>
            <Button
              iconType="edit"
              className={btnClass} />
            <Button
              type='primary'
              iconType="search"
              className={btnClass} />
            <Button
              type='minor'
              iconType="view"
              className={btnClass} />
          </div>
          <div>
            <Button
              iconType="edit"
              shape="circle"
              className={btnClass} />
            <Button
              type='primary'
              iconType="search"
              shape="circle"
              className={btnClass} />
            <Button
              type='minor'
              iconType="view"
              shape="circle"
              className={btnClass} />
          </div>
        </fieldset>

        <fieldset>
          <legend>事件</legend>
          <div>
            <Button
              iconType="edit"
              onClick={() => { alert('click me!') } }
              className={btnClass}>点我</Button>
            <Button
              type='primary'
              iconType="search"
              disabled={true}
              onClick={() => { alert('click me!') } }
              className={btnClass}>点我</Button>
          </div>
        </fieldset>
      </Container>
    )
  }
}
ReactDOM.render(<D_Button />, document.getElementById('container'));