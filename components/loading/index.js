import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import './index.scss';

export default class Loading extends Component {
  static propTypes = {
    type: PropTypes.string,
    isShow: PropTypes.bool
  }

  constructor(props) {
    super(props);
    this.state = {
      notAnim: !props.isShow,
      styTypeArr: ['flicker', 'rotate']
    };
  }
  componentWillReceiveProps(next) {
    this.setState({
      notAnim: false
    })
  }
  render() {
    const module = 'chq-loading';
    const {styTypeArr, notAnim} = this.state;
    const {type, isShow} = this.props;
    const styleType = styTypeArr.filter(t => t === type).length > 0 ? type : 'flicker';

    const iconCls = classnames({
      [`${module}-icon`]: true,
      [`${module}-${styleType}`]: true,
    });
    const loadingCls = classnames({
      [`${module}`]: true,
      [`${module}-notanim`]: notAnim,
      [`${module}-show`]: !!isShow,
      [`${module}-hide`]: !isShow,
    });
    return (
      <div className={loadingCls}>
        <div className={iconCls}></div>
      </div>
    );
  }
}