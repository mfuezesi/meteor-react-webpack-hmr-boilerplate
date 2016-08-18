import React from 'react';
import Header from '../components/Header.jsx';

import './MainLayout.scss';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main className="mainLayout">{this.props.children}</main>
      </div>
    );
  }
}
