import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../../tpls/index';
import Input from '../../components/input';
import './index.scss';


export default class D_Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const conf = {

    };
    return (
      <div>
        <fieldset>
          <legend>普通输入框</legend>
          <div>
            <ul className="input-demo-1">
              <li>
                <div>姓名</div>
                <Input value="hyaaon" />
              </li>
              <li>
                <div>密码</div>
                <Input type="password" value="123" />
              </li>
              <li>
                <div>多行文本</div>
                <Input type="textarea" value="hello world" />
              </li>
            </ul>
          </div>
        </fieldset>

        <fieldset>
          <legend>禁用输入框</legend>
          <div>
            <ul className="input-demo-1">
              <li>
                <div>姓名</div>
                <Input
                  disabled={true} />
              </li>
              <li>
                <div>密码</div>
                <Input
                  type="password"
                  disabled={true} />
              </li>
              <li>
                <div>多行文本</div>
                <Input
                  type="textarea"
                  disabled={true} />
              </li>
            </ul>
          </div>
        </fieldset>

        <fieldset>
          <legend>只读输入框</legend>
          <div>
            <ul className="input-demo-1">
              <li>
                <div>姓名</div>
                <Input
                  value='value'
                  readonly={true} />
              </li>
              <li>
                <div>密码</div>
                <Input
                  type="password"
                  value='value'
                  readonly={true} />
              </li>
              <li>
                <div>多行文本</div>
                <Input
                  type="textarea"
                  value='value'
                  readonly={true} />
              </li>
            </ul>
          </div>
        </fieldset>

        <fieldset>
          <legend>事件</legend>
          <div>
            <ul className="input-demo-1">
              <li>
                <div>姓名</div>
                <Input
                  value='value'
                  onChange={(v) => { console.log(v); } } />
              </li>
              <li>
                <div>多行文本</div>
                <Input
                  type="textarea"
                  onChange={(v) => { console.log(v); } }/>
              </li>
            </ul>
          </div>
        </fieldset>
      </div>
    );
  }
}

ReactDOM.render(
  <Container>
    <D_Input />
  </Container>,
  document.getElementById('container'));