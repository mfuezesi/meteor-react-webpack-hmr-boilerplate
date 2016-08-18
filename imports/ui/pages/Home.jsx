import React from 'react';
import classNames from 'classnames';

export default class Home extends React.Component {
  render() {
    return (
      <div className={classNames('Home', 'foo', 'bar')} >
        <h1>Welcome!</h1>
      </div>
    );
  }
}

export default Home;
