import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.scss';

export default class Message extends Component {
    static propTypes = {
        type: PropTypes.string,
        duration: PropTypes.number
    }
    constructor(props) {
        super(props);
        this.state = {
            typeArr: ['default', 'primary', 'success', 'error', 'warning']
        }
    }
    render() {
        const {
            children,
            type } = this.props;
        const {
                typeArr } = this.state;
        const msgType = typeArr.filter(t => t === type).length > 0 ? type : 'default';
        const cls = classnames({
            [`chq-msg`]: true,
            [`chq-msg-${msgType}`]: true
        });

        return (
            <div className='chq-msg-wrap'>
                <div className={cls}>{children}</div>
            </div>
        )
    }

}