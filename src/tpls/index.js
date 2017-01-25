import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

export default class Container extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const children = this.props.children;

    return (
      <section>{children}</section>
    );
  }
}

