import React from 'react';
import ReactDOM from 'react-dom';
import Container from '../../tpls/index';
import Icon from '../../components/icon';
import './index.scss';

export default class D_Icon extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: []
    }
  }

  componentDidMount() {
    let _this = this;
    fetch("../../components/icon/index.css").then((res) => {
      if (res.status === 200) {
        res.text().then(data => {
          _this.getIconFont(data);
        })
      }
    })
  }

  getIconFont(data) {
    let arr = [];
    (data || '').replace(/\.chq-ico-(.+?):.+?\{([\d\D]*?)}/g, (rs, $1, $2) => {
      let unicode = '';
      $2.replace(/content:\s*"([\w\\]+?)"/g, (_rs, _$1) => {
        unicode = _$1;
      });
      arr.push(
        {
          type: $1.trim(),
          unicode: unicode.trim()
        }
      )
    });
    this.setState({
      arr: arr
    })
  }

  setIconFont() {
    const {arr} = this.state;
    return arr.map(o =>
      <li key={o.type}>
        <Icon type={o.type} />
        <p>{o.type}</p>
        <p>{o.unicode}</p>
      </li>
    );
  }
  render() {
    const iconJSX = this.setIconFont();
    return (
      <ul id="d_ico_list">
        {iconJSX}
      </ul>
    )
  }
}
ReactDOM.render(
  <Container>
    <D_Icon />
  </Container>, document.getElementById('container'));