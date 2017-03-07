import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Container from '../../tpls/index';
import Message from '../../components/message';
import Icon from '../../components/icon';
import Button from '../../components/button';


export class D1_Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <fieldset>
                <legend>默认Message</legend>
                <div>
                    <Message>默认Message</Message>
                    <Button type='primary'>显示</Button>
                </div>
            </fieldset>
        )
    }
}
export class D_Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msgType: ''
        }
    }
    render() {
        const btnJSX = this.getBtnType();
        return (
            <div>
                <Message type={this.state.msgType}>
                    <Icon type='tick-circle'>默认</Icon>
                </Message>
                <div>{btnJSX}</div>
            </div>
        );
    }
    getBtnType() {
        const msgType = {
            default: {
                msg: <Icon type='tick-circle'>默认</Icon>
            },
            primary: {
                msg: <Icon type='tick-circle'>首选项</Icon>
            },
            success: {
                msg: <Icon type='tick-circle'>成功</Icon>
            },
            error: {
                msg: <Icon type='cross-circle'>失败</Icon>
            },
            warning: {
                msg: <Icon type='hint-circle'>提示</Icon>
            }
        };
        return Object.getOwnPropertyNames(msgType).map(name => (
            <Button key={name}
                onClick={() => {
                    this.setState({
                        msgType: name
                    });
                }}>{msgType[name].msg}</Button>
        ));
    }
}


ReactDOM.render(
    <Container>
        <D1_Message />
        <D_Message />
    </Container>,
    document.getElementById('container'));