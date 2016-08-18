import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <b>Header</b> <br />
        <Link to="/">Home</Link> &nbsp;
        <Link to="/nono">Page not found</Link> &nbsp;
      </header>
    );
  }
}
